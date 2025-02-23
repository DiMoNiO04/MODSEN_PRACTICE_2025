import { ICardPriority } from '@/utils';
import { ColorText } from '../ui';
import { useDropdownToggle } from '@/hooks';
import { PriorityBlock, PriorityButton } from './styled';
import { PriorityDropdown } from '../PriorityDropdown';

export const Priority = ({ color, value }: ICardPriority) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle(true);

  const handleClickBtnAdd = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <PriorityBlock>
      <PriorityButton type="button" onClick={handleClickBtnAdd} ref={refDropdownBtn}>
        <ColorText color={color} text={value} />
      </PriorityButton>
      {isDropdownOpen && <PriorityDropdown ref={refDropdownMenu} />}
    </PriorityBlock>
  );
};
