import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="warning" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">TTK House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#features">Что я?</Nav.Link>
          <Nav.Link href="#pricing">Контакты</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
  // return <div className="head">TTK House</div>;
}

export { Header };
