import Email from '../../assets/Icons/Email.png';
import Phone from '../../assets/Icons/Phone.png';
import './Secondary_header.css';

function Secondary_header() {
  return (
    <div className="header">
      <div className="container header-content">
        <div className="Email">
          <img src={Email} alt="Email icon" />
          <p>Email: Asnitata@gmail.com</p>
        </div>

        <div className="Phone">
          <img src={Phone} alt="Phone icon" />
          <p>Phone: +251 *** *** ***</p>
        </div>
      </div>
    </div>
  );
}

export default Secondary_header;