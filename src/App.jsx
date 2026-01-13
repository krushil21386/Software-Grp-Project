import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import ComprehensiveCare from './components/ComprehensiveCare/ComprehensiveCare';
import TopSpecialists from './components/TopSpecialists/TopSpecialists';
import BookAppointment from './components/BookAppointment/BookAppointment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Statistics />
      <ComprehensiveCare />
      <TopSpecialists />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default App;
