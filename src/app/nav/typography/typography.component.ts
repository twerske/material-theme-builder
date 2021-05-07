import { Component, Input, OnInit } from '@angular/core';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: AngularTheme | undefined;
}
