import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="block2 d-flex justify-content-center align-items-center">
      <Card border="warning" style={{ width: '15rem' }}>
        <Card.Header>Связь с нами</Card.Header>
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
