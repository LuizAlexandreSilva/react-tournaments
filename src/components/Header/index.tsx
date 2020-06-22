import React, { useCallback } from 'react';

import {
  Container,
  HeaderTitle,
  HeaderLogo,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
} from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const goToSignUp = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <HeaderContent>
        <HeaderLeft>
          <HeaderLogo src={logo} alt="TFT Tournaments" />
          <HeaderTitle>TFT Tournaments</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <span>Do you want to create a tournament?</span>
          <a href="">Login</a>
          <span>or</span>
          <a href="">Register</a>
        </HeaderRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
