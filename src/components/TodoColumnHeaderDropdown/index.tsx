import { forwardRef, useState } from 'react';
import { ModalAddTask } from '../modals';
import { Dropdown, MenuItem, MenuItemDelete } from './styled';
import { ModalEditColumn } from '../modals/ModalEditColumn';
import { ModalConfirm } from '../modals/ModalConfirm';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);
  const [isModalOpenEditColmn, setIsModalOpenEditColumn] = useState<boolean>(false);
  const [isModalOpenDeleteColumn, setIsModalOpenDeleteColumn] = useState<boolean>(false);

  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);
  const toggleModalOpenEditColumn = () => setIsModalOpenEditColumn(!isModalOpenEditColmn);
  const toggleModalOpenDeleteColumn = () => setIsModalOpenDeleteColumn(!isModalOpenDeleteColumn);

  return (
    <>
      <Dropdown ref={ref}>
        <MenuItem onClick={toggleModalOpenAddTask}>Add new task</MenuItem>
        <MenuItem onClick={toggleModalOpenEditColumn}>Edit column</MenuItem>
        <MenuItemDelete onClick={toggleModalOpenDeleteColumn}>Delete column</MenuItemDelete>
      </Dropdown>
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
      {isModalOpenEditColmn && <ModalEditColumn onClose={toggleModalOpenEditColumn} />}
      {isModalOpenDeleteColumn && <ModalConfirm onClose={toggleModalOpenDeleteColumn} />}
    </>
  );
});
