import React from 'react'
// import videofile from '../../public/video/student.mp4'
import './videopage.css'


function videopage() {
  return (
    <div className='video-item'>
    <div className='main-video'>
        <video src={process.env.PUBLIC_URL + '/video/student.mp4'}  autoPlay loop  muted/>
        {/* onClick={(event) => event.target.paused ? event.target.play() : event.target.pause()} */}

    </div>
    </div>
  )
}

export default videopage