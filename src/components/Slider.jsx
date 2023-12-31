import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className="mt-5 ms-2 me-2 mb-5 picture">
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

export { Slider };
