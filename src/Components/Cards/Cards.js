import React from 'react'
import MainImages from '../../Image/MainImg.jpeg'
import GroupImage from '../../Image/GroupImage.jpeg'
import "./Card.scss"
const Cards = () => {
  return (
    <div className='row m-0 card-components'>
      <div className='col-xl-6 col-lg-6 m-0 img-card p-0'>
        <img src={MainImages} alt="a gym" />
        <div className='sub-image-card' >
          <div className="sub-image-topic">
            <h3>Personal traning</h3>
            <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
            <a href="#!" className="border-btn">View Courses</a>
          </div>
        </div >
      </div>
      <div className="col-xl-6 col-lg-6 m-0 img-card p-0" >
        <img src={GroupImage} alt="a gym" />
        <div className='sub-image-card'>
          <div className="sub-image-topic">
            <h2>GROUP TRANING</h2>
            <p>You’ll look at graphs and charts in Task One, how to approach the task and
              the language needed for a successful answer.</p>
            <a href="#!" className="border-btn">View Courses</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cards
