import styled, { css } from 'styled-components';

const Text = styled.p<{ $maxLines?: number }>`
  color: var(--color-dark);
  font-size: var(--font-size-m);
  line-height: var(--font-height-l);
  font-weight: 400;

  ${({ $maxLines }) =>
    $maxLines &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$maxLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export { Text };
