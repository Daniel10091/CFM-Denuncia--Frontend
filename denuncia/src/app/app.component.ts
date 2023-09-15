import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UF } from './models/UF';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ufs?: UF[] = [];
  target: any;

  currentUrl: string;
  
  async getUfs() {
    await fetch('assets/data/ufs.json')
    .then(res => res.json())
    .then(json => {
      this.ufs = json.ufs;
    });
  }

  constructor(
    private router: Router
  ) { }

  async ngOnInit() {
    await this.getUfs();

    this.target = window.location.pathname.split('/')[2] || this.ufs[0].id;
    
    // this.router.navigate([`/denuncia/${this.selectedUf}`]);

    this.currentUrl = window.location.pathname;
  }
  
  navigateTo(value: string) {
    if (value && value !== '/') {
      // this.ngOnInit();
      this.target = value;
      this.router.navigate([`/denuncia/${this.target}`]);
    } else {
      this.router.navigate([`/`]);
    }
  }

  changeUf = (event: any): void => {
    console.log(event.value.name);
    // this.navigateTo(event.value.id);
    if (event.value && event.value !== '/') {
      // this.ngOnInit();
      this.target = event.value.id;
      this.router.navigate([`/denuncia/${this.target}`]);
    } else {
      this.router.navigate([`/`]);
    }
  }
  
}
