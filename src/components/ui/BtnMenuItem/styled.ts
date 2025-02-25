import styled, { css } from 'styled-components';

import { TBtnMenuItem } from '.';

const BtnMenuItemBlock = styled.button<{ $typeBtn?: TBtnMenuItem }>`
  border: none;
  background: none;
  border-radius: var(--radius-s);
  padding: var(--padding-s) var(--padding-l);
  cursor: pointer;
  text-align: left;
  width: 100%;
  flex-shrink: 0;
  font-weight: 500;
  font-size: var(--font-size-m);
  transition:
    background-color 0.2s,
    color 0.2s,
    border 0.2s;

  ${({ $typeBtn }) => {
    switch ($typeBtn) {
      case 'delete':
        return css`
          color: var(--color-red);
          border: 1px solid var(--color-red);
          background-color: var(--color-white);

          @media (any-hover: hover) {
            &:hover {
              background-color: var(--color-red-hover);
            }
          }
        `;
      case 'edit':
        return css`
          color: var(--color-orange);
          border: 1px solid var(--color-orange);
          background-color: var(--color-white);

          @media (any-hover: hover) {
            &:hover {
              background-color: var(--color-orange-hover);
            }
          }
        `;
      case 'add':
        return css`
          color: var(--color-green);
          border: 1px solid var(--color-green);
          background-color: var(--color-white);

          @media (any-hover: hover) {
            &:hover {
              background-color: var(--color-green-hover);
            }
          }
        `;
      default:
        return css`
          @media (any-hover: hover) {
            &:hover {
              background-color: var(--color-gray-cool);
            }
          }
        `;
    }
  }}
`;

export { BtnMenuItemBlock };
