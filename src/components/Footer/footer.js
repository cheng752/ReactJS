import React from 'react';

const footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>trymestore@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">Try Me Store</a>
              <p>
              At <strong>Try Me Store</strong>, we strive to make online shopping
            convenient, affordable, and accessible to everyone. Our mission is
            to provide a diverse range of quality products while ensuring
            excellent customer satisfaction.
              </p>
              <div className="footer_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am - 10.00 Pm</p>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="footer-info">
          <p>
            &copy; {currentYear} All Rights Reserved By
            <a href="https://html.design/"> Free Html Templates</a>
            <br />
            &copy; {currentYear} Distributed By
            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer"> ThemeWagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
