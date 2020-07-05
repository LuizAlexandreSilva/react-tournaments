import React, { useCallback, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';

import {
  Container,
  SearchContainer,
  InputContainer,
  Description,
} from './styles';

const Welcome: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSearch = useCallback(async () => {
    history.push(`/search-tournaments/?${inputRef.current?.value}`);
  }, [history]);

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
                inputRef={inputRef}
                name="search"
                placeholder="Search tournament"
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={handleSearch}>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </InputContainer>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Welcome;
