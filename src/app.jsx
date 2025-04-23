import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Classes';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
<<<<<<< HEAD

=======
import ClassTimetable from './pages/ClassTimetable'; 
import BMICalculator from './pages/BMICalculator';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Classes />} />
<<<<<<< HEAD
        <Route path="/services" element={<Services />} /> 
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
=======
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes-timetable" element={<ClassTimetable />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)
      </Routes>
    </>
  );
};

export default App;
