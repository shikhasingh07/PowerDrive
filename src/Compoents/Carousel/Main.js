import React from 'react'
import imgOne from '../../Image/imgOne.jpeg';
import imgThree from '../../Image/imgThree.jpeg';
import imgFive from '../../Image/imgFive.jpeg';
import imgFour from '../../Image/imgFour.jpeg';
import imgTwo from '../../Image/imgTwo.jpeg';
import './main.scss'
import { Carousel } from 'react-bootstrap'
const images = [{ Image: imgOne, Title: ["Latest Instruments", "With Professional Trainers"] }, { Image: imgTwo, Title: ["Latest Instruments", "With Professional Trainers"] }]
const Main = () => {
  return (
    <>
      <Carousel variant="dark">
        {images.map((items, _) => {
          return <Carousel.Item key={Math.random()}>
            <img
              className="d-block w-100"
              src={items.Image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{items.Title[0]}</h5>
              <p>{items.Title[1]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
      <div className="carousel-title">
        <h1>Power Drive</h1>
      </div>
    </>
  )
}

export default Main
