import { Component, OnInit, Input } from '@angular/core';
import { UF } from 'src/app/models/UF';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('ufs') ufs?: UF[];
  @Input('target') target?: string;
  @Input('onChange') onChange?: (target: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
