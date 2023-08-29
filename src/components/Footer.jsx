import React from "react";
import footerlogo from "../assets/footerlogo.png";
import spoon from "../assets/spoon.png";
import { FaAngleDown, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
// import { BsTwitter} from "react-icons/fa";
// import { FiInstagram} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row main-footer">
          <div className="col-md-4 text-center">
            <div className="contact-heading">
              <h2>Contact</h2>
              <h6>9 W 53rd St, New York, NY 10019, USA</h6>
              <p>+1 212-344-1230</p>
              <p>1 212-555-1230</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="logo-section">
              <div className="footer-logo-img">
              <img src={footerlogo} alt="footer-logo" />
              </div>
              <h2>
                “The best way to find yourself is to lose yourself in the
                service of others.”
              </h2>
              <img src={spoon} alt="spoon image here" className="about-spoon" />
              <p className="pt-4">
              <span className="pe-4"><FaFacebook size = '35px' color="#aaa"/></span>
              <span className="pe-4"><FaTwitter size = '35px' color="#aaa"/></span>
              <span className="pe-4"><FaInstagram size = '35px' color="#aaa"/></span> 
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
          <div className="contact-heading">
              <h2>Working Hours</h2>
              <h6>Monday-Friday:</h6>
              <p>08:00 am -12:00 am</p>
              <h6>Saturday-Sunday:</h6>
              <p>07:00am -11:00 pm</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="bottom-footer">
              <h5>© 2021 Geritcht. All Rights Reserved.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
