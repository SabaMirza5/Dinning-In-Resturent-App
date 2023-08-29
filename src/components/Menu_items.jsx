import React from 'react'
import spoon from "../assets/spoon.png";
import menu from "../assets/menu.png";


function Menu_items() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center menu-main-heading">
            <h2>Menu that fits you palatte</h2>
            <img src={spoon} alt="spoon image here" className="about-spoon" />
            <h1>Today’s Special	</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="wine-bear-sec-main-heading">
              <h2>Wine & Beer</h2>
            </div>
            <div className="main">
              <div className="menu-items-heading">
                <h5>Catena Malbec</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>AR | Bottle</p>
          </div>
          {/* 2 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Chapel Hill Shi</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>AR | 750ml</p>
          </div>
          {/* 3 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Catena Malbec</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>AR | Bottle</p>
          </div>
          {/* 4 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>La Vieille Rosé</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>FR | 750 ml</p>
          </div>
          {/* 5 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Rhino Pale Ale</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>IE | Bottle</p>
          </div>
          </div>


          <div className="col-md-4">
            <div className="menu-img">
              <img src={menu} alt="menu-image here" className='img-fluid' />
            </div>
          </div>

          <div className="col-md-4">
            <div className="wine-bear-sec-main-heading">
              <h2>Cocktails</h2>
            </div>
            <div className="main">
              <div className="menu-items-heading">
                <h5>Aperool Spiritz</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
          </div>
          {/* 2 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Dark 'N' Stormy</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>Dark rum | Ginger beer | Slice of lime.</p>
          </div>
          {/* 3 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Daiquiri 'S' Pale</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>Rum | Citrus juice | Sugar</p>
          </div>
          {/* 4 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Old Fashioned L</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>Bourbon | Brown sugar | Angostura Bitters</p>
          </div>
          {/* 5 */}
          <div className="main">
              <div className="menu-items-heading">
                <h5>Negroni Spiritz</h5>
                <div className="menu-items-heading-hr"></div>
                <p>$59</p>
              </div>
              <p className='price-menu-p'>Gin | Sweet Vermouth | Campari | garnish</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu_items
