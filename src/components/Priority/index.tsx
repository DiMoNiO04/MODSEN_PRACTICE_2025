import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { PriorityDropdown } from '../PriorityDropdown';
import { ColorText } from '../ui';
import { PriorityBlock, PriorityButton } from './styled';

export const Priority = ({ color, value }: IOption) => {
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
