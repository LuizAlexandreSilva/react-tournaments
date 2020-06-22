import React from 'react';
import { MdSearch } from 'react-icons/md';
import Header from '../../components/Header';

import {
  Container,
  SearchContainer,
  InputContainer,
  Description,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Welcome: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Description>
          Create Teamfight Tactics tournaments and let us generate brackets for
          you
        </Description>

        <SearchContainer>
          <span>Looking for a tournament?</span>
          <InputContainer>
            <Input
              containerStyle={{ marginRight: 10 }}
              name="buscar-torneio"
              placeholder="Search tournament"
              icon={MdSearch}
            />
            <Button>Search</Button>
          </InputContainer>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Welcome;
