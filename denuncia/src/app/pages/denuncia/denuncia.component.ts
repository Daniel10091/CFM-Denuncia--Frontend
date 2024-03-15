import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.scss'],
  providers: [MessageService]
})
export class DenunciaComponent implements OnInit {

  value: string;
  sendButtonLabel: string = 'Enviar';
  request: any;
  requestCode: string;
  captchaResolved: boolean = false;

  form: FormGroup = new FormGroup({});
  
  // complaintData: any = {
  //   name: '',
  //   cpf: '',
  //   patientName: '',
  //   patientKinship: '',
  //   patienteProfession: '',
  //   age: '',
  //   maritalStatus: '',
  //   phone: '',
  //   phoneCell: '',
  //   email: '',
  //   emailConfirm: '',
  //   cep: '',
  //   address: '',
  //   numberOrComplement: '',
  //   neighborhood: '',
  //   city: '',
  //   uf: '',
  //   complement: '',
  //   incidentOccurredCity: '',
  //   incidentOccurredDate: '',
  //   incidentOccurredDoctorName: '',
  //   complaintDescription: '',
  //   complaintEvidence: '',
  //   witnessesRelation: '',
  //   establishmentName: ''
  // }

  // // Dados pessoais do denunciante
  // name: string;
  // cpf: string;
  // patientName: string;
  // patientKinship: string;
  // patienteProfession: string;
  // age: number;
  // maritalStatus: string;
  // phone: string;
  // phoneCell: string;
  // email: string;
  // emailConfirm: string;

  // // Endereço residencial do denunciante
  // cep: string;
  // address: string;
  // numberOrComplement: string;
  // neighborhood: string;
  // city: string;
  // uf: string;
  // complement: string;
  // incidentOccurredCity: string;
  // incidentOccurredDate: string;
  // incidentOccurredDoctorName: string;
  // complaintDescription: string;
  // complaintEvidence: string;
  // witnessesRelation: string;
  // establishmentName: string;

  dataChecked: boolean = false;

  @ViewChild('captcha')
  recaptcha!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private messageService: MessageService, private ngZone: NgZone) {
    this.renderizarReCaptcha();
  }

  ngOnInit(): void {
    this.form = this.createForm();
    localStorage.removeItem('request code');
  }

  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      patientName: new FormControl(null, Validators.required),
      patientKinship: new FormControl(null, Validators.required),
      patienteProfession: new FormControl(null),
      age: new FormControl(null, Validators.required),
      maritalStatus: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      phoneCell: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      emailConfirm: new FormControl(null, Validators.required),
      cep: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      numberOrComplement: new FormControl(null, Validators.required),
      neighborhood: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      uf: new FormControl(null, Validators.required),
      complement: new FormControl(null),
      incidentOccurredCity: new FormControl(null, Validators.required),
      incidentOccurredDate: new FormControl(null, Validators.required),
      incidentOccurredDoctorName: new FormControl(null, Validators.required),
      complaintDescription: new FormControl(null, Validators.required),
      complaintEvidence: new FormControl(null),
      witnessesRelation: new FormControl(null),
      establishmentName: new FormControl(null, Validators.required),
      complaintEvidenceFiles: new FormControl(null, Validators.required),
    });
  }

  // *
  // * Quando adicionamos o script do reCAPTCHA no
  // * index.html, o script cria uma variável de
  // * escopo global chamada "grecaptcha".
  // * Então para pegar sua referência podemos
  // * acessá-la através do "window"
  // *
  get grecaptcha(): any {
    const w = window as any;
    return w['grecaptcha'];
  }

  renderizarReCaptcha() {
    // *
    // * Para evitar que change detection seja disparado
    // * cada vez que o setTimeout for executado,
    // * executamos essa recorrência fora da zona
    // * do Angular, por isso o usamos o runOutsideAngular
    // *
    // * Para saber mais sobre change detection:
    // * https://consolelog.com.br/como-funciona-change-detection-angular/
    // * 
    this.ngZone.runOutsideAngular(() => {
      // *
      // * Se o "grecaptcha" ainda não foi carregado ou
      // * o elemento <div> onde o reCAPTCHA será
      // * renderizado ainda não foi construído,
      // * aguardamos algum tempo e executamos novamente
      // * este método:
      // *
      if (!this.grecaptcha || !this.recaptcha) {
        setTimeout(() => {
          this.renderizarReCaptcha();
        }, 500);

        return;
      }

      // * Se chegou aqui é porque o recaptcha já está
      // * carregado. Então solicitamos sua renderização
      // * na tela.
      const idElemento = this.recaptcha.nativeElement.getAttribute('id');

      this.grecaptcha.render(idElemento, {
        sitekey: '6LepbP0UAAAAAJ4txXicgIKYE_GRgP6djVysEAi3',
        callback: (response: string) => {
          // * Este método é chamado quando o usuário
          // * resolver o desafio do CAPTCHA
          this.ngZone.run(() => {
            this.form.get('recaptcha')?.setValue(response);
          });
        },
      });
    });
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

  uploadFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.form.get('complaintEvidenceFiles')?.setValue(e.target.result);
    }

    reader.readAsDataURL(file);
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

    // console.log($event.match(/^[0-9]+$/));
    console.log('0123456789'.includes($event));
    
    
    if (input.hasAttribute('required')) {
      if ($event == '' || $event == null || $event == undefined || $event.match(/^[0-9]+$/)) {
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

    // console.log(this.complaintData);

    var elementsArray: any[] = [];

    elements.forEach((element) => {
      const input = document.querySelector(`#${element.id}`) as HTMLInputElement | null;
      
      if (input != null && input.hasAttribute('required')) {
        if (input.value == '' || input.value == null || input.value == undefined) {
          elementsArray.push(element.id);
          
          console.log(input.value);
          return;
        } else {
          input.classList.remove('invalid');
          
        }
      }
      return;
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

    if (Object.values(this.form.value).includes('')) {
      this.showToastMessate('error', 'Erro', 'Preencha todos os campos obrigatórios');
      return;
    }
    
    this.dataChecked = true;
  }

}
