import React from 'react';
import Header from '../components/Header/header'
import Navbar from '../components/Navbar/navbar'
import Menu from '../components/Menu/Menu'
import Book from '../components/Book/booktable'
import Footer from '../components/Footer/footer'
import About from '../components/about/about';
import Client from '../components/Client/client';

function Home() {
  return (
    <div>
      <Header/>
      <Navbar />
      <Menu />
      <About/> 
      <Book />
      <Client/>
      <Footer />
      
     
    </div>
  );
}

export default Home;


