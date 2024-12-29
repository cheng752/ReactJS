import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import BookTable from './Pages/BookTable';
import Login from './components/Login/Login';
// import { CartProvider } from './context/CartContext';
import { CartProvider } from './Context/CartContext';
// import Cart from './components/cart';
import Cart from './components/cart';
import CreateAccount from './components/Account/CreateAccount';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/BookTable" element={<BookTable />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
          <Route path="/create-account" element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { CartProvider } from './context/CartContext';
// import { CartProvider } from './Context/CartContext';
// import Navigation from './components/Navigation';
// // import Cart from './components/Cart';
// import Cart from './components/cart';
// import Home from './components/Home'; // Assume you have a Home component
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home page */}
//           <Route path="/cart" element={<Cart />} /> {/* Cart page */}
//         </Routes>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

