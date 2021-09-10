import { Font } from 'ngx-font-picker';
import { Palette, paletteMap } from './AngularPalettes';

export interface AngularTheme {
  version: string;
  name: string;
  colorsLight?: AngularThemeColors;
  colorsDark?: AngularThemeColors;
  typography?: AngularTypography;
  density?: string;
}

export interface AngularThemeColors {
  primary: AngularColor;
  accent: AngularColor;
  warn: AngularColor;
}

export interface AngularColor {
  name: string;
  palette: Palette;
  default?: string;
  lighter?: string;
  darker?: string;
  text?: string;
  contrast?: {
    default?: string;
    lighter?: string;
    darker?: string;
  };
}

export interface AngularTypography {
  [x: string]: any;
  h1: AngularFont;
  h2: AngularFont;
  h3: AngularFont;
  h4: AngularFont;
  h5: AngularFont;
  h6: AngularFont;
  subtitle1: AngularFont;
  subtitle2: AngularFont;
  body1: AngularFont;
  body2: AngularFont;
  button: AngularFont;
  caption: AngularFont;
  overline: AngularFont;
}

export interface AngularFont extends Font {
  uppercase?: boolean;
}

export const defaultAngularTheme: AngularTheme = {
  version: '1.0.0',
  name: 'AngularDefault',
  colorsLight: {
    primary: {
      name: 'mat.$cyan-palette',
      palette: paletteMap['mat.$cyan-palette'],
      default: '100',
      lighter: '100',
      darker: '700',
      text: '500',
      contrast: {
        default: '#150c4a',
        lighter: 'black',
        darker: 'white',
      }
    },
    accent: {
      name: 'mat.$teal-palette',
      palette: paletteMap['mat.$teal-palette'],
      default: '#4d77b6',
      lighter: 'A100',
      darker: 'A200',
      text: '600',
      contrast: {
        default: 'white',
        lighter: 'white',
        darker: 'white',
      }
    },
    warn: {
      name: 'mat.$pink-palette',
      palette: paletteMap['mat.$pink-palette'],
      default: 'A200',
      lighter: '500',
      darker: '500',
      text: 'A700',
      contrast: {
        default: 'white',
        lighter: 'white',
        darker: 'white',
      }
    },
  },
  colorsDark: {
    primary: {
      name: 'mat.$lime-palette',
      palette: paletteMap['mat.$lime-palette'],
      default: '200',
      lighter: 'A100',
      darker: 'A700',
      text: '700',
      contrast: {
        default: '#030844',
        lighter: 'rgba(0,0,0, 0.87)',
        darker: 'rgba(0,0,0, 0.87)',
      }
    },
    accent: {
      name: 'mat.$green-palette',
      palette: paletteMap['mat.$green-palette'],
      default: 'A200',
      lighter: '50',
      darker: 'A400',
      text: 'A100',
      contrast: {
        default: 'black',
        lighter: 'black',
        darker: 'black',
      }
    },
    warn: {
      name: 'mat.$pink-palette',
      palette: paletteMap['mat.$pink-palette'],
      default: 'A100',
      lighter: '100',
      darker: 'A700',
      text: '100',
      contrast: {
        default: 'black',
        lighter: 'white',
        darker: 'white',
      }
    },
  },
  typography: {
    h1: new Font({ family: 'Rubik', style: '300', size: '96' }),
    h2: new Font({ family: 'Rubik', style: '500', size: '60'}),
    h3: new Font({ family: 'Rubik', style: '500', size: '48' }),
    h4: new Font({ family: 'Rubik', style: '500', size: '34' }),
    h5: new Font({ family: 'Rubik', style: '500', size: '24' }),
    h6: new Font({ family: 'Rubik', style: '500', size: '20' }),
    subtitle1: new Font({ family: 'Rubik', style: '500', size: '20' }),
    subtitle2: new Font({ family: 'Rubik', style: '500', size: '18' }),
    body1: new Font({ family: 'Rubik', style: '400', size: '18' }),
    body2: new Font({ family: 'Rubik', style: '400', size: '16' }),
    button: new Font({ family: 'Rubik', style: '500', size: '16' }),
    caption: new Font({ family: 'Rubik', style: 'Medium', size: '16' }),
    overline: new Font({ family: 'Rubik', style: '300', size: '16' }),
  },
  density: '0'
};
