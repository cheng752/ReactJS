import React, { useEffect, useState } from "react";
import axios from "axios"

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  const getProducts = async () => {
    try{
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data)
      console.log(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    
    <div>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          {/* Filters Menu (Static for now, can be made dynamic later) */}
          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".electronics">Electronics</li>
            <li data-filter=".jewelery">Jewelry</li>
            <li data-filter=".mens-clothing">Men's Clothing</li>
            <li data-filter=".womens-clothing">Women's Clothing</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {/* Map through products fetched from the API */}
              {products.map((product) => (
                <div
                
                  key={product.id}
                  className={`col-sm-6 col-lg-4 all ${product.category.replace(
                    /\s+/g,
                    "-"
                  )}`}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        {/* <img src={product.image} alt={product.title} /> */}
                      </div>
                      <div className="detail-box">
                        <h5>{product.title}</h5>
                        <p>{product.description}</p>
                        <div className="options">
                          <h6>${product.price.toFixed(2)}</h6>
                          <a href="#">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 456.029 456.029"
                              style={{ enableBackground: "new 0 0 456.029 456.029" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <path
                                    d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                     c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                     C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                     c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                     C457.728,97.71,450.56,86.958,439.296,84.91z"
                                  />
                                </g>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-box">
            <a href="#">View More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
