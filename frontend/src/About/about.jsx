import axios from 'axios'
import React,{useEffect, useState} from 'react'
import './about.css'

function About() 
{
  const[aboutcontaint,setaboutcontaint]=useState([])

  useEffect(()=>{
    aboutdata()
  },[])

  const aboutdata=async()=>
  {
    try
    {
      const resp=await axios.get("/aboutus")
      setaboutcontaint(resp.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }


  return (
    <>
    <div className='heading-title'><h3>{aboutcontaint.title}</h3></div>
    <div className='page-containt'><p>{aboutcontaint.aboutuser}</p></div>
    </>
  )
}

export default About