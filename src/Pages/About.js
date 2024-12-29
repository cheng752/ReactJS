import React from 'react'
import images from '../images/jk.jpg'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
const about = () => {
  return (

    <div>
      <Header/>
      <section class="about_section layout_padding">
    <div class="container  ">

      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
          <img src={images} alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2 style={{color:"#fff",}}>
                We Are Try Me Store
              </h2>
            </div>
            <p style={{color:"white"}}>
            At <strong>Try Me Store</strong>, we strive to make online shopping
            convenient, affordable, and accessible to everyone. Our mission is
            to provide a diverse range of quality products while ensuring
            excellent customer satisfaction.
            </p>
            <ul>
            <li>Wide range of high-quality products</li>
            <li>Secure and fast delivery</li>
            <li>Exceptional customer service</li>
            <li>Hassle-free returns and exchanges</li>
            </ul>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    <Footer/>
    </div>
  )
}

export default about
