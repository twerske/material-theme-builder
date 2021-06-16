import { Component, Input, OnInit } from '@angular/core';
import { paletteMap } from '../../theme-generator/AngularPalettes';
import { AngularTheme, defaultAngularTheme } from '../../theme-generator/AngularTheme';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  @Input() theme: AngularTheme | undefined;
  placeholder: AngularTheme;
  paletteMap = paletteMap;

  ngOnInit(): void {
    this.placeholder = defaultAngularTheme;
  }
}
