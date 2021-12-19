import React from 'react'
import imgOne from '../../Image/imgOne.jpeg';
import imgThree from '../../Image/imgThree.jpeg';
import imgFive from '../../Image/imgFive.jpeg';
import imgFour from '../../Image/imgFour.jpeg';
import imgTwo from '../../Image/imgTwo.jpeg';
import './main.scss'
import { Carousel } from 'react-bootstrap'
const Main = () => {
  return (
    <div className='carsoul'>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgThree}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgFour}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgFive}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Latest Instruments</h5>
            <p>With Professional Trainers</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Main
