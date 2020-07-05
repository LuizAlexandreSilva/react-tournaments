import React from 'react';
import { MdSearch } from 'react-icons/md';

import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Header from '../../components/Header';
import Input from '../../components/Input';

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
            <InputGroup>
              <Input
                name="search"
                placeholder="Search tournament"
                icon={MdSearch}
              />
              <InputGroup.Append>
                <Button variant="primary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </InputContainer>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Welcome;
