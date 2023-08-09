import Card from 'react-bootstrap/Card';

function Body() {
  return (
    <div className="block bg-warning bg-gradient d-flex justify-content-center align-items-center">
      {' '}
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card</Card.Title>
          <Card.Text>Some.</Card.Text>
        </Card.Body>
      </Card>{' '}
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card</Card.Title>
          <Card.Text>Some.</Card.Text>
        </Card.Body>
      </Card>{' '}
    </div>
  );
}

export { Body };
