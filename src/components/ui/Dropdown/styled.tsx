import styled from 'styled-components';

const DropdownBlock = styled.div<{ $isPriority?: boolean; $isFullWidth?: boolean }>`
  position: absolute;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'max-content')};
  z-index: 10;
  background: var(--color-white);
  box-shadow: var(--shadow);
  border-radius: var(--radius-s);
  padding: var(--padding-s);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  ${({ $isPriority }) =>
    $isPriority
      ? `
        left: 0;
        top: var(--top-xl);
      `
      : `
        right: 0;
        top: var(--right-xxl);
      `}
`;

export { DropdownBlock };
