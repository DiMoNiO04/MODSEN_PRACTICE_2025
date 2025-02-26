import { BtnRound } from '@/components/ui';
import { EColors } from '@/constants';
import { useDropdownToggle } from '@/hooks';

import { HeaderDropdown } from '../HeaderDropdown';
import { HeaderBtnAddBlock } from './styled';

export const HeaderBtnAdd = () => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const buttonColor = isDropdownOpen ? EColors.BLACK : EColors.DARK;

  return (
    <HeaderBtnAddBlock>
      <BtnRound ref={refDropdownBtn} color={buttonColor} hasBorder handle={toggleDropdown} type="add" />
      {isDropdownOpen && <HeaderDropdown ref={refDropdownMenu} />}
    </HeaderBtnAddBlock>
  );
};
