import React from "react";
import spoon from "../assets/spoon.png";

function Our_newslatter() {
  return (
    <>
      <div className="container ">
        <div className="row reservation-cont">
          <div className="col-md-12 text-center reservation-main-heading">
            <h2>Newsletter</h2>
            <img src={spoon} alt="spoon image here" className="about-spoon" />
            <h1>Subscribe to Our Newsletter</h1>
            <p className="newsletter-pera">And never miss latest Updates!</p>
          </div>

          <div className="row news-letter-sec">
            <div className="col-md-1"></div>
            <div className="col-md-8 pe-0">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="reservation-button newsletter-button">
              <button className="btn" type="button">
              Subscribe
                </button>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Our_newslatter;
