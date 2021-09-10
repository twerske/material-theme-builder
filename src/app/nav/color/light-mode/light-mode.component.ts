import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularTheme, defaultAngularTheme } from '../../theme-generator/AngularTheme';
import { paletteMap } from '../../theme-generator/AngularPalettes';
import { ConvertThemeService } from 'src/app/convert-theme.service';

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.scss']
})
export class LightModeComponent implements OnInit {
  @Input() theme: AngularTheme | undefined;
  placeholder: AngularTheme;
  paletteMap = paletteMap;

  constructor(private convertTheme: ConvertThemeService){}

  ngOnInit(): void {
    this.placeholder = defaultAngularTheme;
  }

  updateColorTheme(): void {
    this.convertTheme.applyLightColorTheme(this.theme);
  }
}
