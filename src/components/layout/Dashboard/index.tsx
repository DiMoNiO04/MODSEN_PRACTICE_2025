import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { EColors, UITexts } from '@/constants';
import { useAppSelector } from '@/store/store';

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
            <TodoColumn
              key={column.id}
              cardIds={column.cardIds}
              title={column.title}
              color={column.color}
              cards={cards}
            />
          ))}
          <AddNewColumn color={EColors.GRAY} title={UITexts.COLUMN.ADD_NEW} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
