import styled from 'styled-components';

const TextAreaField = styled.textarea`
  padding: var(--padding-s);
  font-size: var(--font-size-m);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-xs);
  resize: none;
  overflow: hidden;

  &:focus {
    border-color: var(--color-orange);
    outline: none;
  }
`;

export { TextAreaField };
