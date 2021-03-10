import 'styled-components';

export type Breakpoints = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

declare module 'styled-components' {
  type Theme = typeof import('../styles/theme').default;
  export interface DefaultTheme extends Theme {}
}
