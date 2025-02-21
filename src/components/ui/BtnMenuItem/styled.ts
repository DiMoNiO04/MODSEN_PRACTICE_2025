import styled, { css } from 'styled-components';
import { TBtnMenuItem } from '.';

const BtnMenuItemBlock = styled.button<{ typeBtn?: TBtnMenuItem }>`
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
  transition:
    background-color 0.2s,
    color 0.2s,
    border 0.2s;

  ${({ typeBtn }) => {
    switch (typeBtn) {
      case 'delete':
        return css`
          color: #dc2626;
          border: 1px solid #dc2626;
          background-color: #fee2e2;

          @media (any-hover: hover) {
            &:hover {
              background-color: #fecaca;
            }
          }
        `;
      case 'edit':
        return css`
          color: #f59e0b;
          border: 1px solid #f59e0b;
          background-color: #fef3c7;

          @media (any-hover: hover) {
            &:hover {
              background-color: #fde68a;
            }
          }
        `;
      case 'add':
        return css`
          color: #16a34a;
          border: 1px solid #16a34a;
          background-color: #dcfce7;

          @media (any-hover: hover) {
            &:hover {
              background-color: #bbf7d0;
            }
          }
        `;
      default:
        return css`
          @media (any-hover: hover) {
            &:hover {
              background-color: #f8fafc;
            }
          }
        `;
    }
  }}
`;

export { BtnMenuItemBlock };
