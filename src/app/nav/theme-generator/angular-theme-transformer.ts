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
  @use '~@angular/material' as mat;

  // Include the common styles for Angular Material. We include this here so that you only
  // have to load a single css file for Angular Material in your app.
  // Be sure that you only ever include this mixin once!
  @include mat.core();

  // Define your theme with color palettes, typography and [coming soon] density
  $mat-theme-primary: mat.define-palette(
    ${theme.colorsLight.primary.name}, 
    $default: ${theme.colorsLight.primary.default},
    $lighter: ${theme.colorsLight.primary.lighter},
    $darker: ${theme.colorsLight.primary.darker},
    $text: ${theme.colorsLight.primary.text}
  );
  $mat-theme-accent: mat.define-palette(
    ${theme.colorsLight.accent.name}, 
    $default: ${theme.colorsLight.accent.default},
    $lighter: ${theme.colorsLight.accent.lighter},
    $darker: ${theme.colorsLight.accent.darker},
    $text: ${theme.colorsLight.accent.text}
  );
  $mat-theme-warn: mat.define-palette(
    ${theme.colorsLight.warn.name}, 
    $default: ${theme.colorsLight.warn.default},
    $lighter: ${theme.colorsLight.warn.lighter},
    $darker: ${theme.colorsLight.warn.darker},
    $text: ${theme.colorsLight.warn.text}
  );
  $mat-dark-theme-primary: mat.define-palette(
    ${theme.colorsDark.primary.name}, 
    $default: ${theme.colorsDark.primary.default},
    $lighter: ${theme.colorsDark.primary.lighter},
    $darker: ${theme.colorsDark.primary.darker},
    $text: ${theme.colorsDark.primary.text}
  );
  $mat-dark-theme-accent: mat.define-palette(
    ${theme.colorsDark.accent.name}, 
    $default: ${theme.colorsDark.accent.default},
    $lighter: ${theme.colorsDark.accent.lighter},
    $darker: ${theme.colorsDark.accent.darker},
    $text: ${theme.colorsDark.accent.text}
  );
  $mat-dark-theme-warn: mat.define-palette(
    ${theme.colorsDark.warn.name}, 
    $default: ${theme.colorsDark.warn.default},
    $lighter: ${theme.colorsDark.warn.lighter},
    $darker: ${theme.colorsDark.warn.darker},
    $text: ${theme.colorsDark.warn.text}
  );

  @import url('https://fonts.googleapis.com/css2?family=${theme.typography.h1.family}');
  $mat-typography: mat.define-typography-config(
    $font-family: '${theme.typography.h1.family}',
    $display-4:     mat.define-typography-level($font-size: ${theme.typography.h1.size}px, $font-weight: ${theme.typography.h1.weight}, $font-family: ${theme.typography.h1.family}),
    $display-3:     mat.define-typography-level($font-size: ${theme.typography.h2.size}px, $font-weight: ${theme.typography.h2.weight}, $font-family: ${theme.typography.h2.family}),
    $display-2:     mat.define-typography-level($font-size: ${theme.typography.h3.size}px, $font-weight: ${theme.typography.h3.weight}, $font-family: ${theme.typography.h3.family}),
    $display-1:     mat.define-typography-level($font-size: ${theme.typography.h4.size}px, $font-weight: ${theme.typography.h4.weight}, $font-family: ${theme.typography.h4.family}),
    $headline:      mat.define-typography-level($font-size: ${theme.typography.h5.size}px, $font-weight: ${theme.typography.h5.weight}, $font-family: ${theme.typography.h5.family}),
    $title:         mat.define-typography-level($font-size: ${theme.typography.h6.size}px, $font-weight: ${theme.typography.h6.weight}, $font-family: ${theme.typography.h6.family}),
    $subheading-2:  mat.define-typography-level($font-size: ${theme.typography.subtitle2.size}px, $font-weight: ${theme.typography.subtitle2.weight}, $font-family: ${theme.typography.subtitle2.family}),
    $subheading-1:  mat.define-typography-level($font-size: ${theme.typography.subtitle1.size}px, $font-weight: ${theme.typography.subtitle1.weight}, $font-family: ${theme.typography.subtitle1.family}),
    $body-2:        mat.define-typography-level($font-size: ${theme.typography.body2.size}px, $font-weight: ${theme.typography.body2.weight}, $font-family: ${theme.typography.body2.family}),
    $body-1:        mat.define-typography-level($font-size: ${theme.typography.body1.size}px, $font-weight: ${theme.typography.body1.weight}, $font-family: ${theme.typography.body1.family}),
    $caption:       mat.define-typography-level($font-size: ${theme.typography.caption.size}px, $font-weight: ${theme.typography.caption.weight}, $font-family: ${theme.typography.caption.family}),
    $button:        mat.define-typography-level($font-size: ${theme.typography.button.size}px, $font-weight: ${theme.typography.button.weight}, $font-family: ${theme.typography.button.family}),
    // Line-height must be unit-less fraction of the font-size.
    $input:         mat.define-typography-level($font-size: inherit, $line-height: 1.125, $font-weight: ${theme.typography.button.weight}, $font-family: ${theme.typography.button.family}),
  );

  $mat-density: 0;
  // @include mat.elevation(
  //   $zValue: 12, 
  //   $color: #000, 
  //   $opacity: 0.5
  // );

  $mat-light-theme: mat.define-light-theme((
    color: (
      primary: $mat-theme-primary,
      accent: $mat-theme-accent,
      warn: $mat-theme-warn
    ),
    typography: $mat-typography,
    density: $mat-density
  ));

  $mat-dark-theme: mat.define-dark-theme((
    color: (
      primary: $mat-dark-theme-primary,
      accent: $mat-dark-theme-accent,
      warn: $mat-dark-theme-warn,
    ),
    typography: $mat-typography,
    density: $mat-density
  ));

  @include mat.all-component-themes($mat-light-theme);

  .dark-theme {
    @include mat.all-component-colors($mat-dark-theme);
  }`;
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



