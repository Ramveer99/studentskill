import React from 'react'
import './area.css'

function Area() {
  return (
    <>
    
    <div className="small-container">
        <h3 className="stakes">Area of student</h3>
        <span className="line-1"></span>
        <div className="main-parent-grid-2 mt-70">
          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/images/sport1.jpeg"}
                style={{height:'66px'}}
                className="circle-1"
              />
              <h2 className="goals">Sport</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/images/singing1.jpeg"}
                className="circle-1"
              />
              <h2 className="goals">Singing</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/images/dancing2.jpeg"}
                style={{height:'66px'}}
                className="circle-1"
              />
              <h2 className="goals">Dancing</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/images/artist.jpeg"}
                className="circle-1"
              />
              <h2 className="goals">Artist</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Area