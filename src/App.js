import React from 'react';
import Header from './components/header/Header'
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Product from './components/product/Product.js'
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Landing />
        <About />
        <Product />
        <Footer />
    </React.Fragment>
  );
}

export default App;
