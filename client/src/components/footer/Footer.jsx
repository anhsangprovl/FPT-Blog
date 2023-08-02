import React from 'react';
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="title-footer">
        <div className="footer-icons">
          <BsFacebook className="icon" />
          <BsInstagram className="icon" />
          <BsTwitter className="icon" />
        </div>
        <h2 className="h2-footer">Let's get start on something great</h2>
        <p>Writing everything you want</p>
        <button className="btn-footer">Let's start</button>
        <p>&copy; 2023 MyWebSite. All rights reserved.</p>
      </div>
    </footer>
  );
}
