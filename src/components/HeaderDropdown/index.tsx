import { forwardRef, useState } from 'react';
import { ModalAddColumn, ModalAddTask } from '../modals';
import { BtnMenuItem, Dropdown } from '../ui';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isModalOpenAddColumn, setIsModalOpenAddColumn] = useState<boolean>(false);
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  return (
    <>
      <Dropdown ref={ref}>
        <BtnMenuItem onClick={toggleModalOpenAddColumn} text={'Add new column'} />
        <BtnMenuItem onClick={toggleModalOpenAddTask} text={'Add new task'} />
      </Dropdown>
      {isModalOpenAddColumn && <ModalAddColumn onClose={toggleModalOpenAddColumn} />}
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} isFromHeader={true} />}
    </>
  );
});
