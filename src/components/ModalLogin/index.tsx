import React, { useRef, useCallback } from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import FormInput from '../FormInput';
import Button from '../Button';

interface ICredentials {
  email: string;
  password: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleLogin: (credentials: ICredentials) => void;
}

const ModalLogin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleLogin,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICredentials) => {
      handleLogin(data);
      setIsOpen();
    },
    [handleLogin, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <FormInput name="email" placeholder="E-mail" icon={FiMail} />

        <FormInput
          name="password"
          placeholder="Password"
          icon={FiLock}
          type="password"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );
};

export default ModalLogin;
