import { Component, Input, OnInit } from '@angular/core';
import { Font } from 'ngx-font-picker';
import { AngularTheme, defaultAngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  @Input() theme: AngularTheme = defaultAngularTheme;
}
