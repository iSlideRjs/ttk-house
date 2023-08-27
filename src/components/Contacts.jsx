import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import phone from '../icon/phone.svg';

function Contacts() {
  return (
    <div className="info-block-contacts d-flex justify-content-center align-items-center flex-wrap">
      <Card className="m-2" border="0" style={{ width: '15rem' }}>
        <Card.Header className="cardHeader">
          <img src={phone} alt="phone" width="25px" height="25px" /> Связь с
          нами
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {' '}
            <Nav className="flex-column">
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                VKontakte
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Telegram
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Instagram
              </a>
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-2" border="0" style={{ width: '15rem' }}>
        <Card.Header className="cardHeader">
          <img src={phone} alt="phone" width="25px" height="25px" /> Связь с
          нами
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {' '}
            <Nav className="flex-column">
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                VKontakte
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Telegram
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Instagram
              </a>
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-2" border="0" style={{ width: '15rem' }}>
        <Card.Header className="cardHeader">
          <img src={phone} alt="phone" width="25px" height="25px" /> Связь с
          нами
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {' '}
            <Nav className="flex-column">
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                VKontakte
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Telegram
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com"
              >
                Instagram
              </a>
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export { Contacts };
