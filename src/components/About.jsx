import React from 'react'
import spoon from '../assets/spoon.png';
import knife from '../assets/knife.png';

function About() {
  return (
    <>
      <div className="container">
        <div className="row about-section-bg" id='about'>
          <div className="col-md-5">
            <div className="about-sec">
              <h2>About Us</h2>
              <img src={spoon} alt="spoon image here" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero, in asperiores eos reprehenderit vitae aperiam debitis voluptas, corporis veritatis commodi tempora sed molestias dolores distinctio quaerat totam similique ipsum!</p>
              <button className='btn' type='button'>Know More</button>
            </div>
          </div>
          <div className="col-md-1">
            <div className="knife-sec">
              <img src={knife} alt="knife image here"/>
            </div>
          </div>
          <div className="col-md-5">
          <div className="history-sec about-sec">
              <h2>Our History</h2>
              <img src={spoon} alt="spoon image here" className='about-spoon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero, in asperiores eos reprehenderit vitae aperiam debitis voluptas, corporis veritatis commodi tempora sed molestias dolores distinctio quaerat totam similique ipsum!</p>
              <button className='btn' type='button'>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
