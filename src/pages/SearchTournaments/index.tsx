import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Row, Col, Container, Card, InputGroup, Button } from 'react-bootstrap';
import Header from '../../components/Header';

import { ClickableCard } from './styles';
import Input from '../../components/Input';
import api from '../../services/apiClient';

interface Tournament {
  id: string;
  name: string;
  owner: {
    username: string;
  };
}

const SearchTournaments: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState('');
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const searchTournaments = useCallback(async () => {
    const response = await api.get('/tournaments', {
      params: {
        name: inputRef.current?.value,
      },
    });
    setTournaments(response.data);
  }, []);

  const handleSelectCard = useCallback((id) => {
    console.log(id);
  }, []);

  const handleSearch = useCallback(async () => {
    if (inputRef.current) {
      setSearchText(inputRef.current.value);
      history.push(`/search-tournaments/?${inputRef.current.value}`);
      return;
    }
    history.push(`/search-tournaments/`);
  }, [history]);

  useEffect(() => {
    if (location.search) {
      const search = location.search as string;
      const text = search.substring(1);
      setSearchText(text);

      if (inputRef.current) {
        inputRef.current.value = text;
      }
    }
    searchTournaments();
  }, [location, searchTournaments]);

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col>
            <h5>Search Tournaments</h5>
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col md={6}>
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
          </Col>
        </Row>
        {searchText && (
          <Row className="mt-3">
            <Col>
              <h6>{`Results for "${searchText}"`}</h6>
            </Col>
          </Row>
        )}
        {tournaments && (
          <Row className="mt-3">
            {tournaments.map((tournament: Tournament) => (
              <Col lg={4} md={6} sm={12} className="mb-2" key={tournament.id}>
                <ClickableCard
                  bg="dark"
                  onClick={() => handleSelectCard(tournament.id)}
                >
                  <Card.Body>
                    <Card.Title>{tournament.name}</Card.Title>
                    <Card.Text>Date</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text>{tournament.owner.username}</Card.Text>
                  </Card.Footer>
                </ClickableCard>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default SearchTournaments;
