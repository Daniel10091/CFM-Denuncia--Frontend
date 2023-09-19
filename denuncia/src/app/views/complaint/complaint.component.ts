import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss'],
  providers: [MessageService]
})
export class ComplaintComponent implements OnInit {

  value: string;
  sendButtonLabel: string = 'Enviar';
  request: any;
  requestCode: string;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    localStorage.removeItem('request code');
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  cancel(): void {
    // window.history.back();
    clearTimeout(this.request);
  }

  send(): void {
    this.sendButtonLabel = 'Enviando...';

    if (localStorage.getItem('request code') && this.requestCode == localStorage.getItem('request code')) {
      this.showToastMessate('error', 'Erro', 'Você já enviou esta denúncia');
      this.sendButtonLabel = 'Enviar';
      return;
    }

    this.request = setTimeout(() => {
      this.requestCode = this.generateCode();
      localStorage.setItem('request code', this.requestCode);

      if (this.requestCode != null || this.requestCode != undefined) {
        this.showToastMessate('success', 'Sucesso', 'Sua denúncia foi enviada');
      }

      this.sendButtonLabel = 'Enviar';
    }, 1000);
  }

  /**
   * Show toast message
   * 
   * @param severity
   * @param summary
   * @param detail
   * @options [ success ], [ info ], [ warn ], [ error ]
   */
  showToastMessate(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

  // Generate a random code for the request
  generateCode(): string {
    return Math.random().toString(36).substr(2, 9);
  }

}
