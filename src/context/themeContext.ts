import { createContext } from 'react';

const LS_KEY_THEME = 'theme';

enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IThemeContext {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: ETheme.LIGHT,
  setTheme: () => {},
});

export { ETheme,LS_KEY_THEME, ThemeContext };
export type { IThemeContext };
