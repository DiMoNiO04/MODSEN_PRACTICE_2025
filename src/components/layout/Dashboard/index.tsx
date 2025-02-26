import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { CARD_STATUS, EColors, TASKS_DATA, UITexts } from '@/constants';

import { Container } from '..';
import { DashboardContainer } from './styled';

export const Dashboard = () => {
  return (
    <section>
      <Container>
        <DashboardContainer>
          <TodoColumn status={CARD_STATUS.toDo} tasks={TASKS_DATA[0]} />
          <TodoColumn status={CARD_STATUS.inProgress} tasks={TASKS_DATA[1]} />
          <TodoColumn status={CARD_STATUS.done} tasks={TASKS_DATA[2]} />
          <AddNewColumn status={{ color: EColors.GRAY, value: UITexts.COLUMN.ADD_NEW }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
