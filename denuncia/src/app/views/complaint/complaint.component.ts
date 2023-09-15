import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  
  uf?: string = '';

  constructor() { }

  ngOnInit(): void {
    this.uf = window.location.href.split('/').pop();
    // console.log('====================================');
    // console.log(window.location.href);
    // console.log('====================================');
  }

}
