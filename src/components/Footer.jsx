import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <h3 className="footer-logo">FYT</h3>
        <p className="footer-subtitle">Find your tournament </p>
      </div>
      <ul className="footer-items">
        <h3 className="sub-titles">Explore</h3>
        <li><Link to="/" className="linkFooter"> Home</Link></li>
        <li><Link to="/my-profile" className="linkFooter"> My profile</Link></li>
        <li><Link to="/rankings" className="linkFooter"> Rankings</Link></li>
      </ul>
      <ul className="footer-items">
        <h3 className="sub-titles">Legal</h3>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
    </div>
  );
}

export default FooterPage;