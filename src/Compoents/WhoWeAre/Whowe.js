import React from 'react'
import Mainimg from '../../Image/MainImg.jpeg';
import './index.scss'
const Whowe = () => {
  return (
    <div className='imgesWith d-flex align-items-center'>
      < div className='col-6 m-0 p-0 ' >
        <div className="card m-auto " >
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div >
      <div className='col-6  m-0 p-0'>
        <img src={Mainimg} alt="A pictures" />
      </div>
    </div >
  )
}

export default Whowe
