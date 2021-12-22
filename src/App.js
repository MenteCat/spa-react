import React from 'react';
/** Routes is used to replace Switch. Upgrade
 * to react-router-dom v6
 */
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import Policy from './component/Policy';
import Error from './component/Error';
import List from './component/List';
import Footer from './component/Footer';



function App() {

  return (
    <>
      <List />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;
