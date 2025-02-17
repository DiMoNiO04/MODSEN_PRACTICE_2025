import styled from 'styled-components';
import { Container } from '../Container';

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
          <p>123</p>
          <p>456</p>
          <p>678</p>
        </DashboardContainer>
      </Container>
    </section>
  );
};
