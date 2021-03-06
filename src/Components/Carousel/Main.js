import React from 'react'
import imgOne from '../../Image/imgOne.jpeg';
import imgThree from '../../Image/imgThree.jpeg';
import imgFive from '../../Image/imgFive.jpeg';
import imgFour from '../../Image/imgFour.jpeg';
import imgTwo from '../../Image/imgTwo.jpeg';
import './main.scss'
import { Carousel } from 'react-bootstrap'
const images = [imgOne, imgTwo, imgThree, imgFour, imgFive]
const Main = () => {
  return (
    <div className='row m-0 '>
      <div className='col-md-6 col-12 m-0 p-0'>
        <div className="carousel-title text-uppercase ps-4">
          <h1>Power Drive</h1>
          <h2 className='mt-3'>With Us we Provide Professional Trainer and Clean Equipments</h2>
          <h2 className='mt-3'>With Us we Provide Professional Trainer and Clean Equipments</h2>
          <button className='btn'>
            For More</button>
        </div>
      </div>
      <div className='col-md-6 col-12  m-0 p-0'>
        <Carousel variant="dark">
          {images.map((items, _) => {
            return <Carousel.Item key={Math.random()}>
              <img
                className="d-block w-100"
                src={items}
                alt="First slide"
              />
            </Carousel.Item>
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Main
