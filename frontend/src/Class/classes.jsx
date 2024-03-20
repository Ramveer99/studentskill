import React, { useState, useEffect } from 'react'
import './classes.css'
import { Button } from '@mui/material';
import axios from 'axios'

function Classes() {

  const [dataclass, setDataclass] = useState([])

  useEffect(() => {
    classfun()
  }, [])

  const classfun = async () => {
    try {
      const resp = await axios.get('/getclass')
      console.log("=====>", resp.data.classdt)
      setDataclass(resp.data.classdt)
    }
    catch (errors) {
      console.warn(errors)
    }
  }



  return (
    <>
      <div className="class-main">
        <h3 className='header-track'> Select your track</h3>
        <div className="class-option">
          {dataclass.map((value, index) => (
            <div className="swiper-slide" key={index}>
              <div className="review-box">
                <div className="media">
                  <img
                    className="mr-3"
                    src={value.filename}
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h2>{value.title}</h2>
                  </div>
                </div>
                <p className="read">
                  {value.aboutclass}
                </p>
                <Button variant="text">Read more</Button>
              </div>

            </div>
          ))}


          {/* <div className="swiper-slide">
                    <div className="review-box">
                      <div className="media">
                        <img
                          className="mr-3"
                          src={process.env.PUBLIC_URL + "/images/student10.jpeg"}
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h2>Class 10</h2>
                        </div>
                      </div>
                      <p className="read">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        race.
                      </p>
                      <Button variant="text">Read more</Button>
                    </div>
                  </div>          

                  <div className="swiper-slide">
                    <div className="review-box">
                      <div className="media">
                        <img
                          className="mr-3"
                          src={process.env.PUBLIC_URL + "/images/student11.jpeg"}
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h2>Class 11</h2>
                        </div>
                      </div>
                      <p className="read">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        race.
                      </p>
                      <Button variant="text">Read more</Button>
                    </div>
                  </div>



                  <div className="swiper-slide">
                    <div className="review-box">
                      <div className="media">
                        <img
                          className="mr-3"
                          src={process.env.PUBLIC_URL + "/images/student12.jpeg"}
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h2>Class 12</h2>
                        </div>
                      </div>
                      <p className="read">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        race.
                      </p>
                      <Button variant="text">Read more</Button>
                    </div>
                  </div> */}





        </div>
      </div>
    </>
  );
}

export default Classes