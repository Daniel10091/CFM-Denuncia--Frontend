import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  
  uf?: string = '';

  constructor() { }

  ngOnInit(): void {
    this.uf = window.location.href.split('/').pop();
    // console.log('====================================');
    // console.log(window.location.href);
    // console.log('====================================');
  }

}
