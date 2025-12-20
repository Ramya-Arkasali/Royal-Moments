
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Home from './Home/Home.jsx';
import About from '../components/About/about.jsx';
import Event from '../components/Program/event.jsx';
import EventDetails from '../components/Program/eventdetails.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from "../components/footer/footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
 </>
  )
}
export default App;


