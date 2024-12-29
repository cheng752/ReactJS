import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import '../Pages/Style/cart.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Modal from 'react-modal';

// Set the app element for accessibility (React Modal requirement)
Modal.setAppElement('#root');

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Open modal
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setModalOpen(false);
  };
  
  const forceCloseModal = () => {
    document.body.classList.remove("ReactModal__Body--open"); // Ensures body class reset
    closeModal();
  };

  // Fallback to remove PayPal modal
const forceClosePayPalModal = () => {
  const modalElement = document.querySelector(".paypal-button-context-iframe");
  if (modalElement) {
    modalElement.remove();
  }
};
  
  

  return (
    <>
      <Header />
      <div className="cart">
        <h2 className="cart-header">Shopping Detail</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">No items in cart.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <div className="cart-item-image-container">
                  <img className="cart-item-image" src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title" style={{ marginTop: '20px' }}>
                    {item.title}
                  </h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className="cart-item-remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        {cartItems.length > 0 && (
          <div className="cart-checkout">
            <button
              onClick={openModal}
              className="checkout-button"
              style={{
                padding: '10px 20px',
                background: '#ffbe33',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Modal for Checkout */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Checkout Modal"
        className="checkout-modal"
        overlayClassName="checkout-overlay"
      >
        <h2>Confirm Payment</h2>
        <p>Total Amount: ${totalPrice.toFixed(2)}</p>
        <PayPalScriptProvider
  options={{
    "client-id": "Acu3Fc7--_KQhu9iNKiGvfKv1MhjzIlR08iM015lB_ujFDCVUhXhNCLh7FognblgGU1lFST6qudJA_OH",
    currency: "USD",
  }}
>
  <PayPalButtons
    style={{ layout: "vertical" }}
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: totalPrice.toFixed(2), // Total amount
            },
          },
        ],
      });
    }}
    onApprove={(data, actions) => {
      console.log("Payment approved, capturing order...");
      return actions.order
        .capture()
        .then((details) => {
          console.log("Order captured:", details);
    
          // Close custom modal and PayPal modal
          closeModal();
    
          // Ensure PayPal modal is removed
          setTimeout(() => {
            forceClosePayPalModal();
            window.location.reload(); // Refresh the page
          }, 500); // Add delay to avoid overlaps
    
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        })
        .catch((err) => {
          console.error("Error capturing order:", err);
          alert("Something went wrong with the payment capture.");
        });
    }}

    
    
    
  />
</PayPalScriptProvider>

        <button
          onClick={closeModal}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#ccc',
            color: '#333',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </Modal>

      <Footer />
    </>
  );
};

export default Cart;
