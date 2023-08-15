import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import house from '../icon/house.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import sidebar from '../icon/sidebar.svg';
import phone from '../icon/phone.svg';

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
          <img
            className="me-1"
            src={phone}
            alt="phone"
            width="25px"
            height="25px"
          />
          <span style={{ color: 'black' }} className="me-2">
            Контакты
          </span>
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
          placement="bottom"
          className="rounded-top-4"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header className="border-bottom" closeButton>
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
            <br /> <br />
            <img
              className="me-2"
              src={phone}
              alt="phone"
              width="25px"
              height="25px"
            />
            <span className="">Контакты</span>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export { Header };
