import React, { ButtonHTMLAttributes } from 'react';

import Button from 'react-bootstrap/Button';
import { ButtonProps } from 'react-bootstrap';

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    loading?: boolean;
  };

const AppButton: React.FC<AppButtonProps> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <Button type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Button>
  );
};

export default AppButton;
