import { Component, Input, OnInit } from '@angular/core';
import { AngularTheme, defaultAngularTheme } from '../../theme-generator/AngularTheme';
import { paletteMap } from '../../theme-generator/AngularPalettes';

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.scss']
})
export class LightModeComponent implements OnInit {
  @Input() theme: AngularTheme | undefined;
  placeholder: AngularTheme;
  paletteMap = paletteMap;

  ngOnInit(): void {
    this.placeholder = defaultAngularTheme;
  }
}
