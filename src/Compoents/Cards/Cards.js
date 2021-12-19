import React from 'react'
import MainImages from '../../Image/MainImg.jpeg'
const Cards = () => {
  return (
    <div className='row m-0 mt-5'>
      <div className='col-6 m-0 img-card p-0'>
        <div>
          <img src={MainImages} alt="a gym" />
          <div className='card'>
            <h2>PERSONAL TRANING</h2>
            <p>You’ll look at graphs and charts in Task One, how to approach the task and
              the language needed for a successful answer.</p>
          </div>
        </div>
      </div>
      <div className="col-6 m-0 img-card p-0" >
        <div>
          <img src={MainImages} alt="a gym" />
          <div className='card'>
            <h2>PERSONAL TRANING</h2>
            <p>You’ll look at graphs and charts in Task One, how to approach the task and
              the language needed for a successful answer.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cards
