import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UF } from './models/UF';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ufs: UF[] = [];
  target: UF;

  currentUrl: string;
  validUrl: boolean;

  pageLoaded: boolean = false;

  // urlParamsArray: any[] = [];

  constructor(
    private router: Router,
    location: PlatformLocation
  ) {
    location.onPopState(() => {
      this.ngOnInit();
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.ufs.length == 0) await this.getUfs();

    this.currentUrl = window.location.pathname;

    setTimeout(() => {
      this.saveParams(window.location.pathname);

      this.validUrl = 
        window.location.pathname.split('/')[1] == 'denuncia' && 
        window.location.pathname.split('/')[2]?.length == 2  && 
        window.location.pathname.split('/')[3] == 'crvirtual'|| 
        window.location.pathname.split('/')[3] == undefined  ||
        window.location.pathname == '/';
      
      if (!this.validUrl) this.router.navigate([`/404`]);
    }, 100);
  
    this.loadTemplate();
  }
  
  /**
   * Get UFs
   */
  async getUfs() {
    await fetch('assets/data/ufs.json')
    .then(res => res.json())
    .then(json => {
      this.ufs = json.ufs;
    });
  }
  
  /**
   * Navigate to a specific location
   *  
   * @param {string} value
   */
  private navigateTo(value: any): void {
    // this.target = value;

    if (value && value.id != '/') {
      this.router.navigate([`/denuncia/${value.id}`]);
    } else if (value.id == '/') {
      this.router.navigate([``]);
    } else {
      this.router.navigate([`/404`]);
    }
  }

  /**
   * Change UF
   * 
   * @param event 
   */
  changeUf = (event: any): void => {
    this.navigateTo(event.value);

    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }

  /**
   * Transform URL params to object
   * 
   * @param urlParams 
   */
  private saveParams(urlParams: any): void {

    //paramsToObject()
    // var urlParamsArray: any[] = [];

    // urlParams.split("/").reduce(function(obj, str, index) {
    //   let strParts = str.split("/");
    //   if (strParts[0]) {
    //     obj[strParts[0].replace(/\s+/g, '')] = strParts[0].trim();
    //     urlParamsArray.push(strParts[0].replace(/\s+/g, ''));
    //   }
    //   return obj;
    // }, {});

    // console.log('> urlParams: ' + urlParams);

    if (urlParams == '/') {
      this.target = this.ufs[0];
      localStorage.setItem('target', JSON.stringify(this.ufs[0]));
    } else {
      this.ufs.filter((uf: UF) => {
        if (uf.id == urlParams.split('/')[2]) {
          this.target = uf;
          localStorage.setItem('target', JSON.stringify(uf));
        }
      });
    }

    // this.urlParamsArray = urlParamsArray;
  }

  /**
   * Load function
   * 
   * @param text 
   * @returns 
   */
  loadFunction = (text: string): any => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, this.currentUrl == '/404' ? 500 : this.currentUrl == '/' ? 2000 : 1000);
    });
  }

  /**
   * Load template
   */
  loadTemplate = async () => {
    this.loadFunction('Loading...')
    .then((res) => {
      this.pageLoaded = true;
      // console.log(res);
    });
  }
  
  // function restante(salario) {
  //   var nuBank = 248.98;
  //   var mercadoPago = 173.73;
  //   var inter = 244.19;
  //   var agua = 100;
  //   var luz = 100;
  //   var pravaler = 410;

  //   return salario - (this.mercadoPago + this.nuBank + this.inter + this.agua + this.luz + this.pravaler);
  // }
  
}
