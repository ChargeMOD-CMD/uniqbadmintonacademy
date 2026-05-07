import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Coaches } from './pages/Coaches';
import { Facilities } from './pages/Facilities';
import { Enroll } from './pages/Enroll';
import { FreeTrial } from './pages/FreeTrial';

export default function App() {
  return (
    <Router basename="/uniqbadmintonacademy">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/trial" element={<FreeTrial />} />
        </Routes>
      </Layout>
    </Router>
  );
}
