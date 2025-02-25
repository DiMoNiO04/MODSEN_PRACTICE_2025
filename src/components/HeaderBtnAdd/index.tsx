import { useDropdownToggle } from '@/hooks';

import { HeaderDropdown } from '../HeaderDropdown';
import { BtnRound } from '../ui';
import { HeaderBtnAddBlock } from './styled';

export const HeaderBtnAdd = () => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const handleClickBtnAdd = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <HeaderBtnAddBlock>
      <BtnRound
        ref={refDropdownBtn}
        color={isDropdownOpen ? '#000000' : '#475569'}
        hasBorder
        handle={handleClickBtnAdd}
        type="add"
      />
      {isDropdownOpen && <HeaderDropdown ref={refDropdownMenu} />}
    </HeaderBtnAddBlock>
  );
};
