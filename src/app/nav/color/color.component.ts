import { Component, Input } from '@angular/core';
import { defaultTheme, Theme } from '../theme-generator/Theme';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() isDark = false;
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: Theme | undefined;
}
