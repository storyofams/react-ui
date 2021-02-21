import 'styled-components';

export type Breakpoints = {
  xxs?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

type Theme = typeof import('./theme').default;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    breakpoints: Breakpoints;
  }
}
