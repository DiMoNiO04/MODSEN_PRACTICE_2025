import styled from 'styled-components';

const Block = styled.h1`
  font-size: 30px;
  line-height: 38px;
  font-weight: 800;
  letter-spacing: -0.4px;
`;

export const Logo = () => {
  return <Block>Kanban Dashboard</Block>;
};
