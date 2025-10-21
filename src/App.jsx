import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import react from 'react'
import Secondary_header from '../src/Components/Secondary_header/Secondary_header'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Footer/Footer'

import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Blogs from '../src/Pages/Blogs/Blogs'
import Contact from '../src/Pages/Contact/Contact'
import Donation from '../src/Pages/Donation/Donation'
import Privacy from '../src/Pages/Privacy/Privacy'
import Terms from '../src/Pages/Terms/Terms'



function App() {



  return (
  <div className="App">
    
    <Router>
      <div className="App">
        
        <div className="nav2">
          <Secondary_header />
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  </div>
  )
}

export default App
