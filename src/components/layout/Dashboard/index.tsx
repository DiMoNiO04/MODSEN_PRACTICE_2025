import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { Notification } from '@/components/ui/Notification';
import { EColors, UITexts } from '@/constants';
import { useKanbanData } from '@/hooks';

import { Container } from '..';
import { DashboardContainer } from './styled';

export const Dashboard = () => {
  const kanbanData = useKanbanData();

  const { columns, cards } = kanbanData;

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

      <Notification text="12312" isSuccess={false} />
    </section>
  );
};
