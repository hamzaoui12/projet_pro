import React from "react"
import "../style/Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const CarouselComponent = (props) => {
  const { images } = props
  return (
    <div class="carousel">
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        showStatus={false}
        autoplay
        transitionTime="500"
        interval="2000"
      >
        {images.map((image, index) => (
          <img
            class="carouselImage"
            alt="carouselImage"
            src={image}
            key={index}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent;
