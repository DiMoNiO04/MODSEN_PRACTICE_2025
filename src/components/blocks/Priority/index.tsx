import { ColorText } from '@/components/ui';
import { CARD_PRIORITY } from '@/constants';
import { useDropdownToggle } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ICard, IOption } from '@/utils/interfaces';

import { PriorityDropdown } from '../PriorityDropdown';
import { PriorityBlock, PriorityButton } from './styled';

interface IPriorityProps {
  priorityId: string;
  cardData: ICard;
}

export const Priority = ({ priorityId, cardData }: IPriorityProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const dispatch = useAppDispatch();
  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const priority = CARD_PRIORITY[priorityId];

  const handlePriorityChange = (selectedOption: IOption) => {
    setIsDropdownOpen(false);

    const updatedCard: ICard = { ...cardData, priority: selectedOption.id };

    const updatedCards = {
      ...kanbanData.cards,
      [updatedCard.id]: updatedCard,
    };

    const updatedKanbanData = {
      ...kanbanData,
      cards: updatedCards,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Priority card successfully edited`,
      })
    );
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
