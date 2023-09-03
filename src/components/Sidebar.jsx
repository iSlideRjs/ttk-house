import Offcanvas from 'react-bootstrap/Offcanvas';
import phone from '../icon/phone.svg';

function Sidebar({ changeTheme, theme, show, handleClose, handleTouchMove }) {
  return (
    <Offcanvas
      placement="bottom"
      className="rounded-top-4"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header
        onTouchMove={handleTouchMove}
        className="border-bottom headerMenu"
      >
        <Offcanvas.Title>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="mt-3">
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
  );
}

export { Sidebar };
