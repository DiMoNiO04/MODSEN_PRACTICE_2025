import { useState } from 'react';

import { BtnRound } from '@/components/ui';
import { EColors } from '@/constants';
import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { TitleWithCount } from '../TitleWithCount';
import { TodoColumnHeaderDropdown } from '../TodoColumnHeaderDropdown';
import { TodoColumnHeaderContainer } from './styled';

export interface ITodoColumnHeaderProps {
  status: IOption;
  count: number;
  isAddNewColumn?: boolean;
}

export const TodoColumnHeader = ({ status, count, isAddNewColumn = false }: ITodoColumnHeaderProps) => {
  const [isModalOpenAddColumn, setIsModalOpenAddColumn] = useState<boolean>(false);
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);

  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const buttonColor = isDropdownOpen ? EColors.DARK : EColors.WHITE;

  const toggleAddColumnModal = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleAddTaskModal = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  const handleAddButtonClick = () => (isAddNewColumn ? toggleAddColumnModal() : toggleAddTaskModal());
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <TodoColumnHeaderContainer color={status.color}>
      <TitleWithCount color={status.color} title={status.value} count={count} />
      {isAddNewColumn ? (
        <BtnRound color={EColors.WHITE} handle={handleAddButtonClick} type="add" />
      ) : (
        <>
          <BtnRound ref={refDropdownBtn} color={buttonColor} handle={toggleDropdown} type="more" />
          {isDropdownOpen && (
            <TodoColumnHeaderDropdown ref={refDropdownMenu} name={status.value} color={status.color} />
          )}
        </>
      )}
    </TodoColumnHeaderContainer>
  );
};
