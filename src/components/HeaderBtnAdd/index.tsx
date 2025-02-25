import { useDropdownToggle } from '@/hooks';

import { HeaderDropdown } from '../HeaderDropdown';
import { BtnRound } from '../ui';
import { HeaderBtnAddBlock } from './styled';

export const HeaderBtnAdd = () => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const buttonColor = isDropdownOpen ? '#000000' : '#475569';

  return (
    <HeaderBtnAddBlock>
      <BtnRound ref={refDropdownBtn} color={buttonColor} hasBorder handle={toggleDropdown} type="add" />
      {isDropdownOpen && <HeaderDropdown ref={refDropdownMenu} />}
    </HeaderBtnAddBlock>
  );
};
