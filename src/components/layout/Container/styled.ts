import styled from 'styled-components';

const ContainerBlock = styled.div`
  max-width: 100%;
  padding: 0 var(--padding-l);
  margin: var(--margin-auto);

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export { ContainerBlock };
