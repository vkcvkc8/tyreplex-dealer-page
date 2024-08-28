import React from 'react';

// Footer Component
const Footer = () => (
    <footer className="bg-light py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>TyrePlex</h5>
            <div className="d-flex mt-2">
              <a href="www.google.com" className="me-3"><img width="15" src="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526" alt="Facebook" /></a>
              <a href="www.google.com"><img width="23" src="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526" alt="Instagram" /></a>
            </div>
          </div>
          <div className="col-md-2">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="www.google.com" className="text-muted">Who We Are</a></li>
              <li><a href="www.google.com" className="text-muted">Are you a Tyre Dealer?</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li><a href="www.google.com" className="text-muted">Privacy Policy</a></li>
              <li><a href="www.google.com" className="text-muted">Terms of use</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="www.google.com" className="text-muted">Contact Us</a></li>
              <li><a href="www.google.com" className="text-muted">Career</a></li>
              <li><a href="www.google.com" className="text-muted">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center text-muted small">©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );

  export default Footer;