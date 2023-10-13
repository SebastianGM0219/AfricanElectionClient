import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import DataPage from './pages/DataPage';
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar/Navbar';
import Infographics from './pages/Infographics';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
function App() {
  return (
    <>

      <Router>
        
<Navbar/>

          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
       
      </Router>
    </>

  );
}

export default App;
