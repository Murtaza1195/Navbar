import React from 'react'
import './index.css'
import {Routes,Route} from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import Blog from '../src/Pages/Blog'
import Services from '../src/Pages/Services'
import Contact from '../src/Pages/Contact'
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import { slideData } from './Slidedata';


const App = () => {

  return(
    <>
    {/* But yahan to prop bheja hi nahi, to get kesay kr rahay, values get ho hi nahi rahi */}
    
    <Topbar/>
    <Navbar/>
    <Routes>
    <Route  path = '/'   element= {<Home />}/>
    <Route  path = '/home'   element= {<Home />}/> 
    <Route path = '/about'   element= {<About />}/>
    <Route path = '/Blog'   element= {<Blog />}/>
    <Route path = '/Services'   element= {<Services />}/>
    <Route path = '/Contact'   element= {<Contact />}/>
  </Routes>
  </>

  );
  
}

export default App
