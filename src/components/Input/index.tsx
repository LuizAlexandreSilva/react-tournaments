import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { ContainerInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: any;
  inputRef?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  inputRef,
  containerStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <ContainerInput
      ref={inputRef}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      isFocused={isFocused}
      {...rest}
    />
  );
};

export default Input;
