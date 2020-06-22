import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  width?: string;
}

export const Container = styled.button<ContainerProps>`
  background: var(--primary);
  height: 50px;
  width: 120px;
  border-radius: 10px;
  padding: 0 16px;
  color: var(--background);
  /* width: ${(props) => (props.width ? props.width : 'auto')}; */
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
