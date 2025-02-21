import styled from 'styled-components';

const DropdownBlock = styled.div<{ isPriority?: boolean }>`
  position: absolute;
  width: max-content;
  z-index: 10;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ isPriority }) =>
    isPriority
      ? `
        left: 0;
        top: 28px;
      `
      : `
        right: 0;
        top: 40px;
      `}
`;

export { DropdownBlock };
