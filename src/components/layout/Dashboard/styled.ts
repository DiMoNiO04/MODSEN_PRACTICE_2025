import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: var(--padding-xxl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-xl);

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    padding: var(--padding-xx);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--padding-l);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0 var(--padding-xxl);
  }
`;

export { DashboardContainer };
