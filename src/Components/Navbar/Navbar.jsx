import React from 'react'
import './Navbar.css'
import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import Logo from '../../assets/Icons/Logo.png'
function Navbar() {
  const location = useLocation();
  const isAboutPage = location.pathname.startsWith('/about');
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const[isOpen, setIsOpen] = useState(false);
  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  };
  return (
   <nav className={`container ${sticky? 'dark-nav': ''} ${isAboutPage ? 'about-nav' : ''}`}>
      <Link to='/'>
      <img src={Logo} alt='logo'/>
      </Link>
    
      <ul className={isOpen? 'nav-link active' : 'nav-link'}>
        <Link to='/about'>
        <li>About</li>
        </Link>
        <Link to='/blogs'>
        <li>Blogs</li>
        </Link>

        <Link to='/contact'>
        <li>Contact</li>
        </Link>

        <Link to='/donation'>
        <button className='button-34' type='button'>Donate Now</button>
        </Link>

      </ul>
      
      <div className="icons">
        <FaBars onClick={toggleMenu}/>
      </div>
    
   </nav>
  )
}

export default Navbar