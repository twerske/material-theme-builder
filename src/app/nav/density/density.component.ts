import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-density',
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.scss']
})
export class DensityComponent {
  @Input() bodyStyles : CSSStyleDeclaration | undefined;
}
