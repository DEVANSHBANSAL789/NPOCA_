import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
// import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import Home from "./Home/Home.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Footer from "./Footer/Footer.jsx";
import Event from "./Events/Events.jsx";
import Banner from "./banner/banner.jsx";
import EditBanner from "./EditBanner/EditBanner.jsx";
import AddContent from "./youtube/youtube.jsx";

// import axios from "axios";
import CareerResources from "./CareerResources/CareerResources.jsx";

import WhatWeOffer from "./WhatWeOffer/WhatWeOffer.jsx";
import AddSession from "./AddSession/AddSession.jsx";
import Sessions from "./Sessions/Sessions.jsx";
import EditSession from "./EditSession/EditSession.jsx";
import AddEventForm from "./Event/Event.jsx";
import EventsTable from "./EventTable/EventTable.jsx";
import EditEventForm from "./EditEvent/EditEvent.jsx";
import AdminLoginForm from "./LoginForm/LoginForm.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/career-resources" element={<CareerResources />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        {/* <Route path="/slider" element={<ImageSlider />} /> */}
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/add-session" element={<AddSession />} />
        <Route path="/edit-session/:id" element={<EditSession />} />
        <Route path="/add-event" element={<AddEventForm />} />
        <Route path="/add-event" element={<AddEventForm />} />
        <Route path="/event-table" element={<EventsTable />} />
        <Route path="/edit-event/:id" element={<EditEventForm />} />
        <Route path="/admin-login" element={<AdminLoginForm />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/update/:id" element={<EditBanner />} />
        <Route path="/add" element={<AddContent />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
