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
          <TodoColumn />
          <TodoColumn />
          <TodoColumn />
        </DashboardContainer>
      </Container>
    </section>
  );
};
