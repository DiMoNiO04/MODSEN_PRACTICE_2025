import { useMemo, useState } from 'react';

import { ETheme, LS_KEY_THEME, ThemeContext } from '@/context/themeContext';
import { IChildrenProps } from '@/utils/interfaces';
const defaultTheme = (localStorage.getItem(LS_KEY_THEME) as ETheme) || ETheme.LIGHT;

const ThemeProvider = ({ children }: IChildrenProps) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
