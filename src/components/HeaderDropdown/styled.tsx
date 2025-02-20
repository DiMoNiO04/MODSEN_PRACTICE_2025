import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { ModalAddColumn, ModalAddTask } from '../modals';

const Dropdown = styled.div`
  position: absolute;
  width: max-content;
  right: 0;
  top: 48px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.button`
  border: none;
  background: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 16px;

  @media (any-hover: hover) {
    &:hover {
      background-color: #f8fafc;
    }
  }
`;

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isModalOpenAddColumn, setIsModalOpenAddColumn] = useState<boolean>(false);
  const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  return (
    <>
      <Dropdown ref={ref}>
        <MenuItem onClick={toggleModalOpenAddColumn}>Добавить колонку</MenuItem>
        <MenuItem onClick={toggleModalOpenAddTask}>Добавить задачу</MenuItem>
      </Dropdown>
      {isModalOpenAddColumn && <ModalAddColumn onClose={toggleModalOpenAddColumn} />}
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
    </>
  );
});
