import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import insta from '../icon/insta.svg';
import teleg from '../icon/teleg.svg';
import vk from '../icon/vk.svg';
import phone2 from '../icon/phone2.svg';
import mail from '../icon/mail.svg';
import avito from '../icon/avito.png';

function Sidebar({ changeTheme, theme, show, handleClose, handleTouchMove }) {
  return (
    <Offcanvas
      placement="bottom"
      className="rounded-top-4 offcanvasStyle"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header
        onTouchMove={handleTouchMove}
        className={classNames(' headerMenu', {
          headerMenuLight: theme === 'light',
          headerMenuDark: theme === 'dark',
        })}
      >
        <Offcanvas.Title>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="border-top d-flex justify-content-between">
            {' '}
            <Nav className="mb-3 mt-2">
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                <img src={vk} alt="phone" width="20px" height="20px" />{' '}
                VKontakte
              </a>
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                <img src={teleg} alt="phone" width="20px" height="20px" />{' '}
                Telegram
              </a>
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                <img src={insta} alt="phone" width="20px" height="20px" />{' '}
                Instagram
              </a>
            </Nav>
            <Nav className="mb-3 mt-2">
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+79510827471"
              >
                <img src={phone2} alt="phone" width="20px" height="20px" />{' '}
                +7-951-082-74-71
              </a>
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:ttk@ttk.ru"
              >
                <img src={mail} alt="phone" width="20px" height="20px" />{' '}
                ttk@ttk.ru
              </a>
              <a
                className={classNames('social', {
                  'social-light': theme === 'light',
                  'social-dark': theme === 'dark',
                })}
                target="_blank"
                rel="noopener noreferrer"
                href="https://avito.ru"
              >
                <img src={avito} alt="phone" width="20px" height="20px" /> Avito
              </a>{' '}
            </Nav>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="mt-3 d-flex align-items-center justify-content-center">
            {' '}
            Cмена темы
            <label id="switch" className="switch ms-2">
              <input
                type="checkbox"
                onChange={changeTheme}
                id="slider"
                checked={theme === 'light'}
              />
              <span class="slider round"></span>
            </label>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export { Sidebar };
