import React from 'react'
import './skill.css'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function Skillbar() {



  return (
    <>
    <section className="progress-bars2 cid-r1y0Nxk7Tg" id="progress-bars2-20">

    

    

<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
            <h2 className="mbr-section-title pb-2 mbr-bold mbr-fonts-style align-left display-2">Skill Bars</h2>
            <div className="line-wrap">
                <div className="line"></div>
            </div>

            

            <div className="progress_elements">
                <div className="progress1 pb-5">
                    <div className="title-wrap">
                        <div className="progressbar-title mbr-fonts-style display-5">
                            <p>
                                Law
                            </p>
                        </div>
                        <div className="progress_value mbr-fonts-style display-7">
                            <div className="progressbar-number"></div>
                            <span>
                            <Typography variant="body2" color="textSecondary" align="center">
                          43%
                       </Typography>
                            </span>
                        </div>
                    </div>
                    {/* <progress className="progress progress-primary mbr-bold" max="100" value="43">
                    </progress> */}
                      <LinearProgress variant="determinate" value='43' style={{height:'10px'}} />

                </div>

                <div className="progress2 pb-5">
                    <div className="title-wrap">
                        <div className="progressbar-title mbr-fonts-style display-5">
                            <p>
                                Mathematics</p>
                        </div>
                        <div className="progress_value mbr-fonts-style display-7">
                            <div className="progressbar-number"></div>
                            <span>
                            <Typography variant="body2" color="textSecondary" align="center">
                          73%
                       </Typography>
                            </span>
                        </div>
                    </div>
                    {/* <progress className="progress progress-primary" max="100" value="73">
                    </progress> */}
                    <LinearProgress variant="determinate" value='73' style={{height:'10px'}} />

                </div>

                <div className="progress3 pb-5">
                    <div className="title-wrap">
                        <div className="progressbar-title mbr-fonts-style display-5">
                            <p>
                                Physics
                            </p>
                        </div>
                        <div className="progress_value mbr-fonts-style display-7">
                            <div className="progressbar-number"></div>
                            <span>
                            <Typography variant="body2" color="textSecondary" align="center">
                          90%
                       </Typography>
                            </span>
                        </div>
                    </div>
                      <LinearProgress variant="determinate" value='90' style={{height:'10px'}} />
                      
                </div>

                <div className="progress4">
                    <div className="title-wrap">
                        <div className="progressbar-title mbr-fonts-style display-5">
                            <p>
                                Computer Science
                            </p>
                        </div>
                        <div className="progress_value mbr-fonts-style display-7">
                            <div className="progressbar-number"></div>
                            <span>
                            <Typography variant="body2" color="textSecondary" align="center">
                          100%
                       </Typography>
                            </span>
                        </div>
                    </div>
                    {/* <progress className="progress progress-primary" max="100" value="100">
                    </progress> */}
                    <LinearProgress variant="determinate" value='100' style={{height:'10px'}} />

                </div>
            </div>
        </div>
    </div>
</div>
</section>
     
    </>
  )
}

export default Skillbar