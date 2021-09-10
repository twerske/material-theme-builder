import { Component, Input } from '@angular/core';
import { getAngularThemeSCSS } from '../theme-generator/angular-theme-transformer';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent {
  @Input() theme: AngularTheme | undefined;

  getSCSS(): string {
    return getAngularThemeSCSS(this.theme);
  }
}
