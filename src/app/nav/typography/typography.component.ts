import { Component, Input} from '@angular/core';
import { ConvertThemeService } from 'src/app/convert-theme.service';
import { AngularTheme, defaultAngularTheme } from '../theme-generator/AngularTheme';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  @Input() theme: AngularTheme = defaultAngularTheme;

  constructor(private convertTheme: ConvertThemeService) {}

  updateTypographyTheme(): void {
    this.convertTheme.applyTypographyTheme(this.theme);
  }
}
