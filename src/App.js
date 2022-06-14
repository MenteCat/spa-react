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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChp8OP5CUSDwA90-0X_Xc8pRkolgFC1gQ",
  authDomain: "spa-react-app-2b456.firebaseapp.com",
  projectId: "spa-react-app-2b456",
  storageBucket: "spa-react-app-2b456.appspot.com",
  messagingSenderId: "714134636679",
  appId: "1:714134636679:web:67e23cf98f6dfd597b9022",
  measurementId: "G-R4CD4G82BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



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
