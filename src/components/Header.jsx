import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import house from '../icon/house.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import sidebar from '../icon/sidebar.svg';

function Header({ changeTheme, theme }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className="head bg-warning bg-gradient">
      <Container>
        <Navbar.Brand className="ms-2 logo d-flex" href="#home">
          <img alt="TTK House" src={house} width="50px" height="50px" />{' '}
          <span className="ms-2 logoText">TTK House</span>
        </Navbar.Brand>
        <Nav className="ms-auto me-1 nav-header">
          <Nav.Link href="#home"></Nav.Link>{' '}
          <label id="switch" className="switch">
            <input
              type="checkbox"
              onChange={changeTheme}
              id="slider"
              checked={theme === 'light'}
            />
            <span class="slider round"></span>
          </label>
        </Nav>
        <img
          alt="sidebar"
          src={sidebar}
          width="40"
          height="40"
          onClick={handleShow}
          className="me-1 sidebar"
        />
        <Offcanvas
          data-bs-theme={theme}
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Смена темы:{' '}
            <label id="switch" className="switch">
              <input
                type="checkbox"
                onChange={changeTheme}
                id="slider"
                checked={theme === 'light'}
              />
              <span class="slider round"></span>
            </label>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export { Header };
