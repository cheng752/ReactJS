import React, { useState } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const BookTable = () => {
  const [isBooked, setIsBooked] = useState(false); // State to track booking success
  
  const handleBooking = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsBooked(true); // Set booking to true
    setTimeout(() => {
      setIsBooked(false); // Hide the success message after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <Header />
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Booking Products</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form onSubmit={handleBooking}>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled selected>
                        How many do you need?
                      </option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">
                      Book Now
                    </button>
                  </div>
                </form>
                {isBooked && (
                  <div className="success-message">
                    <p>Booking Successful!</p>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="map_container">
                <div id="googleMap"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookTable;
