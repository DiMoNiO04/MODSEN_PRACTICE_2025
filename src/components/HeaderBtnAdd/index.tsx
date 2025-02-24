import { BtnRound } from '../ui';
import { HeaderDropdown } from '../HeaderDropdown';
import { HeaderBtnAddBlock } from './styled';
import { useDropdownToggle } from '@/hooks';

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
