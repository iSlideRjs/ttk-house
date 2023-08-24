import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import phone from '../icon/phone.svg';

function Footer() {
  return (
    <div className="block2 d-flex justify-content-center align-items-center flex-wrap">
      <Card className="m-2" border="0" style={{ width: '15rem' }}>
        <Card.Header>
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
        <Card.Header>
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
        <Card.Header>
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
      {/* <span className="mb-2">TTK House {new Date().getFullYear()}</span> */}
    </div>
  );
}

export { Footer };
