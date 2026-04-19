import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Your Pages
import HeroSection from './pages/HeroSection';
import AboutFaculty from './pages/AboutFaculty';
import Courses from './pages/Courses';
import ResourceHub from './pages/ResourceHub';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import WhatsAppButton from './pages/WhatsAppButton';
import Error from './pages/Error';
import AdminLogin from './admin/AdminLogin';
import AdminLogout from './admin/AdminLogout';
import Register from './admin/Register';
import Topers from './admin/Topers';
import TopersReview from './admin/TopersReview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminUser from './admin/AdminUser';
import DemoLink from './admin/DemoLink';
import AllContact from './admin/AllContact';

function App() {
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <WhatsAppButton />
        <main className="grow">
          <Routes>
            <Route path="/" element={<><HeroSection /><Testimonials /></>} />
            <Route path="/about" element={<AboutFaculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<ResourceHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/Admin' element={<AdminLogin />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Logout' element={<AdminLogout />} />
            <Route path='*' element={<Error />} />
            <Route path='/AdminPanel/User' element={<AdminUser />} />
            <Route path='/AdminPanel/Topers' element={<Topers />} />
            <Route path='/AdminPanel/TopersReview' element={<TopersReview />} />
            <Route path='/AdminPanel/DemoLink' element={<DemoLink />} />
            <Route path='/AdminPanel/AllContacts' element={<AllContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  ); // Parenthesis added here
}

export default App;