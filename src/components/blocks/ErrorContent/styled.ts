import styled from 'styled-components';

const Block = styled.div`
  background-color: var(--color-sage);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xxl) 0;
  row-gap: var(--gap-xxl);
`;
const Title = styled.h1`
  color: var(--color-black);
  font-size: var(--font-size-xxl);
  line-height: var(--line-height-xxl);
  font-weight: var(--font-weight-bold);
`;

export { Block, Title };
