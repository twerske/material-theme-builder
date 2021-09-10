import { Component, Input, OnInit } from '@angular/core';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-density',
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.scss']
})
export class DensityComponent {
  @Input() theme: AngularTheme | undefined;
}
