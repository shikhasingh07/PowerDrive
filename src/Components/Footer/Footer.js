import React from 'react'
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { IoMdCall } from "react-icons/io"
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
        <h2 className="footer-heading"><a href="!#" className="logo">Power Drive</a></h2>
        <p className='mt-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className='col-4 footer_link  p-0'>
        <div className='col-3'> <a href='https://api.whatsapp.com/send/?phone=%2B919205527800&text=Hi%21+I+What%27s+Up%3F&app_absent=0'><IoLogoInstagram /></a></div>
        <div className='col-3'> <a href='https://api.whatsapp.com/send/?phone=%2B919205527800&text=Hi%21+I+What%27s+Up%3F&app_absent=0'><IoMdCall /></a></div>
        <div className='col-3'>  <a className='col-4' href='https://api.whatsapp.com/send/?phone=%2B919205527800&text=Hi%21+I+What%27s+Up%3F&app_absent=0'><IoLogoWhatsapp /></a></div>
      </div>
      <div className='col-4'></div>
    </div >
  )
}

export default Footer
