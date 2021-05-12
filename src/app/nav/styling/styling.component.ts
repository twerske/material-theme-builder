import { Component, Input, OnInit } from '@angular/core';
import { generateSassTheme } from '../theme-generator/angular-theme-transformer';
import { AngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent implements OnInit {
  @Input() theme: AngularTheme | undefined;
  scss: string | undefined;
  
  ngOnInit(): void {
    this.scss = generateSassTheme(this.theme);
  }
}
