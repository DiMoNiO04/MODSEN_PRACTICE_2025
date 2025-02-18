import styled from 'styled-components';
import { IPlusIconProps, PlusIcon } from '../PlusIcon';

interface IBtnAddIconProps extends IPlusIconProps {
  hasBorder?: boolean;
  handle: () => void;
}

const Button = styled.button<{ hasBorder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${({ hasBorder }) => (hasBorder ? '1px solid #CBD5E1' : 'none')};
  padding: ${({ hasBorder }) => (hasBorder ? '8px' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background: #cbd5e1;
    }
  }
`;

export const BtnAddIcon = ({ size, color, hasBorder = false, handle }: IBtnAddIconProps) => {
  return (
    <Button hasBorder={hasBorder} type="button" onClick={handle}>
      <PlusIcon size={size} color={color} />
    </Button>
  );
};
