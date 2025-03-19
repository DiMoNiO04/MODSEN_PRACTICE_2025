import styled from 'styled-components';

const Block = styled.div<{ $isDragOver?: boolean }>`
  border-radius: var(--radius-xl);
  padding: var(--padding-m);
  box-shadow: var(--shadow);
  border: 2px solid var(--color-gray-cool);
  background: var(--color-white);
  cursor: grab;
  transition: box-shadow 0.2s ease;

  ${({ $isDragOver }) =>
    $isDragOver &&
    `
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    cursor: grabbing; 
  `}
`;

const TopBlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--margin-s);
  width: 100%;
`;

export { Block, TopBlockInfo };
