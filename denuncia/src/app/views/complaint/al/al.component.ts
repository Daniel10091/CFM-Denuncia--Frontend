import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-al',
  templateUrl: './al.component.html',
  styleUrls: ['./al.component.scss']
})
export class ALComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
