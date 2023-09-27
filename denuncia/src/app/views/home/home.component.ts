import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UF } from 'src/app/models/UF';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ufs: UF[] = [];
  target: UF;

  constructor(private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (this.ufs.length == 0) await this.getUfs();


    var target = localStorage.getItem('target');
    
    if (target) {
      this.target = JSON.parse(target);
    } else {
      this.target = this.ufs[0];
    }
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
    setTimeout(() => {
      this.navigateTo(event.value);
    }, 50);

    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }

}
