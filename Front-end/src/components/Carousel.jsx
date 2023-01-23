import React from "react"
import "../style/Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const CarouselComponent = (props) => {
  const { images } = props
  return  (
    <div class="carousel">
      <Carousel useKeyboardArrows={true}>
      {images.map((image, index) => (
        <img alt="carouselImage" src={image} key={index}/>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent;