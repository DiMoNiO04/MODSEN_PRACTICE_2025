import { useEffect } from 'react';

import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { EColors, UITexts } from '@/constants';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { useAppDispatch,useAppSelector } from '@/store/store';
import { kanbanStorage } from '@/utils';

import { Container } from '..';
import { DashboardContainer } from './styled';

export const Dashboard = () => {
  const kanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const { columns, cards } = kanbanData.kanbanData;

  return (
    <section>
      <Container>
        <DashboardContainer>
          {Object.values(columns).map((column) => (
            <TodoColumn key={column.id} cardIds={column.cardIds} status={column.status} cards={cards} />
          ))}
          <AddNewColumn status={{ color: EColors.GRAY, value: UITexts.COLUMN.ADD_NEW }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
