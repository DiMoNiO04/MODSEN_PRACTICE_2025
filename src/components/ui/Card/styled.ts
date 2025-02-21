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

const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 25.6px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { TopBlockInfo, Block, Title, Description };
