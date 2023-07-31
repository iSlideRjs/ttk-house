import Carousel from 'react-bootstrap/Carousel';

function Body() {
  return (
    <Carousel className="mt-4 ms-2 me-2">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export { Body };
