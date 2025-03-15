import { ETheme } from '@/context/themeContext';
import { useTheme } from '@/hooks';

import { Button } from './styled';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button type="button" onClick={toggleTheme}>
      <img src={`${theme === ETheme.LIGHT ? '/icons/themeDark.svg' : '/icons/themeLight.svg'}`} alt="" />
    </Button>
  );
};
