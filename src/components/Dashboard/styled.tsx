import styled from 'styled-components';
import { Container } from '../Container';
import { TodoColumn } from '../TodoColumn';
import { tasksData } from '@/assets/data/tasks';
import { AddNewColumn } from '../AddNewColumn';

const DashboardContainer = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const Dashboard = () => {
  return (
    <section>
      <Container>
        <DashboardContainer>
          <TodoColumn color="#4F46E5" title="To Do" count={2} tasks={tasksData[0]} />
          <TodoColumn color="#F59E0B" title="In progress" count={2} tasks={tasksData[1]} />
          <TodoColumn color="#22C55E" title="Done" count={3} tasks={tasksData[2]} />
          <AddNewColumn color="#C8CDC2" title="Column Title" count={0} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
