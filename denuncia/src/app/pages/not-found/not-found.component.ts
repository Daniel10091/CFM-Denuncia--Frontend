import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor() { }

  back(): void {
    window.history.back();
  }
  
  navigateToHome(): void {
    window.location.href = '/';
  }

}
