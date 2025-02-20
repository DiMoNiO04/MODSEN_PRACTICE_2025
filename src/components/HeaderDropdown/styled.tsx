import styled from 'styled-components';

const Dropdown = styled.div`
  position: absolute;
  width: max-content;
  right: 0;
  top: 48px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.button`
  border: none;
  background: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 16px;

  @media (any-hover: hover) {
    &:hover {
      background-color: #f8fafc;
    }
  }
`;

export const HeaderDropdown = () => {
  return (
    <Dropdown>
      <MenuItem onClick={() => alert('Добавление колонки')}>Добавить колонку</MenuItem>
      <MenuItem onClick={() => alert('Добавление задачи')}>Добавить задачу</MenuItem>
    </Dropdown>
  );
};
