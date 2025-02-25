import styled from 'styled-components';

const Text = styled.h3`
  font-size: var(--font-size-m);
  line-height: var(--font-height-m);
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--margin-xs);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Text };
