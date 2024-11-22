import { BrowserRouter as Router,Route, Routes, Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import GitHub from './components/GitHub';
import Footer from './components/Footer';

function App() {
 

  return (
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>
    //   <Route path='/contact' element={<Contact/>}/>
    //   <Route path='/github' element={<GitHub/>}/>
      
    //   </Routes>
    //   <Footer/>
    // </Router>
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App