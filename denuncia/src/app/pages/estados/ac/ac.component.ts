import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.scss']
})
export class ACComponent implements OnInit {
  
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  startComplaint() {
    setTimeout(() => {
      this.router.navigate(['/denuncia/ac/crvirtual']);
      document.body.scrollIntoView();
    }, 100);
  }

  nextStageComplaint() {
    setTimeout(() => {
      this.router.navigate(['/denuncia/ac/crvirtual']);
      document.body.scrollIntoView();
    }, 100);
  }

}
