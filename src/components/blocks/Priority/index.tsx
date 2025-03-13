import { ColorText } from '@/components/ui';
import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { PriorityDropdown } from '../PriorityDropdown';
import { PriorityBlock, PriorityButton } from './styled';

export const Priority = ({ color, value }: IOption) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <PriorityBlock>
      <PriorityButton type="button" onClick={toggleDropdown} ref={refDropdownBtn}>
        <ColorText color={color} text={value} />
      </PriorityButton>
      {isDropdownOpen && <PriorityDropdown ref={refDropdownMenu} />}
    </PriorityBlock>
  );
};
