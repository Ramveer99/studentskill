import React,{useState,useEffect} from 'react'
import './course.css'
import { Card, CardContent,Button, CardMedia, CardActions,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Course() {

    const[containtcard,setContaintcard] = useState([])


    // const cardmaterial={
    //     'data':[
    //     {
    //         image:process.env.PUBLIC_URL + '/images/girl1.jpg',
    //         textheading:'more program'
    //     },
    //     {
    //         image:process.env.PUBLIC_URL + '/images/girl1.jpg',
    //         textheading:'more program'
    //     },
    //     {
    //         image:process.env.PUBLIC_URL + '/images/girl1.jpg',
    //         textheading:'more program'
    //     },
    //     // {
    //     //     image:'/images/girl1.jpg',
    //     //     textheading:'more program'
    //     // },
    //     // {
    //     //     image:'/images/girl1.jpg',
    //     //     textheading:'more program'
    //     // },
    //     // {
    //     //     image:'/images/girl1.jpg',
    //     //     textheading:'more program'
    //     // },
    //     // {
    //     //     image:'/images/girl1.jpg',
    //     //     textheading:'more program'
    //     // },
    // ]
    // }

    const cardmaterial=[
        {
            image:process.env.PUBLIC_URL + '/images/girl1.jpg',
            buttontext:'more program',
            textheading:'Anthropology'
        }, 
        {
            image:process.env.PUBLIC_URL + '/images/math.jpg',
            buttontext:'more program',
            textheading:'Mathematics'
        },
        {
            image:process.env.PUBLIC_URL + '/images/psy.jpg',
            buttontext:'more program',
            textheading:'Psychology'
        },
        {
            image:process.env.PUBLIC_URL + '/images/pro.jpg',
            buttontext:'more program',
            textheading:'Programming'
        },
        {
            image:process.env.PUBLIC_URL + '/images/copy.jpg',
            buttontext:'more program',
            textheading:'Сopywriting'
        },
        {
            image:process.env.PUBLIC_URL + '/images/eco.jpg',
            buttontext:'more program',
            textheading:'Economics'
        },
        {
            image:process.env.PUBLIC_URL + '/images/phy.jpg',
            buttontext:'more program',
            textheading:'Physics'
        }, {
            image:process.env.PUBLIC_URL + '/images/des.jpg',
            buttontext:'more program',
            textheading:'Design'
        }
    ]

    useEffect(() => {
        // Ensure that setContaintcard is called only once
        if (containtcard.length === 0) {
          setContaintcard(cardmaterial);
        }
      }, [containtcard]);



// console.warn("######", cardmaterial)
//  const itemcard=cardmaterial

//  setContaintcard(itemcard)

  return (
    <>
    <div className="main-area">
        <h3 className='textscope'>Featured Programs</h3>
        <div className="card-colum">
    {containtcard && containtcard.map((value ,ind)=>(

    <Card sx={{maxHeight: 260 ,maxWidth: 290}} >
    <div className='link-card1'>  
        <CardMedia
            sx={{ height: 200}}
            image={value.image}    
        />
    </div>
        <Button size='small' variant="contained" className='card1-button'>{value.buttontext}</Button>
        <CardContent>
        <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >
        <h5 className='hstyle'> {value.textheading} </h5>
        </Typography>
      </CardContent>
    </Card>
    ))}
    
    

    {/* <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/math.jpg"}
        />
   
    <CardContent>
       <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >
       Mathematics
        </Typography>
    </CardContent>
    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/psy.jpg"}
        />
   
    <CardContent>
      <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >
      Psychology
        </Typography>
    </CardContent>

    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/pro.jpg"}
        />
 
    <CardContent>
    <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >
    Programming
        </Typography>
    </CardContent>
    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/copy.jpg"}
        />
  
       <CardContent>

       <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >
       Сopywriting
        </Typography>
        </CardContent>

    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/eco.jpg"}
        />
    
       <CardContent>
       <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >  
           Economics
        </Typography>
        </CardContent>

    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/phy.jpg"}
        />
    
        <CardContent>

        <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >  
        Physics
        </Typography>
        </CardContent>

    </Card>

    <Card sx={{maxHeight: 260 ,maxWidth: 290}}>
        <CardMedia
            sx={{ height: 200 }}
            image={process.env.PUBLIC_URL + "/images/des.jpg"}
        />

      <CardContent>
       <Typography variant="body2" style={{ color: 'red',textAlign:'center' }} >  
         Design
        </Typography>
        </CardContent>

    </Card> */}


   </div>

    </div>
    
    </>
  )
}

export default Course