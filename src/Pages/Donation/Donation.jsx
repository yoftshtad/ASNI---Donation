import { useState } from 'react';
import { FaUniversity, FaMobileAlt, FaCopy, FaCheck, FaShieldAlt } from 'react-icons/fa';
import qr_cbe from "../../assets/Images/QR.jpg"; // Ensure this file exists
import qr_telebirr from "../../assets/Images/QR.jpg"; // Ensure this file exists
import './Donation.css';

function Donation() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (value, id) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const impactStats = [
    { number: '500+', label: 'Students Supported' },
    { number: '50+', label: 'Schools Reached' },
    { number: '100%', label: 'Goes to Students' },
  ];

  const paymentMethods = [
    {
      id: 'cbe',
      type: 'cbe-card',
      icon: <FaUniversity />,
      title: 'Commercial Bank of Ethiopia',
      scanLabel: 'Scan QR Code to Donate',
      qr: qr_cbe,
      qrAlt: 'CBE QR Code for donations',
      accountLabel: 'Account Number',
      accountValue: '1000487856298457287',
    },
    {
      id: 'telebirr',
      type: 'telebirr-card',
      icon: <FaMobileAlt />,
      title: 'TeleBirr',
      scanLabel: 'Scan QR Code to Donate',
      qr: qr_telebirr,
      qrAlt: 'TeleBirr QR Code for donations',
      accountLabel: 'Phone Number',
      accountValue: '0946584838', // TODO: fix with real number
    },
  ];

  return (
    <main className="donation-page">
      {/* --- Header --- */}
      <section className="container donation-header">
        <p className="section-tag">Give Today</p>
        <h1>Support Our Cause</h1>
        <p className="donation-subtitle">
          Your generous contribution helps us make a real difference in the community.
          Choose your preferred payment method below to donate securely.
        </p>
      </section>

      {/* --- Impact Stats --- */}
      <section className="container impact-stats">
        {impactStats.map(({ number, label }) => (
          <div className="stat-box" key={label}>
            <p className="stat-number">{number}</p>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </section>

      {/* --- Payment Methods --- */}
      <section className="container payment-methods">
        {paymentMethods.map((method) => (
          <div className={`payment-card ${method.type}`} key={method.id}>
            <div className="payment-header">
              <span className="payment-icon">{method.icon}</span>
              <h3 className="payment-title">{method.title}</h3>
            </div>

            <div className="qr-section">
              <h4 className="scan-title">{method.scanLabel}</h4>

              <div className="qr-container">
                <img
                  className="qr-code"
                  src={method.qr}
                  alt={method.qrAlt}
                  loading="lazy"
                />
              </div>

              <div className="account-info">
                <span className="label">{method.accountLabel}</span>
                <div className="account-row">
                  <span className="account-number">{method.accountValue}</span>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(method.accountValue, method.id)}
                    aria-label="Copy to clipboard"
                  >
                    {copied === method.id ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
                {copied === method.id && (
                  <span className="copy-feedback">Copied!</span>
                )}
              </div>

              <p className="thank-you">Thank you for your support! 💛</p>
            </div>
          </div>
        ))}
      </section>

      {/* --- Trust / Security Note --- */}
      <section className="container trust-note">
        <FaShieldAlt className="trust-icon" />
        <p>
          All donations go directly to supporting students in Ethiopia.
          Your generosity is tracked and used responsibly.
        </p>
      </section>
    </main>
  );
}

export default Donation;