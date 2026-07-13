import type { ThemeState } from './utils/theme';

declare module 'void' {
  interface CloudContextVariables {
    shared: {
      theme: ThemeState;
    };
  }
}
