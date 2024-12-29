import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../../images/hero.png"

const Navbar = () => {
  const navigate = useNavigate(); // Correct hook for navigation

  const handleOrderNowClick = () => {
    navigate('/menu'); // Redirect to the Menu page
  };
  return (
    <div>
      <>
      
    <div class="hero_area">
    <div class="bg-box">
      <img src={image} alt=""/>
    </div>
    {/* <!-- slider section --> */}
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      Welcom To Try Me Store
                    </h1>
                    <p style={{color:"#000"}}>
                    We see our customers as invited guests to a party,<br/> and we are the hosts. It’s our job every day to make every<br/> important aspect of the customer experience a little bit better.
                    </p>
                    <div class="btn-box">
                    <a href="" onClick={handleOrderNowClick} class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                     Welcom To Try Me Store
                    </h1>
                    <p style={{color:"#000"}}>
                    We see our customers as invited guests to a party,<br/> and we are the hosts. It’s our job every day to make every<br/> important aspect of the customer experience a little bit better.
                    </p>
                    <div class="btn-box">
                      <a href="" onClick={handleOrderNowClick} class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1 className='txt1'>
                       Welcom To Try Me Store
                    </h1>
                    <p >
                    We see our customers as invited guests to a party,<br/> and we are the hosts. It’s our job every day to make every<br/> important aspect of the customer experience a little bit better.
                    </p>
                    <div class="btn-box">
                    <a href="" onClick={handleOrderNowClick} class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <ol class="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>

    </section>
 
    {/* <!-- end slider section --> */}
  </div>

    </>
    </div>
  )
}

export default Navbar
