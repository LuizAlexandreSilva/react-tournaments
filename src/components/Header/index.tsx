import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  Container,
  HeaderTitle,
  HeaderLogo,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  TextButton,
  Username,
} from './styles';
import logo from '../../assets/logo.svg';
import ModalLogin from '../ModalLogin';
import ModalRegister from '../ModalRegister';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const [modalLoginIsOpen, setLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setRegisterIsOpen] = useState(false);

  const history = useHistory();
  const { user, signOut } = useAuth();

  const toggleLoginModal = useCallback(() => {
    setLoginIsOpen(!modalLoginIsOpen);
  }, [modalLoginIsOpen]);

  const toggleRegisterModal = useCallback(() => {
    setRegisterIsOpen(!modalRegisterIsOpen);
  }, [modalRegisterIsOpen]);

  const handleLogout = useCallback(() => {
    signOut();

    history.push('/');
  }, [signOut, history]);

  return (
    <Container>
      <ModalLogin isOpen={modalLoginIsOpen} setIsOpen={toggleLoginModal} />
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
          {user ? (
            <>
              <Username>{user.username}</Username>
              <TextButton onClick={handleLogout}>Logout</TextButton>
            </>
          ) : (
              <>
                <span>Do you want to create a tournament?</span>
                <TextButton onClick={toggleLoginModal}>Login</TextButton>
                <span>or</span>
                <TextButton onClick={toggleRegisterModal}>Register</TextButton>
              </>
            )}
        </HeaderRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
