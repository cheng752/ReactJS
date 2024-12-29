import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCart } from '../Context/CartContext';
import { useCart } from "../Context/CartContext";// Adjust the path based on your file structure
import Header from "../components/Header/header";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Using the Cart context

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Show all products by default
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const updatedList = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(updatedList);
    }
  };

  const handleBuyNow = (product) => {
    addToCart(product); // Add product to cart
    navigate("/cart"); // Navigate to cart page
  };

  return (
    <div>
      <Header/>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          {/* Conditional Rendering */}
          {selectedProduct ? (
            <div className="product-detail">
              <button
                onClick={() => setSelectedProduct(null)} // Reset selected product
                style={{
                  marginBottom: "20px",
                  padding: "10px 20px",
                  background: "#ffbe33",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
              >
                Back to Menu
              </button>
              <div className="detail-box">
                <h2>{selectedProduct.title}</h2>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{ width: "300px", objectFit: "contain" }}
                />
                <p>{selectedProduct.description}</p>
                <h3>${selectedProduct.price.toFixed(2)}</h3>
                <button
                  onClick={() => handleBuyNow(selectedProduct)}
                  style={{
                    padding: "10px 20px",
                    background: "#ffbe33",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Filter Buttons */}
              <ul className="filters_menu">
                <li onClick={() => filterProduct("All")}>All</li>
                <li onClick={() => filterProduct("electronics")}>Electronics</li>
                <li onClick={() => filterProduct("jewelery")}>Jewelry</li>
                <li onClick={() => filterProduct("men's clothing")}>Men's Clothing</li>
                <li onClick={() => filterProduct("women's clothing")}>Women's Clothing</li>
              </ul>

              {/* Display Products */}
              <div className="filters-content">
                <div className="row grid">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`col-sm-6 col-lg-4 all ${product.category.replace(
                        /\s+/g,
                        "-"
                      )}`}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="box">
                        <div>
                          <div
                            className="img-box"
                            onClick={() => setSelectedProduct(product)} // Set selected product
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              style={{ objectFit: "contain", height: "200px" }}
                            />
                          </div>
                          <div className="detail-box">
                            <h5 style={{ color: "white" }}>{product.title}</h5>
                            <p>{product.description.substring(0, 50)}...</p>
                            <div className="options">
                              <h6>${product.price.toFixed(2)}</h6>
                            </div>
                            <button
                              onClick={() => handleBuyNow(product)} // Call addToCart when clicked
                              style={{
                                marginTop: "10px",
                                padding: "10px 20px",
                                background: "#ffbe33",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
