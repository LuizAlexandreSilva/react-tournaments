import React, { useRef } from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

import { Row, Col, Container, Card, InputGroup, Button } from 'react-bootstrap';
import { FormHandles } from '@unform/core';
import FormInput from '../../components/FormInput';
import { Form } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Card>
        <Form ref={formRef} onSubmit={() => { }}>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <FormInput name="username" placeholder="Username" icon={FiUser} />

            <FormInput
              name="password"
              placeholder="Password"
              icon={FiLock}
              type="password"
            />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
