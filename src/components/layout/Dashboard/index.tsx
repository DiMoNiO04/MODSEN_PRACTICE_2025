import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { EColors, TASKS_DATA, UITexts } from '@/constants';

import { Container } from '..';
import { DashboardContainer } from './styled';

export const Dashboard = () => {
  return (
    <section>
      <Container>
        <DashboardContainer>
          {Object.values(TASKS_DATA.columns).map((column) => (
            <TodoColumn key={column.id} cardIds={column.cardIds} status={column.status} cards={TASKS_DATA.cards} />
          ))}
          <AddNewColumn status={{ color: EColors.GRAY, value: UITexts.COLUMN.ADD_NEW }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
