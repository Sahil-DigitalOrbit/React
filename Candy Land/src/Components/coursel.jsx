import Carousel from "react-bootstrap/Carousel";

// import ExampleCarouselImage from 'components/Example CarouselImage';
export default function Coursel() {
  return (
    <Carousel className="homepage-advertise-section" data-bs-theme="dark">
      <Carousel.Item interval={3300}>
        <img
          className="d-block w-100"
          src="https://cdn.vectorstock.com/i/500p/37/89/ten-percent-off-sale-special-offer-banner-design-vector-42533789.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={3300}>
        <img
          className="d-block w-100"
          src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3300}>
        <img
          className="d-block w-100"
          src="https://www.safeguardstorage.co.nz/wp-content/uploads/2024/03/Copy-of-Copy-of-ContainerCo-Images-1-1080x630.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
