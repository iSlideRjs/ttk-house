import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import phone from '../icon/phone.svg';
import insta from '../icon/insta.svg';
import teleg from '../icon/teleg.svg';
import vk from '../icon/vk.svg';
import phone2 from '../icon/phone2.svg';
import mail from '../icon/mail.svg';
import classNames from 'classnames';
import avito from '../icon/avito.png';

function Contacts({ theme }) {
  return (
    <div className="info-block-contactsShadow">
      <div className="info-block-contacts d-flex justify-content-center align-items-center flex-wrap">
        <Card className="m-2" border="0" style={{ width: '15rem' }}>
          <Card.Header className="cardHeader fw-medium">
            <img src={phone} alt="phone" width="25px" height="25px" /> Связь с
            нами
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {' '}
              <Nav className="flex-column">
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
                  <img src={avito} alt="phone" width="20px" height="20px" />{' '}
                  Avito
                </a>
              </Nav>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export { Contacts };
