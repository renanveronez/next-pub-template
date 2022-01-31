import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles'


export function CarouselBanner() {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={1500}
        interval={5000}
        showStatus={false}
      >
        <div className="containerCarousel">
          <img alt="" src="https://i.imgur.com/A7QsoVz.jpg" />
        </div>
        <div className="containerCarousel">
          <img alt="" src="https://i.imgur.com/BDZgE6i.jpg" />
        </div>
        <div className="containerCarousel">
          <img alt="" src="https://i.imgur.com/Mc2BiSn.jpg" />
        </div>
      </Carousel>

    </Container>
  )
}
