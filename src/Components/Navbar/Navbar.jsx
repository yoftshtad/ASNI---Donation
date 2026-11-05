import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from '../../assets/Icons/Logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' }, // <-- ADDED HERE
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="ASNI Logo" />
          </Link>

          <ul ref={menuRef} className={`nav-link ${isOpen ? 'active' : ''}`}>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link to="/donation" className="btn nav-donate-btn">
                Donate Now
              </Link>
            </li>
          </ul>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        className={`nav-backdrop ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Navbar;