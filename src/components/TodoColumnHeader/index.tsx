import { useState } from 'react';

import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { TitleWithCount } from '../TitleWithCount';
import { TodoColumnHeaderDropdown } from '../TodoColumnHeaderDropdown';
import { BtnRound } from '../ui';
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

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  const handleClickBtnAdd = () => (isAddNewColumn ? toggleModalOpenAddColumn() : toggleModalOpenAddTask());
  const handleClickBtnMore = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <TodoColumnHeaderContainer color={status.color}>
      <TitleWithCount color={status.color} title={status.value} count={count} />
      {isAddNewColumn ? (
        <BtnRound color="#FFFFFF" handle={handleClickBtnAdd} type="add" />
      ) : (
        <>
          <BtnRound
            ref={refDropdownBtn}
            color={isDropdownOpen ? '#475569' : '#FFFFFF'}
            handle={handleClickBtnMore}
            type="more"
          />
          {isDropdownOpen && (
            <TodoColumnHeaderDropdown ref={refDropdownMenu} name={status.value} color={status.color} />
          )}
        </>
      )}
    </TodoColumnHeaderContainer>
  );
};
