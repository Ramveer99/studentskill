import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Navbar,Nav,Container,Dropdown, DropdownToggle } from 'react-bootstrap'
import './navbar.css'

function Navbars() {
    const navigate=useNavigate()
    console.warn("navigate @@@",navigate)
 
  // const loginhandle= () =>
  // {
  //   // alert('login sucess........')
  //   navigate('/loginuser')
  // }
  


  return (
    <>
    <div className='nav-main' style={{backgroundColor:"ivory"}}>
    <Navbar className='nav-items'>
        <Container height={33}>
        <div className='nav-content'>
          <Navbar.Brand href="/"><img  className="logo-styles" src={process.env.PUBLIC_URL + '/images/slogo3.png'}/></Navbar.Brand>
          <Nav className="nav-item">
            <Link to="/">Home</Link>
            <Link to='/contact'>Contact US</Link>
            <Link to="/about">About</Link>
          </Nav>
          </div>
        </Container>
        
            <Dropdown style={{color:'white', marginRight:'40px'}}>
                    <Dropdown.Toggle style={{backgroundColor:'blueviolet'}} >
                    &#9776;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to='/signupuser'> 
                      Signup
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/loginuser">
                     Login
                      </Dropdown.Item>
                    </Dropdown.Menu>
           </Dropdown>



      </Navbar>

      </div>
    
    </>
  )
}

export default Navbars