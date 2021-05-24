import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { generateSassTheme } from '../theme-generator/angular-theme-transformer';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent {
  @Input() theme: AngularTheme | undefined;
  scss: string | undefined;
  
  getScss(): string {
    return generateSassTheme(this.theme)
  }
}
