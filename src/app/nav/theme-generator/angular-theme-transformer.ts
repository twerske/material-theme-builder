import { newArray } from '@angular/compiler/src/util';
import { Font } from 'ngx-font-picker';
import { AngularColor, AngularTheme } from './AngularTheme';

import * as sass from 'sass';

declare namespace global {
	function sass(data: string): string
	function errSass(testStr: string): Function
}

// ngx-build plus

const SassFiles = {
  '@angular/material/theming'(): string {
    return `...`;
  },
  './material-color-theme.scss'(theme: AngularTheme): string {
    return themeToAngularSass(theme);
  }
};

export function colorToPalette(name: string, color: AngularColor): string {
  const keys = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
  const def = keys.includes(color.default) ? {value: color.default} : {value: '501', color: color.default};
  const lighter = keys.includes(color.lighter) ? {value: color.lighter} : {value: '201', color: color.lighter};
  const darker = keys.includes(color.darker) ? {value: color.darker} : {value: '701', color: color.darker};
  const text = keys.includes(color.text) ? {value: color.text} : {value: '601', color: color.text};

  const defaultContrast = color.palette.contrast[def.value] === color.contrast.default ? {value: color.contrast.default} : {value: def.value, color: color.contrast.default};
  const lighterContrast = color.palette.contrast[lighter.value] === color.contrast.lighter ? {value: color.contrast.lighter} : {value: lighter.value, color: color.contrast.lighter};
  const darkerContrast = color.palette.contrast[darker.value] === color.contrast.darker ? {value: color.contrast.darker} : {value: darker.value, color: color.contrast.darker};

  let constrastColors = '';
  if (defaultContrast.color || lighterContrast.color || darkerContrast.color) {
    constrastColors = `contrast: (${defaultContrast.color ? `${defaultContrast?.value}: ${defaultContrast?.color},` : ``}${lighterContrast.color ? `${lighterContrast?.value}: ${lighterContrast?.color},` : ''}${darkerContrast.color ? `${darkerContrast?.value}: ${darkerContrast?.color},` : ''})`;
  }

  return `${name}-palette: map-merge(${color.name}, ( ${def.color === undefined ? '' : `${def.value}: ${def.color},`}${lighter.color === undefined ? '' : `${lighter.value}: ${lighter.color},`}${darker.color === undefined ? '' : `${darker.value}: ${darker.color},`}${text.color === undefined ? '' : `${text.value}: ${text.color},`}${constrastColors}));

  ${name}: mat.define-palette(
    ${name}-palette,
    $default: ${def.value},
    $lighter: ${lighter.value},
    $darker: ${darker.value},
    $text: ${text.value}
  );`;
}

export function themeToAngularSass(theme?: AngularTheme): string {
  const fontImportList: Font[] = [];
  fontImportList.push(theme.typography.h1);
  fontImportList.push(theme.typography.h2);
  fontImportList.push(theme.typography.h3);
  fontImportList.push(theme.typography.h4);
  fontImportList.push(theme.typography.h5);
  fontImportList.push(theme.typography.h6);
  fontImportList.push(theme.typography.subtitle1);
  fontImportList.push(theme.typography.subtitle2);
  fontImportList.push(theme.typography.body1);
  fontImportList.push(theme.typography.body2);
  fontImportList.push(theme.typography.button);
  fontImportList.push(theme.typography.caption);
  fontImportList.push(theme.typography.overline);
  let fontImport = '';
  fontImportList.forEach(font => {if (!fontImport.includes(font.family)) { fontImport += `family=${font.family.split(' ').join('+')}:wght@${font.style}&`; }});

  return `
  @use '~@angular/material' as mat;

  // Be sure that you only ever include this mixin once!
  @include mat.core();

  // Define your theme with color palettes, typography and density
  ${colorToPalette('$mat-theme-primary', theme.colorsLight.primary)}
  ${colorToPalette('$mat-theme-accent', theme.colorsLight.accent)}
  ${theme.colorsLight.warn.name === 'mat.$red-palette' && theme.colorsLight.warn.default == '500' ? '$mat-theme-warn: mat.$red-palette;' : colorToPalette('$mat-theme-warn', theme.colorsLight.warn)}
  ${colorToPalette('$mat-dark-theme-primary', theme.colorsDark.primary)}
  ${colorToPalette('$mat-dark-theme-accent', theme.colorsDark.accent)}
  ${theme.colorsDark.warn.name === 'mat.$red-palette' && theme.colorsDark.warn.default == '500' ? '$mat-dark-theme-warn: mat.$red-palette;' : colorToPalette('$mat-dark-theme-warn', theme.colorsDark.warn)}

  @import url('https://fonts.googleapis.com/css2?${fontImport}display=swap');
  $mat-typography: mat.define-typography-config(
    $font-family: '${theme.typography.h1.family}',
    $display-4:     mat.define-typography-level($font-size: ${theme.typography.h1.size}px, $font-weight: ${theme.typography.h1.style}, $font-family: ${theme.typography.h1.family}),
    $display-3:     mat.define-typography-level($font-size: ${theme.typography.h2.size}px, $font-weight: ${theme.typography.h2.style}, $font-family: ${theme.typography.h2.family}),
    $display-2:     mat.define-typography-level($font-size: ${theme.typography.h3.size}px, $font-weight: ${theme.typography.h3.style}, $font-family: ${theme.typography.h3.family}),
    $display-1:     mat.define-typography-level($font-size: ${theme.typography.h4.size}px, $font-weight: ${theme.typography.h4.style}, $font-family: ${theme.typography.h4.family}),
    $headline:      mat.define-typography-level($font-size: ${theme.typography.h5.size}px, $font-weight: ${theme.typography.h5.style}, $font-family: ${theme.typography.h5.family}),
    $title:         mat.define-typography-level($font-size: ${theme.typography.h6.size}px, $font-weight: ${theme.typography.h6.style}, $font-family: ${theme.typography.h6.family}),
    $subheading-2:  mat.define-typography-level($font-size: ${theme.typography.subtitle2.size}px, $font-weight: ${theme.typography.subtitle2.style}, $font-family: ${theme.typography.subtitle2.family}),
    $subheading-1:  mat.define-typography-level($font-size: ${theme.typography.subtitle1.size}px, $font-weight: ${theme.typography.subtitle1.style}, $font-family: ${theme.typography.subtitle1.family}),
    $body-2:        mat.define-typography-level($font-size: ${theme.typography.body2.size}px, $font-weight: ${theme.typography.body2.style}, $font-family: ${theme.typography.body2.family}),
    $body-1:        mat.define-typography-level($font-size: ${theme.typography.body1.size}px, $font-weight: ${theme.typography.body1.style}, $font-family: ${theme.typography.body1.family}),
    $caption:       mat.define-typography-level($font-size: ${theme.typography.caption.size}px, $font-weight: ${theme.typography.caption.style}, $font-family: ${theme.typography.caption.family}),
    $button:        mat.define-typography-level($font-size: ${theme.typography.button.size}px, $font-weight: ${theme.typography.button.style}, $font-family: ${theme.typography.button.family}),
    // Line-height must be unit-less fraction of the font-size.
    $input:         mat.define-typography-level($font-size: inherit, $line-height: 1.125, $font-weight: ${theme.typography.button.style}, $font-family: ${theme.typography.button.family}),
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
  const styles = document.querySelector('#material-styles');
  if (styles) styles.parentElement.removeChild(styles);
};

export const generateSassTheme = (theme?: AngularTheme): string => {
  if (theme) {
    return SassFiles['./material-color-theme.scss'](theme);
  }
};

const buildStyles = (theme: AngularTheme): string => {
  // const scss = generateSassTheme(theme);
  const scss = `
  h1 {
    color: blue;
  }
  `
  console.log(scss)
  const result = sass.renderSync({
    data: scss,
    includePaths: ['node_modules/@angular/material/_index.scss']
  });
  return result.css.toString()
  // return '';
};

const addStyles = (css: string) => {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'material-styles');
  styleElement.innerText = css;
  console.log(styleElement);
  document.getElementsByTagName('head')[0].appendChild(styleElement);
};

export const applyStyles = (theme: AngularTheme) => {
  removeOldStyles();
  const styles = buildStyles(theme);
  addStyles(styles);
};



