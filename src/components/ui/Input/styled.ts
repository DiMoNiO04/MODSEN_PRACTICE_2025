import styled from 'styled-components';

const InputField = styled.input<{ $isError?: boolean }>`
  padding: var(--padding-s);
  width: 100%;
  height: 36px;
  font-size: var(--font-size-m);
  border: 1px solid ${({ $isError }) => ($isError ? 'var(--color-red)' : 'var(--color-dark)')};
  border-radius: var(--radius-xs);
  background: var(--color-white);

  &:focus {
    border-color: ${({ $isError }) => ($isError ? 'var(--color-red)' : 'var(--color-orange)')};
    outline: none;
  }
`;

const ErrorText = styled.span`
  color: var(--color-red);
  font-size: 12px;
  display: block;
`;

export { ErrorText, InputField };
