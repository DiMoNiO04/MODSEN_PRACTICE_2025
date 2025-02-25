import styled from 'styled-components';

const TopBlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;

const Block = styled.div`
  border-radius: 32px;
  padding: 12px;
  box-shadow: 0px 2px 4px -2px #1717170f;
  border: 1px solid #e2e8f0;
  background: #ffffff;
`;

export { Block, TopBlockInfo };
