import { AngularTheme } from './AngularTheme';

// import * as sass from 'sass';

// declare namespace global {
// 	function sass(data: string): string
// 	function errSass(testStr: string): Function
// }

// ngx-build plus

const SassFiles = {
  '@angular/material/theming'() {
    return `...`;
  },
  './material-color-theme.scss'(theme: AngularTheme) {
    return themeToAngularSass(theme);
  }
};

export function themeToAngularSass(theme?: AngularTheme): string {
  return `
    @import '~@angular/material/theming';
    @include mat-core();

    // Define the palettes for your theme using the mat Design palettes available in palette.scss
    // (imported above). For each palette, you can optionally specify a default, lighter, and darker
    // hue. Available color palettes: https://mat.io/design/color/

    $light-primary-palette: ${theme.colorsLight.primary.palette};
    $light-primary: (
      default: ${theme.colorsLight.primary.default},
      lighter: ${theme.colorsLight.primary.lighter},
      darker: ${theme.colorsLight.primary.darker},
      text: ${theme.colorsLight.primary.text}
      contrast: (
        default: ${theme.colorsLight.primary.contrast.default},
        lighter: ${theme.colorsLight.primary.contrast.lighter},
        darker: ${theme.colorsLight.primary.contrast.darker}
      )
    );
    $light-accent-palette: ${theme.colorsLight.accent.palette};
    $light-accent: (
      default: ${theme.colorsLight.accent.default},
      lighter: ${theme.colorsLight.accent.lighter},
      darker: ${theme.colorsLight.accent.darker},
      contrast: (
        default: ${theme.colorsLight.accent.contrast.default},
        lighter: ${theme.colorsLight.accent.contrast.lighter},
        darker: ${theme.colorsLight.accent.contrast.darker}
      )
    );
    $light-warn-palette: ${theme.colorsLight.warn.palette};
    $light-warn: (
      default: ${theme.colorsLight.warn.default},
      lighter: ${theme.colorsLight.warn.lighter},
      darker: ${theme.colorsLight.warn.darker},
      contrast: (
        default: ${theme.colorsLight.warn.contrast.default},
        lighter: ${theme.colorsLight.warn.contrast.lighter},
        darker: ${theme.colorsLight.warn.contrast.darker}
      )
    );
    $mat-theme-primary: mat-palette(
      $light-primary-palette, 
      $default: map-get($light-primary, default),
      $lighter: map-get($light-primary, lighter),
      $darker: map-get($light-primary, darker),
      $text: map-get($light-primary, text)
    );
    $mat-theme-accent: mat-palette(
      $light-accent-palette, 
      $default: map-get($light-accent, default),
      $lighter: map-get($light-accent, lighter),
      $darker: map-get($light-accent, darker),
      $text: map-get($light-accent, text)
    );
    $mat-theme-warn: mat-palette(
      $light-warn-palette, 
      $default: map-get($light-warn, default),
      $lighter: map-get($light-warn, lighter),
      $darker: map-get($light-warn, darker),
      $text: map-get($light-warn, text)
    );

    $dark-primary-palette: ${theme.colorsLight.warn.palette};
    $dark-primary: (
      default: ${theme.colorsDark.primary.default},
      lighter: ${theme.colorsDark.primary.lighter},
      darker: ${theme.colorsDark.primary.darker},
      contrast: (
        default: ${theme.colorsDark.primary.contrast.default},
        lighter: ${theme.colorsDark.primary.contrast.lighter},
        darker: ${theme.colorsDark.primary.contrast.darker}
      )
    );
    $dark-accent-palette: ${theme.colorsLight.warn.palette};
    $dark-accent: (
      default: ${theme.colorsDark.accent.default},
      lighter: ${theme.colorsDark.accent.lighter},
      darker: ${theme.colorsDark.accent.darker},
      contrast: (
        default: ${theme.colorsDark.accent.contrast.default},
        lighter: ${theme.colorsDark.accent.contrast.lighter},
        darker: ${theme.colorsDark.accent.contrast.darker}
      )
    );
    $dark-warn-palette: ${theme.colorsLight.warn.palette};
    $dark-warn: (
      default: ${theme.colorsDark.warn.default},
      lighter: ${theme.colorsDark.warn.lighter},
      darker: ${theme.colorsDark.warn.darker},
      contrast: (
        default: ${theme.colorsDark.warn.contrast.default},
        lighter: ${theme.colorsDark.warn.contrast.lighter},
        darker: ${theme.colorsDark.warn.contrast.darker}
      )
    );
    $mat-dark-theme-primary: mat-palette(
      $dark-primary-palette, 
      $default: map-get($dark-primary, default),
      $lighter: map-get($dark-primary, lighter),
      $darker: map-get($dark-primary, darker),
      $text: map-get($dark-primary, text)
    );
    $mat-dark-theme-accent: mat-palette(
      $dark-accent-palette, 
      $default: map-get($dark-accent, default),
      $lighter: map-get($dark-accent, lighter),
      $darker: map-get($dark-accent, darker),
      $text: map-get($dark-accent, text)
    );
    $mat-dark-theme-warn: mat-palette(
      $dark-warn-palette, 
      $default: map-get($dark-warn, default),
      $lighter: map-get($dark-warn, lighter),
      $darker: map-get($dark-warn, darker),
      $text: map-get($dark-warn, text)
    );

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

export const generateSassTheme = (theme?: AngularTheme): string => {
  if (theme) {
    return SassFiles['./material-color-theme.scss'](theme);
  }
}

const buildStyles = (theme: AngularTheme): string => {
  const scss = generateSassTheme(theme);
  // const result = sass.renderSync({
  //   data: scss
  // });
  // return result.css.toString()
  return ''
};

const addStyles = (css: string) => {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'styles');
  styleElement.innerText = css;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
};

export const applyStyles = (theme: AngularTheme) => {
  removeOldStyles();
  const styles = buildStyles(theme);
  addStyles(styles);
};



