import React from 'react'
import GoogleMapReact from 'google-map-react';
import './Footer.scss'
const Footer = () => {
  const mapStyles = {
    Location: {
      lat: 28.4089,
      lng: 77.3178
    },
    Zoom: 10
  };
  return (
    <div className='row footer mt-2 m-0 '>
      <div className='col-4'>
        <a href='!#'>Power Drive</a>
        <p className='mt-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className='col-4 footer_link  p-0'>
        <span><a href='!#'>Power Drive</a></span>
        <span><a href='!#'>Power Drive</a></span>
        <span><a href='https://api.whatsapp.com/send/?phone=%2B919205527800&text=Hi%21+I+What%27s+Up%3F&app_absent=0'>Power Drive</a></span>
      </div>
      <div className='col-4'></div>
    </div>
  )
}

export default Footer
