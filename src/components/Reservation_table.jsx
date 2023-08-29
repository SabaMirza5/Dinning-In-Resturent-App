import React from "react";
import spoon from "../assets/spoon.png";


function Reservation_table() {
  return (
    <>
      <div className="container ">
        <div className="row reservation-cont">
          <div className="col-md-12 text-center reservation-main-heading">
            <h2>Reservations</h2>
            <img src={spoon} alt="spoon image here" className="about-spoon" />
            <h1>Book A Table</h1>
          </div>
        
        <div className="row">
          <div className="col-md-4">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
              <option selected>1 Person</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
              <option selected>12/09/2023</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
              <option selected>11:00 PM</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-12 reservation-button text-center">
            <button className="btn" type="button">Book Now</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Reservation_table;
