import React from "react"
import { useState, useEffect } from "react"

const CarouselComponent = (props) => {
  const { images, slideDuration } = props
  const [slide, setSlide] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(images[1])
  const name = () => {
    if (slide < images.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(0)
    }

    setCurrentSlide(images[slide])
  }
  
  useEffect(() => {
    const timer = setTimeout(name, slideDuration)

    
return () => clearTimeout(timer)
  })

  return(
    <div className="relative h-full w-full">
      {images.map((image) => {
        return (
          <div
            className={`absolute h-full w-full ${
              currentSlide === image
                ? "opacity-1 duration-1000"
                : "opacity-0 duration-1000 ease-in scale-75"
            }`}
            key={image}
          >
            {currentSlide === image && (
              <img
                src={image}
                alt="{curentSlide}"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CarouselComponent
