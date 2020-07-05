import React, { useRef, useCallback } from 'react';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

import { Form } from './styles';
import Modal from '../Modal';
import FormInput from '../FormInput';
import { useToast } from '../../hooks/toast';
import api from '../../services/apiClient';
import getValidationErrors from '../../utils/getValidationErrors';

interface ICreateAccountFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalRegister: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ICreateAccountFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .trim()
            .min(8, 'At least 8 characters')
            .max(16, 'Only 16 characters are allowed')
            .required('Username is required'),
          email: Yup.string()
            .required('E-mail is required')
            .email('Invalid e-mail'),
          password: Yup.string().min(6, 'At least 6 characters'),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Passwords must match',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        setIsOpen();

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login em nosso site!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        setIsOpen();
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro. Tente novamente.',
        });
      }
    },
    [addToast, setIsOpen],
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
          name="confirmPassword"
          placeholder="Confirm password"
          icon={FiLock}
          type="password"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalRegister;
