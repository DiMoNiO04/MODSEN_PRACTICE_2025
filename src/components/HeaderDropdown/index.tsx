import { forwardRef, useState } from 'react';
import { ModalAddColumn, ModalAddTask } from '../modals';
import { Dropdown, MenuItem } from './styled';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isModalOpenAddColumn, setIsModalOpenAddColumn] = useState<boolean>(false);
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  return (
    <>
      <Dropdown ref={ref}>
        <MenuItem onClick={toggleModalOpenAddColumn}>Add new column</MenuItem>
        <MenuItem onClick={toggleModalOpenAddTask}>Add new task</MenuItem>
      </Dropdown>
      {isModalOpenAddColumn && <ModalAddColumn onClose={toggleModalOpenAddColumn} />}
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
    </>
  );
});
