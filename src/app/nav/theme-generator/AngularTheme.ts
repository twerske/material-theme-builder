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
      name: 'mat.$indigo-palette',
      palette: paletteMap['mat.$indigo-palette'],
      default: '500',
      lighter: '100',
      darker: '700',
      text: '500',
      contrast: {
        default: 'white',
        lighter: 'black',
        darker: 'white',
      }
    },
    accent: {
      name: 'mat.$pink-palette',
      palette: paletteMap['mat.$pink-palette'],
      default: 'A200',
      lighter: 'A100',
      darker: 'A200',
      text: 'A200',
      contrast: {
        default: 'white',
        lighter: 'black',
        darker: 'white',
      }
    },
    warn: {
      name: 'mat.$red-palette',
      palette: paletteMap['mat.$red-palette'],
      default: '500',
      lighter: '500',
      darker: '500',
      text: '500',
      contrast: {
        default: 'white',
        lighter: 'white',
        darker: 'white',
      }
    },
  },
  colorsDark: {
    primary: {
      name: 'mat.$purple-palette',
      palette: paletteMap['mat.$purple-palette'],
      default: '700',
      lighter: '500',
      darker: '900',
      text: '700',
      contrast: {
        default: 'white',
        lighter: 'white',
        darker: 'white',
      }
    },
    accent: {
      name: 'mat.$green-palette',
      palette: paletteMap['mat.$green-palette'],
      default: 'A200',
      lighter: 'A100',
      darker: 'A400',
      text: 'A200',
      contrast: {
        default: 'black',
        lighter: 'black',
        darker: 'black',
      }
    },
    warn: {
      name: 'mat.$red-palette',
      palette: paletteMap['mat.$red-palette'],
      default: '500',
      lighter: '500',
      darker: '500',
      text: '500',
      contrast: {
        default: 'white',
        lighter: 'white',
        darker: 'white',
      }
    },
  },
    // size: string;
  // style: string;
  // family: string;
  // files: any;
  // styles: string[];
  typography: {
    h1: new Font({ family: 'Raleway', style: '300', size: '96' }),
    h2: new Font({ family: 'Raleway', style: '500', size: '60'}),
    h3: new Font({ family: 'Raleway', style: '700', size: '48' }),
    h4: new Font({ family: 'Raleway', style: '700', size: '34' }),
    h5: new Font({ family: 'Raleway', style: '700', size: '24' }),
    h6: new Font({ family: 'Raleway', style: '700', size: '20' }),
    subtitle1: new Font({ family: 'Raleway', style: '700', size: '16' }),
    subtitle2: new Font({ family: 'Raleway', style: '700', size: '24' }),
    body1: new Font({ family: 'Raleway', style: '700', size: '16' }),
    body2: new Font({ family: 'Raleway', style: '500', size: '14' }),
    button: new Font({ family: 'Raleway', style: '700', size: '14' }),
    caption: new Font({ family: 'Raleway', style: 'Medium', size: '12' }),
    overline: new Font({ family: 'Raleway', style: '300', size: '12' }),
  },
  density: '0'
};
