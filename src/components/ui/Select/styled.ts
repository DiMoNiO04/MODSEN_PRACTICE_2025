import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectArrowIcon = styled.div<{ isRotate?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${({ isRotate }) => (isRotate ? '180deg' : '0deg')});
  transition: transform 0.2s ease;
`;

const SelectButton = styled.button`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #f59e0b;
  border-radius: 4px;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export { SelectContainer, SelectButton, SelectArrowIcon };
