import { Palette, paletteMap } from "./AngularPalettes";

export interface AngularTheme {
  version: string;
  name: string;
  colorsLight?: AngularThemeColors;
  colorsDark?: AngularThemeColors;
  typography?: AngularTypography;
  density?: number;
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
  }
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

export interface AngularFont {
  family: string;
  weight: string;
  size: number;
  uppercase?: boolean;
}

export const defaultAngularTheme: AngularTheme = {
  version: '1.0.0',
  name: 'AngularDefault',
  colorsLight: {
    primary: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
    accent: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
    warn: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
  },
  colorsDark: {
    primary: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
    accent: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
    warn: {
      name: '$mat-pink',
      palette: paletteMap['$mat-pink'],
      default: '300',
      lighter: '100',
      darker: '100',
      text: '100',
      contrast: {
        default: '300',
        lighter: '100',
        darker: '100', 
      }
    },
  },
  typography: {
    h1: { family: 'Raleway', weight: '300', size: 96 },
    h2: { family: 'Raleway', weight: '500', size: 60 },
    h3: { family: 'Raleway', weight: '700', size: 48 },
    h4: { family: 'Raleway', weight: '700', size: 34 },
    h5: { family: 'Raleway', weight: '700', size: 24 },
    h6: { family: 'Raleway', weight: '700', size: 20 },
    subtitle1: { family: 'Raleway', weight: '700', size: 16 },
    subtitle2: { family: 'Raleway', weight: '700', size: 24 },
    body1: { family: 'Raleway', weight: '700', size: 16 },
    body2: { family: 'Raleway', weight: '500', size: 14 },
    button: {
    family: 'Raleway',
    weight: '700',
    size: 14,
    uppercase: true,
  },
  caption: {
    family: 'Raleway', weight: 'Medium', size: 12 },
    overline: {
      family: 'Raleway',
      weight: '300',
      size: 12,
      uppercase: true,
    },
  },
};
