import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const ContainerInput = styled.input<ContainerProps>`
  background: #232132;
  border-radius: 10px;
  padding: 16px;
  flex: 1;

  color: var(--white);
  border: 2px solid #232139;

  display: flex;
  align-items: center;

  &::placeholder {
    color: #666360;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;
