import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export { List };
