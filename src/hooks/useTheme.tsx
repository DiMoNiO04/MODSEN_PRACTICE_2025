import { useContext } from 'react';

import { ETheme, LS_KEY_THEME, ThemeContext } from '../context/themeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ETheme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LS_KEY_THEME, newTheme);
  };

  return { theme, toggleTheme };
};
