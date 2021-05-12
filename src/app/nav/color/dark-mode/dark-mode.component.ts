import { Component, Input, OnInit } from '@angular/core';
import { AngularTheme, defaultAngularTheme } from '../../theme-generator/AngularTheme';
import { Theme } from '../../theme-generator/Theme';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {
  @Input() bodyStyles: CSSStyleDeclaration | undefined;
  @Input() theme: AngularTheme | undefined;
  placeholder: AngularTheme;

  ngOnInit(): void {
    this.placeholder = defaultAngularTheme;
  }
}
