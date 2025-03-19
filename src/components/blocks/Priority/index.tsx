import { ColorText } from '@/components/ui';
import { TASK_PRIORITY } from '@/constants';
import { EPriorityName } from '@/constants/taskPriority';
import { useDropdownToggle, useTaskActions } from '@/hooks';
import { IOption, ITask } from '@/utils/interfaces';

import { PriorityDropdown } from '../PriorityDropdown';
import { PriorityBlock, PriorityButton } from './styled';

interface IPriorityProps {
  priorityId: string;
  taskData: ITask;
}

export const Priority = ({ priorityId, taskData }: IPriorityProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const { handleEditPriority } = useTaskActions();

  const priority = TASK_PRIORITY[priorityId as EPriorityName];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handlePriorityChange = (selectedOption: IOption) => {
    setIsDropdownOpen(false);
    handleEditPriority(taskData.id, selectedOption.id as EPriorityName);
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
