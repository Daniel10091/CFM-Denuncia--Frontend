import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UF } from './models/UF';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ufs: UF[] = [];

  urlParam1: string;
  urlParam2: string;
  urlParam3: string;
  checkedUrl: boolean = false;
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
      // console.log('pressed back!');
    });
    location.onHashChange(() => {
      this.ngOnInit();
      console.log('hash changed!');
    });
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.checkedUrl = this.checkUrlIsComplaintPage(event.url);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.ufs.length == 0) await this.getUfs();
    
    this.currentUrl = window.location.pathname;

    setTimeout(() => {
      this.validUrl = 
        window.location.pathname.split('/')[1] == '404'      ||
        window.location.pathname.split('/')[1] == 'denuncia' && 
        window.location.pathname.split('/')[2]?.length == 2  && 
        window.location.pathname.split('/')[3] == 'crvirtual'|| 
        window.location.pathname.split('/')[3] == undefined  ||
        window.location.pathname == '/';

      // console.log(this.validUrl);
      // console.log(this.currentUrl);

      if (!this.checkUrlIsValid(this.currentUrl)) window.location.href = '/404';

      if (!this.validUrl) this.router.navigate([`/404`]);
    }, 100);
  
    this.loadTemplate();

    window.addEventListener('scroll', this.animeScroll);
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
   * Check URL is valid
   * 
   * @param url 
   * @returns 
   */
  checkUrlIsValid(url: string): boolean {
    return url == '/404' || url == '/' || url == '' || this.checkUrlIsComplaintPage(url);
  }

  /**
   * Check UF is valid
   * 
   * @param currentUf 
   * @returns 
   */
  checkUfIsValid = (currentUf: string): boolean => {
    var validUf = null;
    this.ufs.map((uf): any => {
      if (uf.id == currentUf) validUf = uf;
    });
    return validUf != null;
  }

  /**
   * Check URL parameters are form data
   * 
   * @param url 
   * @returns 
   */
  checkUrlIsComplaintPage = (url: string): boolean => {
    return this.checkUfIsValid(url?.split('/')[2]) &&
           url?.split('/')[1] == 'denuncia' && url?.split('/')[2]?.length == 2 ||
           url?.split('/')[1] == 'denuncia' && url?.split('/')[2]?.length == 2 && url?.split('/')[3] == 'crvirtual';
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

  /**
   * Scroll to top
   * 
   * @param $event
   */
  scrollToTop = ($event: any) => {
    $event.preventDefault();
    window.scrollTo(0, 0);
  }
  
  /**
   * Animate scroll
   */
  animeScroll = () => {
    const button = document.querySelector('.scroll-to-top');
    
    if (window.scrollY > 700) {
      button?.classList.add('is-show');
    } else {
      button?.classList.remove('is-show');
    }
  }
  
}
