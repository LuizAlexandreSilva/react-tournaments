import React, { useCallback, useState } from 'react';

import {
  Container,
  HeaderTitle,
  HeaderLogo,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  TextButton,
} from './styles';
import logo from '../../assets/logo.svg';
import ModalLogin from '../ModalLogin';
import ModalRegister from '../ModalRegister';

interface ICredentials {
  email: string;
  password: string;
}

interface ICreateAccountFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Header: React.FC = () => {
  const [modalLoginIsOpen, setLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setRegisterIsOpen] = useState(false);

  const toggleLoginModal = useCallback(() => {
    setLoginIsOpen(!modalLoginIsOpen);
  }, [modalLoginIsOpen]);

  const toggleRegisterModal = useCallback(() => {
    setRegisterIsOpen(!modalRegisterIsOpen);
  }, [modalRegisterIsOpen]);

  const handleLogin = useCallback((data: ICredentials) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <ModalLogin
        isOpen={modalLoginIsOpen}
        setIsOpen={toggleLoginModal}
        handleLogin={handleLogin}
      />
      <ModalRegister
        isOpen={modalRegisterIsOpen}
        setIsOpen={toggleRegisterModal}
      />
      <HeaderContent>
        <HeaderLeft>
          <HeaderLogo src={logo} alt="TFT Tournaments" />
          <HeaderTitle>TFT Tournaments</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <span>Do you want to create a tournament?</span>
          <TextButton onClick={toggleLoginModal}>Login</TextButton>
          <span>or</span>
          <TextButton onClick={toggleRegisterModal}>Register</TextButton>
        </HeaderRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
