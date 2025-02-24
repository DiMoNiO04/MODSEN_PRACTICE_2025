import { TodoColumn } from '@/components/TodoColumn';
import { tasksData } from '@/assets/data/tasks';
import { AddNewColumn } from '@/components/AddNewColumn';
import { Container } from '..';
import { DashboardContainer } from './styled';
import { CARD_STATUS } from '@/utils';

export const Dashboard = () => {
  return (
    <section>
      <Container>
        <DashboardContainer>
          <TodoColumn status={CARD_STATUS.toDo} tasks={tasksData[0]} />
          <TodoColumn status={CARD_STATUS.inProgress} tasks={tasksData[1]} />
          <TodoColumn status={CARD_STATUS.done} tasks={tasksData[2]} />
          <AddNewColumn status={{ color: '#C8CDC2', value: 'Add New Column' }} count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
