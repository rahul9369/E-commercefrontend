import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel className="mt-0" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-full h-52 sm:h-52 md:h-52 lg:h-52 xl:h-52 object-cover"
          src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/666effc3fc7419cd.jpg?q=20"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-52 sm:h-52 md:h-52 lg:h-52 xl:h-52 object-cover"
          src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/421305fb6aa9fb12.jpeg?q=20"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-52 sm:h-52 md:h-52 lg:h-52 xl:h-52 object-cover"
          src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/d9290fb51138d286.png?q=20"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
