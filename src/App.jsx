import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, MobileActionBar, ScrollToTop } from './components.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Gallery from './pages/Gallery.jsx';
import Reviews from './pages/Reviews.jsx';
import Booking, { BookingSuccess } from './pages/Booking.jsx';
import Contact from './pages/Contact.jsx';

export default function App() { return <><ScrollToTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/reviews" element={<Reviews/>}/><Route path="/booking" element={<Booking/>}/><Route path="/booking/success" element={<BookingSuccess/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/><MobileActionBar/></>; }
