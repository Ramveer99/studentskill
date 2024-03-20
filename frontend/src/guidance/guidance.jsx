import React from 'react'
import './guide.css'

function guidance() {
  return (
    <>
       <div className="motivation-heading">
        <h3 >motivational speakers</h3>
       </div>

       <div>
   
       <div className="cards-list">
  
  <div className="card 1">
    <div className="card_image"> <img src={process.env.PUBLIC_URL + "/images/Sandeep.png"} /> </div>
    <div className="card_title title-white">
      <p>Sandeep Maheshwari</p>
    </div>
  </div>
  
    <div className="card 2">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + "/images/vivek.png"} />
      </div>
    <div className="card_title title-white">
      <p>Vivek Bindra</p>
    </div>
  </div>
  
  <div className="card 3">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/priya.png'} />
    </div>
    <div className="card_title">
      <p style={{color:'white'}}>Priya Kumari</p>
    </div>
  </div>
    
    <div className="card 4">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/shiv.png'} />
      </div>
    <div className="card_title title-black">
      <p style={{color:'white'}}>Shiv Khera</p>
    </div>
    </div>

    <div className="card 5">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/ujjwal.jpg'} />
      </div>
    <div className="card_title title-black">
      <p style={{color:'white'}}> Ujjwal Patni</p>
    </div>
    </div>


    <div className="card 6">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/sonu.png'} />
      </div>
    <div className="card_title title-black">
      <p style={{color:'white'}}> Sonu Sharma</p>
    </div>
    </div>

    <div className="card 7">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/samir.png'} />
      </div>
    <div className="card_title title-black">
      <p style={{color:'white'}}> Simerjeet Singh</p>
    </div>
    </div>

    <div className="card 8">
    <div className="card_image">
      <img src={process.env.PUBLIC_URL + '/images/ts.png'} />
      </div>
    <div className="card_title title-black">
      <p style={{color:'white'}}> T S Madaan</p>
    </div>
    </div>

  
  </div>
       </div>
    </>
  )
}

export default guidance