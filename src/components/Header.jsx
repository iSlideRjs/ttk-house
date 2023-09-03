import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import house from '../icon/house.svg';
import sidebar from '../icon/sidebar.svg';
import phone from '../icon/phone.svg';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';

function Header({ changeTheme, theme }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTouchMove = (event) => {
    const { clientY } = event.touches[0];
    const screenHeight = window.innerHeight;

    if (clientY > screenHeight * 0.8) {
      handleClose();
    }
  };
  return (
    <div className="headShadow">
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
            <span style={{ color: 'black' }} className="me-3">
              Контакты
            </span>
            <label id="switch" className="switch me-1">
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
          <Sidebar
            theme={theme}
            changeTheme={changeTheme}
            show={show}
            handleClose={handleClose}
            handleTouchMove={handleTouchMove}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export { Header };
