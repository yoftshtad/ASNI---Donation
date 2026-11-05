import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logofooter from '../../assets/Icons/Logo.png'; 
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' }, // <-- ADDED HERE
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' },
  ];

  const importantLinks = [
    { path: '/terms', label: 'Terms & Conditions' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/donation', label: 'Donate' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="top-footer">
          {/* Column 1: Logo + Description */}
          <div className="footer-col logontext">
            <div className="footer-logo-wrapper">
              <img src={Logofooter} alt="ASNI Logo" />
            </div>
            <p>
              Empowering talented students in Ethiopia to break the cycle of 
              poverty through the power of education.
            </p>
            <div className="footer-icons">
              {socialLinks.map(({ icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              {navigationLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important */}
          <div className="footer-col">
            <h3>Important</h3>
            <ul>
              {importantLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:asnisth@gmail.com">asnisth@gmail.com</a></li>
              <li><a href="tel:+251000000000">+251 *** ** **</a></li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer">
          <p>© {currentYear} ASNI Donation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;