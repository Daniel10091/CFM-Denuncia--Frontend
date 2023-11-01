import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { MaritalStatus } from './interfaces/MaritalStatus';
import { ComplaintService } from 'src/app/services/complaint.service';
import { AddressService } from 'src/app/services/address.service';
import { selectModel } from 'src/app/models/dropdown';
// import { UploadEvent } from './models/UploadEvent';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss'],
  providers: [MessageService]
})
export class ComplaintComponent implements OnInit {

  @ViewChild('fileUpload') fileUpload: FileUpload;

  whistleblowerIsThePatient: boolean = false;

  phoneUnmask: boolean = false;
  cellPhoneUnmask: boolean = false;

  maritalStatusOptions: MaritalStatus[] | undefined;
  
  dropdownUf: selectModel[];
  selectedUf: selectModel;

  sendButtonLabel: string = 'Enviar';
  request: any; // O request é salvo em uma variável para que possa ser cancelado caso o usuário clique no botão de enviar mais de uma vez
  requestCode: string; // O código gerado (requestCode) é salvo no local storage para evitar que o usuário envie a mesma denúncia mais de uma vez
  captchaResolved: boolean = false;
  
  // Dados da denúncia
  complaintData: any = {
    name: '',
    cpf: '',
    patientKinship: '',
    age: '',
    maritalStatus: '',
    phone: '',
    phoneCell: '',
    email: '',
    emailConfirm: '',
    patientName: '',
    patienteProfession: '',
    zipCode: '',
    address: '',
    number: '',
    neighborhood: '',
    city: '',
    uf: null,
    complement: '',
    incidentOccurredCity: '',
    incidentOccurredDate: '',
    incidentOccurredDoctorName: '',
    complaintDescription: '',
    complaintEvidence: '',
    witnessesRelation: '',
    establishmentName: ''
  }

  // Dados pessoais do denunciante
  name: string;
  cpf: string;
  patientKinship: string;
  age: number;
  maritalStatus: string;
  phone: string;
  phoneCell: string;
  email: string;
  emailConfirm: string;

  // Datos pessais do paciente
  patientName: string;
  patienteProfession: string;

  // Endereço residencial do denunciante
  zipCode: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: selectModel;
  complement: string;
  incidentOccurredCity: string;
  incidentOccurredDate: string;
  incidentOccurredDoctorName: string;
  complaintDescription: string;
  complaintEvidence: string;
  witnessesRelation: string;
  establishmentName: string;

  dataChecked: boolean = false; // Variável que verifica se todos os dados obrigatórios foram preenchidos

  constructor(
    private router: Router, 
    private messageService: MessageService,
    private addressService: AddressService,
    private complaintService: ComplaintService
  ) {
  }

  ngOnInit(): void {
    localStorage.removeItem('request code');

    this.maritalStatusOptions = [
      { label: 'Selecione', value: '' },
      { label: 'Solteiro(a)', value: 'Solteiro(a)' },
      { label: 'Casado(a)', value: 'Casado(a)' },
      { label: 'Divorciado(a)', value: 'Divorciado(a)' },
      { label: 'Viúvo(a)', value: 'Viúvo(a)' }
    ];

    this.dropdownUf = [
      { name: 'Selecione', code: '' },
      { name: 'AC', code: 'AC' },
      { name: 'AL', code: 'AL' },
      { name: 'AM', code: 'AM' },
      { name: 'AP', code: 'AP' },
      { name: 'BA', code: 'BA' },
      { name: 'CE', code: 'CE' },
      { name: 'DF', code: 'DF' },
      { name: 'ES', code: 'ES' },
      { name: 'GO', code: 'GO' },
      { name: 'MA', code: 'MA' },
      { name: 'MG', code: 'MG' },
      { name: 'MT', code: 'MT' },
      { name: 'MS', code: 'MS' },
      { name: 'PA', code: 'PA' },
      { name: 'PB', code: 'PB' },
      { name: 'PE', code: 'PE' },
      { name: 'PI', code: 'PI' },
      { name: 'PR', code: 'PR' },
      { name: 'RJ', code: 'RJ' },
      { name: 'RN', code: 'RN' },
      { name: 'RS', code: 'RS' },
      { name: 'RO', code: 'RO' },
      { name: 'RR', code: 'RR' },
      { name: 'SC', code: 'SC' },
      { name: 'SP', code: 'SP' },
      { name: 'SE', code: 'SE' },
      { name: 'TO', code: 'TO' }
    ];
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
    const input = document.querySelector('#email') as HTMLInputElement | null;

    setTimeout(() => {
      // Verifica se o e-mail já está preenchido e se é válido
      if (input.value !== '') {
        if (this.isEmail(input.value) == false) {
          this.showToastMessate('error', 'Erro', 'E-mail inválido');
          
          input.classList.add('invalid');
          input.scrollIntoView();
  
          return;
        } else {
          input.classList.remove('invalid');
        }
      }

      // Verifica se todos os dados obrigatórios foram preenchidos
      this.checkData();

      // Se não foram preenchidos, retorna
      if (!this.dataChecked) {
        return;
      }

      
      
      // Se o captcha não foi resolvido, retorna e mostra uma mensagem de erro para o usuário resolver o captcha
      if (!this.captchaResolved) {
        this.showToastMessate('error', 'Erro', 'Resolva o captcha para enviar a denúncia');
        // document.getElementById('captcha').scrollIntoView();
        document.getElementById('captcha').classList.add('invalid');
        return;
      }
      this.sendButtonLabel = 'Enviando...';

      // Verifica se o usuário já enviou a denúncia
      if (localStorage.getItem('request code') && this.requestCode == localStorage.getItem('request code')) {
        this.showToastMessate('error', 'Erro', 'Você já enviou esta denúncia');
        this.sendButtonLabel = 'Enviar';
        return;
      }

      this.request = setTimeout(() => {
        // O código gerado (requestCode) é salvo no local storage para evitar que o usuário envie a mesma denúncia mais de uma vez
        this.requestCode = this.generateCode();
        localStorage.setItem('request code', this.requestCode);

        this.complaintService.criateComplaintPdf(this.complaintData).subscribe((data) => {
          console.log(data);
        });

        // Se o código for gerado, a denúncia é enviada
        if (this.requestCode != null || this.requestCode != undefined) {
          this.showToastMessate('success', 'Sucesso', 'Sua denúncia foi enviada');
        }

        this.sendButtonLabel = 'Enviar';
      }, 1000);

      // Volta para a página anterior após 2 segundos
      setTimeout(() => {
        clearTimeout(this.request);
        // window.history.back();
      }, 2000);
    }, 100);
  }

  onFileUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
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
    const inputMask = input?.querySelector('input') as HTMLInputElement | null;

    // console.log(input.hasChildNodes() ? `checking ${input.childNodes[0].nodeValue}` : 'checking');
    // console.log(input.hasAttribute('required') ? 'required' : 'not required');
    
    if (input.hasAttribute('required')) {
      if (inputMask == null) {
        if ($event == '' || $event == null || $event == undefined) {
          input?.classList.add('invalid');
        } else {
          input?.classList.remove('invalid');
        }
      } else {
        if ($event?.value != null) {
          if ($event?.value == '' || $event?.value == null || $event?.value == undefined) {
            inputMask?.classList.add('invalid');
          } else {
            inputMask?.classList.remove('invalid');
          }
        } else {
          if ($event.replace(/\D/g, '') == '' || $event.replace(/\D/g, '') == null || $event.replace(/\D/g, '') == undefined) {
            inputMask?.classList.add('invalid');
          } else {
            inputMask?.classList.remove('invalid');
          }
        }
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

    // Percorre todos os elementos com a classe fiend-text e verifica se o campo é obrigatório e se está vazio
    elements.forEach((element) => {
      const input = document.querySelector(`#${element.id}`) as HTMLInputElement | null;
      const inputMask = input?.querySelector('input') as HTMLInputElement | null;
      
      // console.log(inputMask === null ? this.complaintData[element.id] = input?.value : this.complaintData[element.id] = inputMask?.value.replace(/\D/g, ''));

      // Remove caracteres especiais do campo de telefone e celular e deixa apenas os números
      // inputMask?.value.replace(/\D/g, '')

      // console.log(inputMask);
      if (inputMask?.hasAttribute('aria-haspopup') && inputMask?.getAttribute('aria-haspopup') == 'listbox') {
        // this.complaintData[element.id] = input?.value;
        console.log(this.complaintData[element.id].value);
      }
      
      if (input != null && input.hasAttribute('required')) {
        if (inputMask === null && (input.value == '' || input.value == null || input.value == undefined)) {
          elementsArray.push(element.id);
          return;
        } if (inputMask !== null && (inputMask?.value == '' || inputMask?.value == null || inputMask?.value == undefined)) {
          elementsArray.push(element.id);
          return;
        }
      }
      
      return;
    });

    // Se algum campo obrigatório não foi preenchido, mostra uma mensagem de erro e retorna
    for (let i = 0; i < elements.length; i++) {
      const input = document.querySelector(`#${elementsArray[i]}`) as HTMLInputElement | null;
      const inputMask = input?.querySelector('input') as HTMLInputElement | null;
      
      if (input != null && input.hasAttribute('required')) {
        if (
          (inputMask === null && (input.value == '' || input.value == null || input.value == undefined)) || 
          (inputMask !== null && (inputMask?.value == '' || inputMask?.value == null || inputMask?.value == undefined))
        ) {
          this.showToastMessate('error', 'Erro', `Preencha o campo ${input.parentNode.querySelector('label').innerText}`);
          
          input.scrollIntoView();
          
          setTimeout(() => {
            if (inputMask !== null) {
              inputMask.classList.add('invalid');
              inputMask.focus();
            } else {
              input.classList.add('invalid');
              input.focus();
            }
          }, 200);

          return;
        }
      }
    }

    // if (Object.values(this.complaintData).includes('')) {
    //   this.showToastMessate('error', 'Erro', 'Preencha todos os campos obrigatórios');
    //   return;
    // }
    
    this.dataChecked = true;
  }

  isEmail(email: string): boolean {
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  }

  addressQuery() {
    if (this.complaintData.zipCode.replace(/[^0-9]+/g, '').length == 8) {
      this.addressService.getAddressByZipCode(this.complaintData.zipCode.replace(/[^0-9]+/g, ''))
      .subscribe({
        next: (data: any) => {
            this.complaintData.zipCode = data.zipCode;
            this.complaintData.address = data.street;
            this.complaintData.logradouro = data.logradouro;
            this.complaintData.neighborhood = data.neighborhood;
            this.complaintData.city = data.city;
            this.complaintData.uf = data.uf;
            this.complaintData.complement = data.complement;
            this.complaintData.uf = {
              name: data.uf,
              code: data.uf
            };
          },
        complete : () => {  },
        error : () => {  }
      });      
    }
  }

}
