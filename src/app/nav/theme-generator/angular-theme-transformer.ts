import { Theme } from './Theme';

// declare function require(name:string);
// var sass = require('sass');
// const { sass } = require('sass');

// import * as sass from 'sass';
// import sass from "sass";

declare namespace global {
	function sass(data: string): string
	function errSass(testStr: string): Function
}

const SassFiles = {
  '@angular/material/theming'() {
    return `...`;
  },
  './material-color-theme.scss'(theme: Theme) {
    return themeToAngularSass(theme);
  }
};

export function themeToAngularSass(theme?: Theme): string {
  return `
    @import '~@angular/material/theming';
    @include mat-core();

    // Background palette for light themes.
    $mat-light-theme-background: (
      status-bar: map-get($mat-grey, 300),
      app-bar:    map-get($mat-grey, 100),
      background: ${theme.colorsLight?.background || '#FFFFFF'},
      hover:      rgba(black, 0.04), // TODO(kara): check style with mat Design UX
      card:       ${theme.colorsLight?.background},
      dialog:     ${theme.colorsLight?.background},
      disabled-button: rgba(${theme.colorsLight?.onBackground}, 0.12),
      raised-button: ${theme.colorsLight?.background},
      focused-button: $dark-focused,
      selected-button: map-get($mat-grey, 300),
      selected-disabled-button: map-get($mat-grey, 400),
      disabled-button-toggle: map-get($mat-grey, 200),
      unselected-chip: map-get($mat-grey, 300),
      disabled-list-option: map-get($mat-grey, 200),
      tooltip: map-get($mat-grey, 700),
    );

    // Background palette for dark themes.
    $mat-dark-theme-background: (
      status-bar: ${theme.colorsDark.background},
      app-bar:    map-get($mat-grey, 900),
      background: ${theme.colorsDark?.background || '#303030'},
      hover:      rgba(${theme.colorsDark.onBackground}, 0.04), // TODO(kara): check style with mat Design UX
      card:       map-get($mat-grey, 800),
      dialog:     map-get($mat-grey, 800),
      disabled-button: rgba(${theme.colorsDark.onBackground}, 0.12),
      raised-button: map-get($mat-grey, 800),
      focused-button: $light-focused,
      selected-button: map-get($mat-grey, 900),
      selected-disabled-button: map-get($mat-grey, 800),
      disabled-button-toggle: ${theme.colorsDark.background},
      unselected-chip: map-get($mat-grey, 700),
      disabled-list-option: ${theme.colorsDark.background},
      tooltip: map-get($mat-grey, 700),
    );

    // Foreground palette for light themes.
    $mat-light-theme-foreground: (
      base:              ${theme.colorsLight.onSurface},
      divider:           $dark-dividers,
      dividers:          $dark-dividers,
      disabled:          $dark-disabled-text,
      disabled-button:   rgba(${theme.colorsLight.onSurface}, 0.26),
      disabled-text:     $dark-disabled-text,
      elevation:         ${theme.colorsLight.onSurface},
      hint-text:         $dark-disabled-text,
      secondary-text:    $dark-secondary-text,
      icon:              rgba(${theme.colorsLight.onSurface}, 0.54),
      icons:             rgba(${theme.colorsLight.onSurface}, 0.54),
      text:              rgba(${theme.colorsLight.onSurface}, 0.87),
      slider-min:        rgba(${theme.colorsLight.onSurface}, 0.87),
      slider-off:        rgba(${theme.colorsLight.onSurface}, 0.26),
      slider-off-active: rgba(${theme.colorsLight.onSurface}, 0.38),
    );

    // Foreground palette for dark themes.
    $mat-dark-theme-foreground: (
      base:              ${theme.colorsDark.onSurface},
      divider:           $light-dividers,
      dividers:          $light-dividers,
      disabled:          $light-disabled-text,
      disabled-button:   rgba(${theme.colorsDark.onSurface}, 0.3),
      disabled-text:     $light-disabled-text,
      elevation:         ${theme.colorsDark.surface},
      hint-text:         $light-disabled-text,
      secondary-text:    $light-secondary-text,
      icon:              ${theme.colorsDark.onSurface},
      icons:             ${theme.colorsDark.onSurface},
      text:              ${theme.colorsDark.onSurface},
      slider-min:        ${theme.colorsDark.onSurface},
      slider-off:        rgba(${theme.colorsDark.onSurface}, 0.3),
      slider-off-active: rgba(${theme.colorsDark.onSurface}, 0.3),
    );


    // Define the palettes for your theme using the mat Design palettes available in palette.scss
    // (imported above). For each palette, you can optionally specify a default, lighter, and darker
    // hue. Available color palettes: https://mat.io/design/color/

    $light-primary: (
      base: ${theme.colorsLight.primary},
      lighter: ${theme.colorsLight.primary},
      darker: ${theme.colorsLight.primary},
      contrast: (
        base: ${theme.colorsLight.onPrimary},
        lighter: ${theme.colorsLight.onPrimary},
        darker: ${theme.colorsLight.onPrimary}
      )
    );
    $light-accent: (
      base: ${theme.colorsLight.secondary},
      lighter: ${theme.colorsLight.secondary},
      darker: ${theme.colorsLight.secondary},
      contrast: (
        base: ${theme.colorsLight.onSecondary},
        lighter: ${theme.colorsLight.onSecondary},
        darker: ${theme.colorsLight.onSecondary}
      )
    );
    $light-warn: (
      base: ${theme.colorsLight.error},
      lighter: ${theme.colorsLight.error},
      darker: ${theme.colorsLight.error},
      contrast: (
        base: ${theme.colorsLight.onError},
        lighter: ${theme.colorsLight.onError},
        darker: ${theme.colorsLight.onError}
      )
    );
    $mat-theme-primary: mat-palette($light-primary, base, lighter, darker);
    $mat-theme-accent: mat-palette($light-accent, base, lighter, darker);
    $mat-theme-warn: mat-palette($light-warn, base, lighter, darker);

    $dark-primary: (
      base: ${theme.colorsDark.primary},
      lighter: ${theme.colorsDark.primary},
      darker: ${theme.colorsDark.primary},
      contrast: (
        base: ${theme.colorsDark.onPrimary},
        lighter: ${theme.colorsDark.onPrimary},
        darker: ${theme.colorsDark.onPrimary}
      )
    );
    $dark-accent: (
      base: ${theme.colorsDark.secondary},
      lighter: ${theme.colorsDark.secondary},
      darker: ${theme.colorsDark.secondary},
      contrast: (
        base: ${theme.colorsDark.onSecondary},
        lighter: ${theme.colorsDark.onSecondary},
        darker: ${theme.colorsDark.onSecondary}
      )
    );
    $dark-warn: (
      base: ${theme.colorsDark.error},
      lighter: ${theme.colorsDark.error},
      darker: ${theme.colorsDark.error},
      contrast: (
        base: ${theme.colorsDark.onError},
        lighter: ${theme.colorsDark.onError},
        darker: ${theme.colorsDark.onError}
      )
    );
    $mat-dark-theme-primary: mat-palette($dark-primary, base, lighter, darker);
    $mat-dark-theme-accent: mat-palette($dark-accent, base, lighter, darker);
    $mat-dark-theme-warn: mat-palette($dark-warn, base, lighter, darker);

    @import url('https://fonts.googleapis.com/css2?family=${theme.typography.h1.family}');
    $mat-typography: mat-typography-config(
      $font-family: '${theme.typography.h1.family}',
      $display-4:     mat-typography-level($font-size: ${theme.typography.h1.size}px, $font-weight: ${theme.typography.h1.weight}, $font-family: ${theme.typography.h1.family}),
      $display-3:     mat-typography-level($font-size: ${theme.typography.h2.size}px, $font-weight: ${theme.typography.h2.weight}, $font-family: ${theme.typography.h2.family}),
      $display-2:     mat-typography-level($font-size: ${theme.typography.h3.size}px, $font-weight: ${theme.typography.h3.weight}, $font-family: ${theme.typography.h3.family}),
      $display-1:     mat-typography-level($font-size: ${theme.typography.h4.size}px, $font-weight: ${theme.typography.h4.weight}, $font-family: ${theme.typography.h4.family}),
      $headline:      mat-typography-level($font-size: ${theme.typography.h5.size}px, $font-weight: ${theme.typography.h5.weight}, $font-family: ${theme.typography.h5.family}),
      $title:         mat-typography-level($font-size: ${theme.typography.h6.size}px, $font-weight: ${theme.typography.h6.weight}, $font-family: ${theme.typography.h6.family}),
      $subheading-2:  mat-typography-level($font-size: ${theme.typography.subtitle2.size}px, $font-weight: ${theme.typography.subtitle2.weight}, $font-family: ${theme.typography.subtitle2.family}),
      $subheading-1:  mat-typography-level($font-size: ${theme.typography.subtitle1.size}px, $font-weight: ${theme.typography.subtitle1.weight}, $font-family: ${theme.typography.subtitle1.family}),
      $body-2:        mat-typography-level($font-size: ${theme.typography.body2.size}px, $font-weight: ${theme.typography.body2.weight}, $font-family: ${theme.typography.body2.family}),
      $body-1:        mat-typography-level($font-size: ${theme.typography.body1.size}px, $font-weight: ${theme.typography.body1.weight}, $font-family: ${theme.typography.body1.family}),
      $caption:       mat-typography-level($font-size: ${theme.typography.caption.size}px, $font-weight: ${theme.typography.caption.weight}, $font-family: ${theme.typography.caption.family}),
      $button:        mat-typography-level($font-size: ${theme.typography.button.size}px, $font-weight: ${theme.typography.button.weight}, $font-family: ${theme.typography.button.family}),
      // Line-height must be unit-less fraction of the font-size.
      $input:         mat-typography-level($font-size: inherit, $line-height: 1.125, $font-weight: ${theme.typography.button.weight}, $font-family: ${theme.typography.button.family}),
    );

    $mat-density: 0;

    $mat-light-theme: mat-light-theme((
      color: (
        primary: $mat-theme-primary,
        accent: $mat-theme-accent,
        warn: $mat-theme-warn
      ),
      typography: $mat-typography,
      density: $mat-density
    ));

    $mat-dark-theme: mat-dark-theme((
      color: (
        primary: $mat-dark-theme-primary,
        accent: $mat-dark-theme-accent,
        warn: $mat-dark-theme-warn,
      ),
      typography: $mat-typography,
      density: $mat-density
    ));

    @include angular-material-theme($mat-light-theme);

    .dark-theme {
      @include angular-material-color($mat-dark-theme);
    }
  `;
}

const removeOldStyles = () => {
  const styles = document.querySelector('#styles');
  styles.parentElement.removeChild(styles);
};

const buildStyles = (theme: Theme): string => {
  const scss = SassFiles['./material-color-theme.scss'](theme);
  // const result = sass.renderSync({
  //   data: scss
  // });
  // return result.css.toString()
  return ''
};

const addStyles = (css: string) => {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'styles');
  styleElement.innerHTML = css;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
};

export const applyStyles = (theme: Theme) => {
  removeOldStyles();
  const styles = buildStyles(theme);
  addStyles(styles);
};



