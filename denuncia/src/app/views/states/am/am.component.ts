import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.scss']
})
export class AMComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
