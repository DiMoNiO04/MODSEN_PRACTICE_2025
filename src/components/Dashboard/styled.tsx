import styled from 'styled-components';
import { Container } from '../Container';
import { TodoColumn } from '../TodoColumn';

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
          <TodoColumn color="#4F46E5" title="To Do" count={2} />
          <TodoColumn color="#F59E0B" title="In progress" count={2} />
          <TodoColumn color="#22C55E" title="Done" count={3} />
        </DashboardContainer>
      </Container>
    </section>
  );
};
