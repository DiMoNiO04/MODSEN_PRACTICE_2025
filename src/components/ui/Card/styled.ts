import styled from 'styled-components';

const TopBlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--margin-s);
  width: 100%;
`;

const Block = styled.div`
  border-radius: var(--radius-xl);
  padding: var(--padding-m);
  box-shadow: var(--shadow);
  border: 1px solid var(--color-gray-cool);
  background: var(--color-white);
`;

export { Block, TopBlockInfo };
