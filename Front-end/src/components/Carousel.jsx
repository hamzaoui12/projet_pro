import React from "react"
import { useState, useEffect } from "react"

const CarouselComponent = (props) => {
  const { images, slideDuration } = props
  const [slide, setSlide] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(images[1])

  useEffect(() => {
    const letSlide = () => {
      if (slide < images.length - 1) {
        setSlide(slide + 1)
      } else {
        setSlide(0)
      }

      setCurrentSlide(images[slide])
    }
    const timer = setTimeout(letSlide, slideDuration)

    return () => clearTimeout(timer)
  }, [slideDuration, images, slide])

  return (
    <div className="relative h-full w-full">
      {images[0] !== undefined ? (
        images.map((image) => {
          return (
            <div
              className={`absolute h-full w-full ${
                currentSlide === image
                  ? "opacity-1 duration-1000"
                  : "opacity-0 duration-1000 ease-in scale-75"
              }`}
              key={image}
            >
              {`${image}`.includes("http")
                ? currentSlide === image && (
                    <img
                      src={`${image}`}
                      alt="{curentSlide}"
                      className="h-full w-full object-cover"
                    />
                  )
                : currentSlide === image && (
                    <img
                      src={`http://localhost:3001/${image}`}
                      alt="{curentSlide}"
                      className="h-full w-full object-cover"
                    />
                  )}
            </div>
          )
        })
      ) : (
        <div />
      )}
    </div>
  )
}

export default CarouselComponent
