import { useState } from 'react';
import styled from 'styled-components';
import { BtnRound } from '../ui';
import { TitleWithCount } from '../TitleWithCount';
import { ModalAddColumn, ModalAddTask } from '../modals';
import { ModalEditColumn } from '../modals/ModalEditColumn';
import { ModalConfirm } from '../modals/ModalConfirm';

const Container = styled.div<{ color: string }>`
  border-radius: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || '#C8CDC2'};
  position: relative;
`;

const Btns = styled.div`
  display: flex;
  column-gap: 10px;
`;

const EditDeleteBtns = styled.div`
  display: flex;
  column-gap: 10px;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  ${Container}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

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

  const toggleModalOpenAddColumn = () => setIsModalOpenAddColumn(!isModalOpenAddColumn);
  const toggleModalOpenEditColumn = () => setIsModalOpenEditColumn(!isModalOpenEditColumn);
  const toggleModalOpenDeleteColumn = () => setIsModalOpenDeleteColumn(!isModalOpenDeleteColumn);
  const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);

  const handleClickBtnAdd = () => (isAddNewColumn ? toggleModalOpenAddColumn() : toggleModalOpenAddTask());

  return (
    <>
      <Container color={color}>
        <TitleWithCount color={color} title={title} count={count} />
        <Btns>
          {!isAddNewColumn && (
            <EditDeleteBtns>
              <BtnRound color="#FFFFFF" handle={toggleModalOpenEditColumn} type="edit" />
              <BtnRound color="#FFFFFF" handle={toggleModalOpenDeleteColumn} type="delete" />
            </EditDeleteBtns>
          )}
          <BtnRound color="#FFFFFF" handle={handleClickBtnAdd} type="add" />
        </Btns>
      </Container>

      {isModalOpenAddColumn && <ModalAddColumn onClose={toggleModalOpenAddColumn} />}
      {isModalOpenEditColumn && <ModalEditColumn onClose={toggleModalOpenEditColumn} />}
      {isModalOpenDeleteColumn && <ModalConfirm onClose={toggleModalOpenDeleteColumn} />}
      {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
    </>
  );
};
