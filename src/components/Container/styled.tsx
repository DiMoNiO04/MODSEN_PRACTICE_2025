import styled from 'styled-components';

const ContainerBlock = styled.div`
  max-width: 1035px;
  padding: 0 15px;
  margin: 0 auto;
`;

interface IContainerMainProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerMainProps) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};
