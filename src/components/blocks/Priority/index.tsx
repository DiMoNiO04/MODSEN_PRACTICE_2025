import { ColorText } from '@/components/ui';
import { CARD_PRIORITY } from '@/constants';
import { EPriorityName } from '@/constants/cardPriority';
import { useDropdownToggle, useTaskActions } from '@/hooks';
import { ICard, IOption } from '@/utils/interfaces';

import { PriorityDropdown } from '../PriorityDropdown';
import { PriorityBlock, PriorityButton } from './styled';

interface IPriorityProps {
  priorityId: string;
  cardData: ICard;
}

export const Priority = ({ priorityId, cardData }: IPriorityProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const { handleEditPriority } = useTaskActions();

  const priority = CARD_PRIORITY[priorityId as EPriorityName];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handlePriorityChange = (selectedOption: IOption) => {
    setIsDropdownOpen(false);
    handleEditPriority(cardData.id, selectedOption.id as EPriorityName);
  };

  return (
    <PriorityBlock>
      <PriorityButton type="button" onClick={toggleDropdown} ref={refDropdownBtn}>
        <ColorText text={priority.title} color={priority.color} isFullWidth />
      </PriorityButton>
      {isDropdownOpen && <PriorityDropdown ref={refDropdownMenu} onChange={handlePriorityChange} />}
    </PriorityBlock>
  );
};
