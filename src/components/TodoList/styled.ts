import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--gap-l);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export { List };
