import styled from 'styled-components';

const Text = styled.h3`
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

export { Text };
