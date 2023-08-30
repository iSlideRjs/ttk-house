import Card from 'react-bootstrap/Card';

function Body() {
  return (
    <div className="info-blockShadow">
      <div className="info-block bg-warning bg-gradient d-flex justify-content-center align-content-center flex-wrap">
        {' '}
        <Card className="m-2" style={{ width: '16rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Что-то</Card.Title>
            <Card.Text>Когда-то</Card.Text>
          </Card.Body>
        </Card>{' '}
        <Card className="m-2" style={{ width: '16rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Что-то</Card.Title>
            <Card.Text>Когда-то</Card.Text>
          </Card.Body>
        </Card>{' '}
        <Card className="m-2" style={{ width: '16rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Что-то</Card.Title>
            <Card.Text>Когда-то</Card.Text>
          </Card.Body>
        </Card>{' '}
      </div>
    </div>
  );
}

export { Body };
