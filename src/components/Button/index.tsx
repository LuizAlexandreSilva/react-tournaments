import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  width,
  ...rest
}) => {
  return (
    <Container width={width} type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
