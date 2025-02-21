import { useState } from 'react';
import { BtnRound } from '../ui';
import { TitleWithCount } from '../TitleWithCount';
import { ModalAddColumn, ModalAddTask } from '../modals';
import { ModalEditColumn } from '../modals/ModalEditColumn';
import { ModalConfirm } from '../modals/ModalConfirm';
import { TodoColumnHeaderContainer } from './styled';
import { TodoColumnHeaderDropdown } from '../TodoColumnHeaderDropdown';
import { useDropdownToggle } from '@/hooks';

export interface ITodoColumnHeaderProps {
  color: string;
  title: string;
  count: number;
  isAddNewColumn?: boolean;
}

export const TodoColumnHeader = ({ color, title, count, isAddNewColumn = false }: ITodoColumnHeaderProps) => {
  const [isModalOpenAddColumn, setIsModalOpenAddColumn] = useState<boolean>(false);
  const [isModalOpenEditColumn, setIsModalOpenEditColumn] = useState<boolean>(false);
  const [isModalOpenDeleteColumn, setIsModalOpenDeleteColumn] = useState<boolean>(false);
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);

  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenEditColumn = () => setIsModalOpenEditColumn(!isModalOpenEditColumn);
  const toggleModalOpenDeleteColumn = () => setIsModalOpenDeleteColumn(!isModalOpenDeleteColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  const handleClickBtnAdd = () => (isAddNewColumn ? toggleModalOpenAddColumn() : toggleModalOpenAddTask());
  const handleClickBtnMore = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <TodoColumnHeaderContainer color={color}>
        <TitleWithCount color={color} title={title} count={count} />
        {isAddNewColumn ? (
          <BtnRound color="#FFFFFF" handle={handleClickBtnAdd} type="add" />
        ) : (
          <>
            <BtnRound ref={refDropdownBtn} color="#FFFFFF" handle={handleClickBtnMore} type="more" />
            {isDropdownOpen && <TodoColumnHeaderDropdown ref={refDropdownMenu} />}
          </>
        )}
      </TodoColumnHeaderContainer>

      {isModalOpenAddColumn && <ModalAddColumn onClose={toggleModalOpenAddColumn} />}
      {isModalOpenEditColumn && <ModalEditColumn onClose={toggleModalOpenEditColumn} />}
      {isModalOpenDeleteColumn && <ModalConfirm onClose={toggleModalOpenDeleteColumn} />}
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
    </>
  );
};
