import React from 'react'
import laurels from '../assets/laurels.png'
import spoon from "../assets/spoon.png";
import award01 from "../assets/award01.png";
import award02 from "../assets/award02.png";
import award03 from "../assets/award03.png";
import award05 from "../assets/award05.png";



function Our_laurels() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-8">
          <div className="laurels-sec">
            <h2>Awards & recognition</h2>
            <img src={spoon} alt="spoon image here" className="about-spoon" />
            <h1>Our Laurels</h1>
          </div>
          <div className="row mt-5 mt-md-0">
            {/* 1st div */}
            <div className="col-md-6 laurels-main-div">
              <div className="laurels-img-div">
                <img src={award01} alt=""  width="79" height="79"/>
              </div>
              <div className="laurels-text-div">
                <h2>Bib Gourmond</h2>
                <p>Lorem ipsum dolor sit<br/>amet, consectetur.</p>
              </div>
            </div>
            {/* 2nd div */}
            <div className="col-md-6 laurels-main-div">
              <div className="laurels-img-div">
              <img src={award02} alt=""  width="79" height="79"/>
              </div>
              <div className="laurels-text-div">
                <h2>Rising Star</h2>
                <p>Lorem ipsum dolor sit<br/>amet, consectetur.</p>
              </div>
            </div>

{/* 3rd div */}
            <div className="col-md-6 laurels-main-div mt-5 mt-md-3">
              <div className="laurels-img-div">
              <img src={award03} alt=""  width="79" height="79"/>
              </div>
              <div className="laurels-text-div">
                <h2>AA Hospitality </h2>
                <p>Lorem ipsum dolor sit<br/>amet, consectetur.</p>
              </div>
            </div>
            {/* 4 th div */}
            <div className="col-md-6 laurels-main-div mt-5 mt-md-3">
              <div className="laurels-img-div">
              <img src={award05} alt="award image here"  width="79" height="79"/>
              </div>
              <div className="laurels-text-div">
                <h2>Outstanding Chef</h2>
                <p>Lorem ipsum dolor sit<br/>amet, consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="laurels-img">
            <img src={laurels} alt="laurels-image-here" width="555" height="691" className='img-fluid'/>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Our_laurels
