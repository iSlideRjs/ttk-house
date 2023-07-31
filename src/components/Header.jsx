import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header({ changeTheme, theme }) {
  return (
    <Navbar className="head bg-warning bg-gradient">
      <Container>
        <Navbar.Brand className="ms-2 logo" href="#home">
          TTK House
        </Navbar.Brand>
        <Nav className="ms-auto me-2 nav-header">
          <Nav.Link href="#home">Главная</Nav.Link>{' '}
        </Nav>
        {/* <Button variant={theme} onClick={changeTheme}>
            {theme}
          </Button> */}
        <DropdownButton
          className="mode"
          variant={theme}
          id="dropdown-basic-button"
          title="T"
        >
          <Dropdown.Item onClick={changeTheme} href="#/action-1">
            Dark
          </Dropdown.Item>
          <Dropdown.Item onClick={changeTheme} href="#/action-2">
            Light
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
}

export { Header };
