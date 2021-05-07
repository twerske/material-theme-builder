import { Component, Input, OnInit } from '@angular/core';
import { defaultTheme, Theme } from '../../theme-generator/Theme';

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.scss']
})
export class LightModeComponent {
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: Theme | undefined;
}
