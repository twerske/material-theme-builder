import { Font } from 'ngx-font-picker';
import { AngularColor, AngularTheme } from './AngularTheme';

const SassFiles = {
  './styles.scss'(theme: AngularTheme): string {
    return themeToAngularSCSS(theme);
  },
  './styles-compatible.scss'(theme: AngularTheme): string {
    return themeToCompatibleSCSS(theme);
  },
  './material-color-theme.scss'(theme: AngularTheme, dark: boolean = false): string {
    return buildColorOnlyTheme(theme, dark);
  },
  './material-typography-theme.scss'(theme: AngularTheme): string {
    return buildTypographyOnlyTheme(theme);
  },
  './material-density-theme.scss'(theme: AngularTheme): string {
    return buildDensityOnlyTheme(theme);
  },
};

const convertFontWeight = (font: Font): string => {
  let weight;
  const isItalic = font.style.includes('italic');
  switch (font.style.replace('italic', '')) {
    case 'thin':
      weight = 100;
      break;
    case 'Extra-light' || 'Extra-lightitalics':
      weight = 200;
      break;
    case 'light' || 'lightitalics':
      weight = 300;
      break;
    case 'regular' || 'regularitalics':
      weight = 400;
      break;
    case 'Medium' || 'mediumitalics':
      weight = 500;
      break;
    case 'Semi-bold' || 'semi-bolditalics':
      weight = 600;
      break;
    case 'Bold' || 'bolditalics':
      weight = 700;
      break;
    case 'Extra-bold' || 'extra-bolditalics':
      weight = 800;
      break;
    case 'black' || 'blackitalics':
      weight = 900;
      break;
    default:
      weight = font.style;
      break;
  }
  if (isItalic) {
    weight = `1,${weight}`;
  }
  return weight;
};

const buildFontImportList = (theme: AngularTheme): string => {
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
  fontImportList.forEach(font => {
    if (!fontImport.includes(font.family)) {
      fontImport += `family=${font.family.split(' ').join('+')}:wght@${convertFontWeight(font)}&`;
    } else {
      // fontImport = fontImport.split(`${font.family}:wght@`).join(`${convertFontWeight(font)}&`);
    }
  });

  return fontImport;
};

const colorToPalette = (name: string, color: AngularColor): string => {
  const keys = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
  const def = keys.includes(color.default) ? {value: color.default} : {value: '501', color: color.default};
  const lighter = keys.includes(color.lighter) ? {value: color.lighter} : {value: '201', color: color.lighter};
  const darker = keys.includes(color.darker) ? {value: color.darker} : {value: '701', color: color.darker};
  const text = keys.includes(color.text) ? {value: color.text} : {value: '601', color: color.text};

  const defaultContrast = color.palette.contrast[def.value] === color.contrast.default ?
    {value: color.contrast.default}
    : {value: def.value, color: color.contrast.default};
  const lighterContrast = color.palette.contrast[lighter.value] === color.contrast.lighter ?
    {value: color.contrast.lighter}
    : {value: lighter.value, color: color.contrast.lighter};
  const darkerContrast = color.palette.contrast[darker.value] === color.contrast.darker ?
    {value: color.contrast.darker}
    : {value: darker.value, color: color.contrast.darker};

  let constrastColors = '';
  if (defaultContrast.color || lighterContrast.color || darkerContrast.color) {
    constrastColors = `contrast: (${defaultContrast.color ? `${defaultContrast?.value}: ${defaultContrast?.color},` : ``}${lighterContrast.color && (lighterContrast?.value !== defaultContrast?.value) ? `${lighterContrast?.value}: ${lighterContrast?.color},` : ''}${darkerContrast.color && (darkerContrast?.value !== lighterContrast?.value) && (darkerContrast?.value !== defaultContrast?.value) ? `${darkerContrast?.value}: ${darkerContrast?.color},` : ''})`;
  }

  return `
  ${name}-palette: map-merge(${color.name}, ( ${def.color === undefined ? '' : `${def.value}: ${def.color},`}${lighter.color === undefined ? '' : `${lighter.value}: ${lighter.color},`}${darker.color === undefined ? '' : `${darker.value}: ${darker.color},`}${text.color === undefined ? '' : `${text.value}: ${text.color},`}${constrastColors}));
  ${name}: mat.define-palette(
    ${name}-palette,
    $default: ${def.value},
    $lighter: ${lighter.value},
    $darker: ${darker.value},
    $text: ${text.value}
  );`;
};

const themeToColorPalettes = (theme: AngularTheme): string => {
  return `// Define your theme with color palettes, typography and density
  ${colorToPalette('$mat-theme-primary', theme.colorsLight.primary)}
  ${colorToPalette('$mat-theme-accent', theme.colorsLight.accent)}
  ${theme.colorsLight.warn.name === 'mat.$red-palette' && theme.colorsLight.warn.default === '500' ? '$mat-theme-warn: mat.$red-palette;' : colorToPalette('$mat-theme-warn', theme.colorsLight.warn)}
  ${colorToPalette('$mat-dark-theme-primary', theme.colorsDark.primary)}
  ${colorToPalette('$mat-dark-theme-accent', theme.colorsDark.accent)}
  ${theme.colorsDark.warn.name === 'mat.$red-palette' && theme.colorsDark.warn.default === '500' ? '$mat-dark-theme-warn: mat.$red-palette;' : colorToPalette('$mat-dark-theme-warn', theme.colorsDark.warn)}
  `;
};

const componentColors = (theme: string): string => {
  return `
  @include mat.button-color(${theme});
  @include mat.card-color(${theme});
  @include mat.checkbox-color(${theme});
  @include mat.chips-color(${theme});
  @include mat.form-field-color(${theme});
  @include mat.icon-color(${theme});
  @include mat.input-color(${theme});
  @include mat.list-color(${theme});
  @include mat.menu-color(${theme});
  @include mat.paginator-color(${theme});
  @include mat.progress-bar-color(${theme});
  @include mat.progress-spinner-color(${theme});
  @include mat.radio-color(${theme});
  @include mat.select-color(${theme});
  @include mat.sidenav-color(${theme});
  @include mat.slide-toggle-color(${theme});
  @include mat.slider-color(${theme});
  @include mat.tabs-color(${theme});
  @include mat.toolbar-color(${theme});
  @include mat.snack-bar-color(${theme});
  `
}

const buildColorOnlyTheme = (theme: AngularTheme, dark: boolean = false): string => {
  return `
  @use '@angular/material' as mat;

  ${themeToColorPalettes(theme)}
  $mat-core-theme: mat.define-light-theme((
    color: (
      primary: $mat-theme-primary,
      accent: $mat-theme-accent,
      warn: $mat-theme-warn
    ),
  ));

  $mat-dark-theme: mat.define-dark-theme((
    color: (
      primary: $mat-dark-theme-primary,
      accent: $mat-dark-theme-accent,
      warn: $mat-dark-theme-warn,
    )
  ));

  ${dark ? 
    `.dark-theme {${componentColors('$mat-dark-theme')}}`
    : `${componentColors('$mat-core-theme')}`
  }`;
};

const themeToTypographyObject = (theme: AngularTheme): string => {
  return `
  $mat-typography: mat.define-typography-config(
    $font-family: '${theme.typography.h1.family}',
    $display-4:     mat.define-typography-level($font-size: ${theme.typography.h1.size.replace('px', '')}px, $font-weight: ${theme.typography.h1.style}, $font-family: ${theme.typography.h1.family}),
    $display-3:     mat.define-typography-level($font-size: ${theme.typography.h2.size.replace('px', '')}px, $font-weight: ${theme.typography.h2.style}, $font-family: ${theme.typography.h2.family}),
    $display-2:     mat.define-typography-level($font-size: ${theme.typography.h3.size.replace('px', '')}px, $font-weight: ${theme.typography.h3.style}, $font-family: ${theme.typography.h3.family}),
    $display-1:     mat.define-typography-level($font-size: ${theme.typography.h4.size.replace('px', '')}px, $font-weight: ${theme.typography.h4.style}, $font-family: ${theme.typography.h4.family}),
    $headline:      mat.define-typography-level($font-size: ${theme.typography.h5.size.replace('px', '')}px, $font-weight: ${theme.typography.h5.style}, $font-family: ${theme.typography.h5.family}),
    $title:         mat.define-typography-level($font-size: ${theme.typography.h6.size.replace('px', '')}px, $font-weight: ${theme.typography.h6.style}, $font-family: ${theme.typography.h6.family}),
    $subheading-2:  mat.define-typography-level($font-size: ${theme.typography.subtitle2.size.replace('px', '')}px, $font-weight: ${theme.typography.subtitle2.style}, $font-family: ${theme.typography.subtitle2.family}),
    $subheading-1:  mat.define-typography-level($font-size: ${theme.typography.subtitle1.size.replace('px', '')}px, $font-weight: ${theme.typography.subtitle1.style}, $font-family: ${theme.typography.subtitle1.family}),
    $body-2:        mat.define-typography-level($font-size: ${theme.typography.body2.size.replace('px', '')}px, $font-weight: ${theme.typography.body2.style}, $font-family: ${theme.typography.body2.family}),
    $body-1:        mat.define-typography-level($font-size: ${theme.typography.body1.size.replace('px', '')}px, $font-weight: ${theme.typography.body1.style}, $font-family: ${theme.typography.body1.family}),
    $caption:       mat.define-typography-level($font-size: ${theme.typography.caption.size.replace('px', '')}px, $font-weight: ${theme.typography.caption.style}, $font-family: ${theme.typography.caption.family}),
    $button:        mat.define-typography-level($font-size: ${theme.typography.button.size.replace('px', '')}px, $font-weight: ${theme.typography.button.style}, $font-family: ${theme.typography.button.family}),
    // Line-height must be unit-less fraction of the font-size.
    $input:         mat.define-typography-level($font-size: inherit, $line-height: 1.125, $font-weight: ${theme.typography.button.style}, $font-family: ${theme.typography.button.family}),
  );
  `;
};

const componentTypographies = (theme: string): string => {
  return `
  @include mat.button-typography(${theme});
  @include mat.card-typography(${theme});
  @include mat.checkbox-typography(${theme});
  @include mat.chips-typography(${theme});
  @include mat.form-field-typography(${theme});
  @include mat.icon-typography(${theme});
  @include mat.input-typography(${theme});
  @include mat.list-typography(${theme});
  @include mat.menu-typography(${theme});
  @include mat.paginator-typography(${theme});
  @include mat.progress-bar-typography(${theme});
  @include mat.progress-spinner-typography(${theme});
  @include mat.radio-typography(${theme});
  @include mat.select-typography(${theme});
  @include mat.sidenav-typography(${theme});
  @include mat.slide-toggle-typography(${theme});
  @include mat.slider-typography(${theme});
  @include mat.tabs-typography(${theme});
  @include mat.toolbar-typography(${theme});
  @include mat.snack-bar-typography(${theme});
  @include mat.all-component-typographies(${theme});
  `
}

const buildTypographyOnlyTheme = (theme: AngularTheme): string => {
  return `
  @use '@angular/material' as mat;

  ${themeToTypographyObject(theme)}
  $mat-core-theme: mat.define-light-theme((
    typography: $mat-typography,
  ));

  ${componentTypographies('$mat-core-theme')}
  `;
};

const themeToDensityObject = (theme: AngularTheme): string => {
  return `$mat-density: 0;
  // @include mat.elevation(
  //   $zValue: 12,
  //   $color: #000,
  //   $opacity: 0.5
  // );
  `;
};

// TODO: override with density styling once available
const buildDensityOnlyTheme = (theme: AngularTheme): string => {
  return `...`;
};

const themeObjects = `$mat-core-theme: mat.define-light-theme((
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
    )
  ));
`;

const themeToAngularSCSS = (theme: AngularTheme): string => {
  return `
  @use '~@angular/material' as mat;

  // Be sure that you only ever include this mixin once!
  @include mat.core();

  ${themeToColorPalettes(theme)}
  @import url('https://fonts.googleapis.com/css2?${buildFontImportList(theme)}display=swap');
  ${themeToTypographyObject(theme)}
  ${themeToDensityObject(theme)}
  ${themeObjects}
  @include mat.all-component-themes($mat-core-theme);

  .dark-theme {
    @include mat.all-component-colors($mat-dark-theme);
  }`;
};

const themeToCompatibleSCSS = (theme: AngularTheme): string => {
  return `
  @use '@angular/material' as mat;

  ${themeToColorPalettes(theme)}
  ${themeToTypographyObject(theme)}
  ${themeToDensityObject(theme)}
  ${themeObjects}

  @include mat.all-component-themes($mat-core-theme);

  .dark-theme {
    @include mat.all-component-colors($mat-dark-theme);
  }
  `;
};

const removeOldStyles = (type: string) => {
  const styles = document.querySelector(`#${type}-styles`);
  if (styles) { styles.parentElement.removeChild(styles); }
};

const addStyles = (css: string, type: string) => {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', `${type}-styles`);
  styleElement.innerText = css;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
};

export const getAngularThemeSCSS = (theme: AngularTheme): string => {
  return SassFiles['./styles.scss'](theme);
};

export const getFullSCSS = (theme: AngularTheme): string => {
  return SassFiles['./styles-compatible.scss'](theme);
};

export const getColorSCSS = (theme: AngularTheme, dark: boolean = false): string => {
  return SassFiles['./material-color-theme.scss'](theme, dark);
};

export const getTypographySCSS = (theme: AngularTheme): string => {
  return SassFiles['./material-typography-theme.scss'](theme);
};

export const getDensitySCSS = (theme: AngularTheme): string => {
  return SassFiles['./material-density-theme.scss'](theme);
};

export const applyCSS = (styles: string, type: string) => {
  removeOldStyles(type);
  addStyles(styles, type);
};
