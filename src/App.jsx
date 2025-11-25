
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from './Home/Home';
import About from '../components/About/about';
import Event from '../components/Program/event';
import EventDetails from '../components/Program/eventdetails';
import Contact from '../components/Contact/Contact';
import Footer from "../components/footer/footer";

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


