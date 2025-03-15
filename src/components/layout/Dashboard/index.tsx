import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { useAppSelector } from '@/store/store';
import { IKanbanData } from '@/utils/interfaces';

import { Container } from '..';
import { DashboardContainer } from './styled';

export const Dashboard = () => {
  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const { columns } = kanbanData;

  return (
    <section>
      <Container>
        <DashboardContainer>
          {Object.values(columns).map((column) => (
            <TodoColumn key={column.id} {...column} />
          ))}
          <AddNewColumn />
        </DashboardContainer>
      </Container>
    </section>
  );
};
