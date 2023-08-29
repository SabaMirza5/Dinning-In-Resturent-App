import React from 'react'
import spoon from '../assets/spoon.png';
import welcome from '../assets/welcome.png';


function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="header-main-heading">
              <h5>Chase the new Flavour</h5>
              <img src={spoon} alt="spoon image here" />
              <h2>Reserve Your Table Today</h2>
              <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
              <button className='btn' type='button'>Explore Menu</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-main-img">
              <img src={welcome} alt="welcome image here" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
