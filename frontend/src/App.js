// import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbars from './navbar/navbar';
import Home from './Home/home';
import Footer from './Footer/footer'
import Contact from './Contact/contact'
import About from './About/about'
import Loginpage from './Auth/login';
import Singuppage from './Auth/signup';
import axios from 'axios';

function App() {
  axios.defaults.baseURL='http://localhost:5000'
  return (
    <>
    <Router>
    <Navbars />      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/loginuser' element={<Loginpage />} />
        <Route path='/signupuser' element={<Singuppage/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}


export default App;
