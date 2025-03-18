import { ColorText } from '@/components/ui';
import { CARD_PRIORITY, UITexts } from '@/constants';
import { EPriorityName } from '@/constants/cardPriority';
import { useDropdownToggle } from '@/hooks';
import { editKanbanTaskPriority } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';
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

  const priority = CARD_PRIORITY[priorityId as EPriorityName];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handlePriorityChange = (selectedOption: IOption) => {
    setIsDropdownOpen(false);

    dispatch(editKanbanTaskPriority({ taskId: cardData.id, priorityId: selectedOption.id as EPriorityName }));

    dispatch(
      openNotification({
        isSuccess: true,
        text: UITexts.NOTIFICATION.SUCCESS_EDIT_PRIORITY,
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
