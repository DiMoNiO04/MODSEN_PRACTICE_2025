import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectArrowIcon = styled.div<{ $isRotate?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${({ $isRotate }) => ($isRotate ? '180deg' : '0deg')});
  transition: transform 0.2s ease;
`;

const SelectButton = styled.button`
  padding: var(--padding-s);
  font-size: var(--font-size-m);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-xs);
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    border-color: var(--color-orange);
    outline: none;
  }
`;

export { SelectArrowIcon, SelectButton, SelectContainer };
