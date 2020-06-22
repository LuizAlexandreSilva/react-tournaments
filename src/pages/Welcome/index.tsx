import React from 'react';
import { MdSearch } from 'react-icons/md';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  SearchContainer,
  InputContainer,
  Description,
} from './styles';

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
              name="search"
              containerStyle={{ marginRight: 10 }}
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
