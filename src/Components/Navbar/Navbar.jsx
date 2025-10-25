import React from 'react'
import './Navbar.css'
import {useState, useEffect, useRef} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import Logo from '../../assets/Icons/Logo.png'
function Navbar() {
  const location = useLocation();
  const isAboutPage = location.pathname.startsWith('/about');
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  };
  return (
   <>
   <nav className={`container ${sticky? 'dark-nav': ''} ${isAboutPage ? 'about-nav' : ''}`}>
      <Link to='/'>
      <img src={Logo} alt='logo'/>
      </Link>
    
      <ul ref={menuRef} className={isOpen? 'nav-link active' : 'nav-link'} onClick={(e) => {
        // Close menu when clicking on empty space within the menu
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}>
        <Link to='/about' onClick={() => setIsOpen(false)}>
        <li>About</li>
        </Link>
        <Link to='/blogs' onClick={() => setIsOpen(false)}>
        <li>Blogs</li>
        </Link>

        <Link to='/contact' onClick={() => setIsOpen(false)}>
        <li>Contact</li>
        </Link>

        <Link to='/donation' onClick={() => setIsOpen(false)}>
        <button className='button-34' type='button'>Donate Now</button>
        </Link>

      </ul>
      
      <div className="icons">
        <FaBars onClick={toggleMenu}/>
      </div>
    
   </nav>
   </>
  )
}

export default Navbar