import { ColorText } from '@/components/ui';
import { CARD_PRIORITY } from '@/constants';
import { useDropdownToggle } from '@/hooks';

import { PriorityDropdown } from '../PriorityDropdown';
import { PriorityBlock, PriorityButton } from './styled';

interface IPriorityProps {
  priorityId: string;
}

export const Priority = ({ priorityId }: IPriorityProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const priority = CARD_PRIORITY[priorityId];

  return (
    <PriorityBlock>
      <PriorityButton type="button" onClick={toggleDropdown} ref={refDropdownBtn}>
        <ColorText text={priority.title} color={priority.color} isFullWidth />
      </PriorityButton>
      {isDropdownOpen && <PriorityDropdown ref={refDropdownMenu} />}
    </PriorityBlock>
  );
};
