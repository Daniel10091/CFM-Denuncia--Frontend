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
  captchaResolved: boolean = false;

  // Dados pessoais do denunciante
  name: string;
  cpf: string;
  patientName: string;
  patientKinship: string;
  patienteProfession: string;
  age: number;
  maritalStatus: string;
  phone: string;
  phoneCell: string;
  email: string;
  emailConfirm: string;

  // Endereço residencial do denunciante
  cep: string;
  address: string;
  numberOrComplement: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement: string;
  incidentOccurredCity: string;
  incidentOccurredDate: string;
  incidentOccurredDoctorName: string;
  complaintDescription: string;
  complaintEvidence: string;
  witnessesRelation: string;
  establishmentName: string;

  dataChecked: boolean = false;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    localStorage.removeItem('request code');
  }

  /**
   * Resolve the captcha
   * 
   * @param captchaResponse 
   */
  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResolved = true;
    document.getElementById('captcha').classList.remove('invalid');
  }

  /**
   * Handle the captcha error
   * 
   * @param e 
   */
  errored(e: any) {
    console.warn(`reCAPTCHA error encountered`);
  }

  /**
   * Cancel the complaint
   */
  cancel(): void {
    window.history.back();
    // clearTimeout(this.request);
  }

  /**
   * Send the complaint
   */
  send(): void {
    setTimeout(() => {
      this.checkData();

      if (!this.dataChecked) {
        return
      } else if (!this.captchaResolved) {
        this.showToastMessate('error', 'Erro', 'Resolva o captcha para enviar a denúncia');
        // document.getElementById('captcha').scrollIntoView();
        document.getElementById('captcha').classList.add('invalid');
        return;
      }
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

      setInterval(() => {
        clearTimeout(this.request);
        window.history.back();
      }, 5000);
    }, 100);
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

  /**
   * Generate a random code for the request
   * 
   * @returns 
   */
  generateCode(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  /**
   * Check if the input is required and if it is empty
   * 
   * @param id 
   * @param $event 
   */
  onModelChange(id: string, $event: any) {
    const input = document.querySelector(`#${id}`) as HTMLInputElement | null;
    
    if (input.hasAttribute('required')) {
      if ($event == '' || $event == null || $event == undefined) {
        input?.classList.add('invalid');
      } else {
        input?.classList.remove('invalid');
      }
    }
  }

  /**
   * Check if all data is filled
   * 
   * @returns 
   */
  checkData() {
    const elements = document.querySelectorAll('.fiend-text');
    
    // elements.forEach((element) => {
    //   console.log(element.hasAttribute('required'));
    // });

    var elementsArray: any[] = [];

    elements.forEach((element) => {
      const input = document.querySelector(`#${element.id}`) as HTMLInputElement | null;
      
      if (input != null && input.hasAttribute('required')) {
        if (input.value == '' || input.value == null || input.value == undefined) {
          elementsArray.push(element.id);
          return;
        } else {
          input.classList.remove('invalid');
        }
      }
    });

    for (let i = 0; i < elements.length; i++) {
      const input = document.querySelector(`#${elementsArray[i]}`) as HTMLInputElement | null;
      
      if (input.hasAttribute('required')) {
        if (input.value == '' || input.value == null || input.value == undefined) {
          this.showToastMessate('error', 'Erro', `Preencha o campo ${input.parentNode.querySelector('label').innerText}`);

          input.scrollIntoView();

          setTimeout(() => {
            input.classList.add('invalid');
            input.focus();
          }, 200);
          return;
        }
      }
    }

    // console.log(this.dataChecked);
    
    this.dataChecked = true;
  }

}
