import { Component, Input } from '@angular/core';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() isDark = false;
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: AngularTheme | undefined;
}
