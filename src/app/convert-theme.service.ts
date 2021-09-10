import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { applyCSS, getColorSCSS, getDensitySCSS, getFullSCSS, getTypographySCSS } from './nav/theme-generator/angular-theme-transformer';
import { AngularTheme } from './nav/theme-generator/AngularTheme';

@Injectable({
  providedIn: 'root'
})
export class ConvertThemeService {
  convertSCSSToCSS: any;

  constructor(private fns: AngularFireFunctions) {
    this.convertSCSSToCSS = this.fns.httpsCallable('convertSCSSToCSS');
  }

  applyTheme(theme: AngularTheme): void {
    // console.log("APPLY FULL THEME")

    const themeSCSS = getFullSCSS(theme);

    this.convertSCSSToCSS({scss: themeSCSS})
      .subscribe(response => {
        const css = response;
        applyCSS(css, 'material');
      }, error => {
        console.error({ error });
      });
  }

  applyLightColorTheme(theme: AngularTheme): void {
    // console.log("APPLY LIGHT COLOR THEME")

    const themeSCSS = getColorSCSS(theme);

    this.convertSCSSToCSS({scss: themeSCSS})
      .subscribe(response => {
        const css = response;
        applyCSS(css, 'core-color');
      }, error => {
        console.error({ error });
      });
  }

  applyDarkColorTheme(theme: AngularTheme): void {
    // console.log("APPLY DARK COLOR THEME")

    const themeSCSS = getColorSCSS(theme, true);

    this.convertSCSSToCSS({scss: themeSCSS})
      .subscribe(response => {
        const css = response;
        applyCSS(css, 'dark-color');
      }, error => {
        console.error({ error });
      });
  }

  applyTypographyTheme(theme: AngularTheme): void {
    // console.log("APPLY TYPOGRAPHY THEME")

    const themeSCSS = getTypographySCSS(theme);

    this.convertSCSSToCSS({scss: themeSCSS})
      .subscribe(response => {
        const css = response;
        applyCSS(css, 'typography');
      }, error => {
        console.error({ error });
      });
  }

  applyDensityTheme(theme: AngularTheme): void {
    // console.log("APPLY TYPOGRAPHY THEME")

    const themeSCSS = getDensitySCSS(theme);

    this.convertSCSSToCSS({scss: themeSCSS})
      .subscribe(response => {
        const css = response;
        applyCSS(css, 'density');
      }, error => {
        console.error({ error });
      });
  }
}
