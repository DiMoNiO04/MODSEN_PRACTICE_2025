import styled from 'styled-components';

const InputField = styled.input`
  padding: var(--padding-s);
  width: 100%;
  height: 36px;
  font-size: var(--font-size-m);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-xs);

  &:focus {
    border-color: var(--color-orange);
    outline: none;
  }
`;

export { InputField };
