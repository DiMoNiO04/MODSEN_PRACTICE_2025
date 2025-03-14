import { useEffect } from 'react';

import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { EColors, KANBAN_DATA, UITexts } from '@/constants';
import { IKanbanData } from '@/utils/interfaces';

import { Container } from '..';
import { DashboardContainer } from './styled';

const LS_KEY_KANBAN = 'kanbanData';

export const getKanbanData = (): IKanbanData => {
  const data = localStorage.getItem(LS_KEY_KANBAN);

  if (data) {
    try {
      return JSON.parse(data) as IKanbanData;
    } catch (error) {
      console.error('Failed to parse kanban data from LS', error);
      return KANBAN_DATA;
    }
  }
  return KANBAN_DATA;
};

export const saveKanbanData = (data: IKanbanData) => {
  try {
    localStorage.setItem(LS_KEY_KANBAN, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save kanban data to LS', error);
  }
};

export const Dashboard = () => {
  const boardData: IKanbanData = getKanbanData();

  useEffect(() => {
    saveKanbanData(boardData);
  }, [boardData]);

  return (
    <section>
      <Container>
        <DashboardContainer>
          {Object.values(boardData.columns).map((column) => (
            <TodoColumn key={column.id} cardIds={column.cardIds} status={column.status} cards={boardData.cards} />
          ))}
          <AddNewColumn status={{ color: EColors.GRAY, value: UITexts.COLUMN.ADD_NEW }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
