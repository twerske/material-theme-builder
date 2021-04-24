export interface Theme {
  version: string;
  name: string;
  path?: string;
  shapes?: Shapes;
  colorsLight?: Colors;
  colorsDark?: Colors;
  typography?: Typography;
}

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export interface Shapes {
  small: string;
  medium: string;
  large: string;
}

export interface Typography {
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
  subtitle1: Font;
  subtitle2: Font;
  body1: Font;
  body2: Font;
  button: Font;
  caption: Font;
  overline: Font;
}

export interface Font {
  family: string;
  weight: string;
  size: number;
  uppercase?: boolean;
}

export const defaultTheme: Theme = {
  version: '1.0.0',
  path: 'theme',
  name: 'Default',
  shapes: {
    small: '4px',
    medium: '4px',
    large: '0px',
  },
  colorsLight: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF',
  },
  colorsDark: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#cf6679',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
    onError: '#000000',
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
