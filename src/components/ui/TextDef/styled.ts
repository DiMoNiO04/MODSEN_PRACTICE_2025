import styled, { css } from 'styled-components';

const Text = styled.p<{ $maxLines?: number }>`
  color: #475569;
  font-size: 16px;
  line-height: 25.6px;
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
