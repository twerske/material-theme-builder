import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../theme-generator/Theme';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: Theme | undefined;
}
