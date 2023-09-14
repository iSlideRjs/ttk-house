import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import insta from '../icon/insta.svg';
import teleg from '../icon/teleg.svg';
import vk from '../icon/vk.svg';

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
        className={classNames('border-bottom headerMenu', {
          headerMenuLight: theme === 'light',
          headerMenuDark: theme === 'dark',
        })}
      >
        <Offcanvas.Title>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {' '}
            <Nav className="flex-column mb-4">
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
              </a>{' '}
            </Nav>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
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
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export { Sidebar };
