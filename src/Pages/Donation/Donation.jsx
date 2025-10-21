import React from 'react'
import './Donation.css'
import qr_code from '../../assets/Images/QR.jpg'

function Donation() {
  return (
    <div className="donation-container">
      <div className="donation-header">
        <h1 className="donation-title">Support Our Cause</h1>
        <p className="donation-description">
          Your generous contribution helps us make a real difference in the community. 
          Choose your preferred payment method below to donate securely.
        </p>
      </div>

      <div className="payment-methods">
        <div className="payment-card cbe-card">
          <div className="payment-header">
            <div className="payment-icon">🏦</div>
            <h3 className="payment-title">Commercial Bank of Ethiopia</h3>
          </div>
          <div className="qr-section">
            <h4 className="scan-title">Scan QR Code to Donate</h4>
            <div className="qr-container">
              <img 
                className="qr-code" 
                src={qr_code} 
                alt="CBE QR Code for donations"
                loading="lazy"
              />
            </div>
            <p className="account-info">
              <span className="label">Account Number:</span>
              <span className="account-number">1000487856298457287</span>
            </p>
            <p className="thank-you">Thank you for your support!</p>
          </div>
        </div>

        <div className="payment-card telebirr-card">
          <div className="payment-header">
            <div className="payment-icon">📱</div>
            <h3 className="payment-title">TeleBirr</h3>
          </div>
          <div className="qr-section">
            <h4 className="scan-title">Scan QR Code to Donate</h4>
            <div className="qr-container">
              <img 
                className="qr-code" 
                src={qr_code} 
                alt="TeleBirr QR Code for donations"
                loading="lazy"
              />
            </div>
            <p className="account-info">
              <span className="label">Phone Number:</span>
              <span className="account-number">0946y584838</span>
            </p>
            <p className="thank-you">Thank you for your support!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation