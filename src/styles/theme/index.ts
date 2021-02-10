import { Breakpoints } from '../styled';
import buttonTheme from './button';
import formTheme from './form';
import linkTheme from './link';
import textTheme from './text';
import variantsTheme from './variants';

const theme = {
  colors: {
    primary50: '#F0F9FF',
    primary100: '#E0F2FE',
    primary200: '#BAE6FD',
    primary300: '#7DD3FC',
    primary400: '#38BDF8',
    primary500: '#0EA5E9',
    primary600: '#0284C7',
    primary700: '#0369A1',
    primary800: '#075985',
    primary900: '#083853',
    secondary50: '#F5F3FF',
    secondary100: '#EDE9FE',
    secondary200: '#DDD6FE',
    secondary300: '#C4B5FD',
    secondary400: '#A78BFA',
    secondary500: '#8B5CF6',
    secondary600: '#7C3AED',
    secondary700: '#6D28D9',
    secondary800: '#541EAA',
    secondary900: '#3C137B',
    white: '#ffffff',
    grey50: '#FAFAFA',
    grey100: '#F4F4F5',
    grey200: '#E4E4E7',
    grey300: '#D4D4D8',
    grey400: '#A1A1AA',
    grey500: '#71717A',
    grey600: '#52525B',
    grey700: '#3F3F46',
    grey800: '#27272A',
    grey900: '#18181B',
    warning50: '#FEFCE8',
    warning100: '#FEF08A',
    warning300: '#FACC15',
    warning600: '#CA8A04',
    warning800: '#713F12',
    success50: '#F0FDF4',
    success100: '#BBF7D0',
    success300: '#4ADE80',
    success600: '#16A34A',
    success800: '#14532D',
    error50: '#FEF2F2',
    error100: '#FEE2E2',
    error300: '#F87171',
    error600: '#DC2626',
    error800: '#7F1D1D',
    transparent: 'rgba(255, 255, 255, 0);',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fonts: {
    heading: `Domaine Disp`,
    body: `Inter`,
    mono: `SFMono-Regular, Menlo, Monaco,C onsolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    root: '14px',
    0: '10px',
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '56px',
    11: '64px',
    12: '80px',
    heading: '32px',
  },
  lineHeights: {
    normal: 1,
    heading: 1.1,
    medium: 1.25,
    high: 1.6,
  },
  space: {
    0: 0,
    '1/4': 2,
    '1/2': 4,
    '3/4': 6,
    1: 8,
    '5/4': 10,
    '6/4': 12,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
    10: 80,
    15: 120,
    20: 160,
    mobileGutter: 16,
  },
  sizes: {
    maxWidth: 1140,
  },
  breakpoints: ['768px', '1024px', '1280px', '1440px'] as Breakpoints,
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: '0',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  borders: {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
  },
  shadows: {
    sm: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    md: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    lg: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
    none: 'none',
  },
  ...buttonTheme,
  ...formTheme,
  ...linkTheme,
  ...textTheme,
  ...variantsTheme,
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export default theme;
