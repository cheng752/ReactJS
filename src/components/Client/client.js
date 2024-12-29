import React from 'react';
import image from '../../images/client1.jpg';
import images from '../../images/client2.jpg';

const Client = () => {
  return (
    <section className="client_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container heading_center psudo_white_primary mb_45">
      <h2>What Says Our Customers</h2>
    </div>
    <div className="carousel-wrap row ">
      <div className="client_owl-carousel ">
        <div className="item">
          <div className="box">
            <div className="detail-box">
              <p>
                Your product has a good quality and the price is accessible.
              </p>
              <h6>Moana Michell</h6>
              <p>magna aliqua</p>
            </div>
            <div className="img-box">
              {/* <img src="images/client1.jpg" alt="" className="box-img" /> */}
              <img src="../images/client1.jpg" alt='' className='box-img' />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="detail-box">
              <p>
              Your product has a goog quality and the price is accessible.
              </p>
              <h6>Mike Hamell</h6>
              <p>magna aliqua</p>
            </div>
            <div className="img-box">
              <img src="images/client2.jpg" alt="" className="box-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    // <div>
    //   <section className="client_section layout_padding-bottom">
    //     <div className="container">
    //       <div className="heading_container heading_center psudo_white_primary mb_45">
    //         <h2>
    //           What Says Our Customers
    //         </h2>
    //       </div>
    //       <div className="carousel-wrap row ">
    //         <div className="owl-carousel client_owl-carousel">
    //           <div className="item">
    //             <div className="box">
    //               <div className="detail-box">
    //                 <p>
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    //                 </p>
    //                 <h6>
    //                   Moana Michell
    //                 </h6>
    //                 <p>
    //                   magna aliqua
    //                 </p>
    //               </div>
    //               <div className="img-box">
    //                 <img src={image} alt="" className="box-img" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="item">
    //             <div className="box">
    //               <div className="detail-box">
    //                 <p>
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    //                 </p>
    //                 <h6>
    //                   Mike Hamell
    //                 </h6>
    //                 <p>
    //                   magna aliqua
    //                 </p>
    //               </div>
    //               <div className="img-box">
    //                 <img src={images} alt="" className="box-img" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Client;
