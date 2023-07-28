import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="head" bg="warning" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="ms-2 logo" href="#home">
          TTK House
        </Navbar.Brand>
        <Nav className="ms-auto me-2">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#features">Ответы</Nav.Link>
          <Nav.Link href="#pricing">Контакты</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Header };
