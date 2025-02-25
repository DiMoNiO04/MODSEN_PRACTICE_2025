import { AddNewColumn, TodoColumn } from '@/components/blocks';
import { CARD_STATUS, TASKS_DATA } from '@/constants';

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
          <AddNewColumn status={{ color: '#C8CDC2', value: 'Add New Column' }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
