import React, { useRef, useCallback } from 'react';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import FormInput from '../FormInput';
import Button from '../Button';

interface ICreateAccountFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRegister: (credentials: ICreateAccountFormData) => void;
}

const ModalRegister: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleRegister,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateAccountFormData) => {
      handleRegister(data);
      setIsOpen();
    },
    [handleRegister, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Register</h1>

        <FormInput name="username" placeholder="Username" icon={FiUser} />

        <FormInput name="email" placeholder="E-mail" icon={FiMail} />

        <FormInput
          name="password"
          placeholder="Password"
          icon={FiLock}
          type="password"
        />
        <FormInput
          name="confirm_password"
          placeholder="Confirm password"
          icon={FiLock}
          type="password"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );
};

export default ModalRegister;
