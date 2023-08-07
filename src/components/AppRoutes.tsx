import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dragon from './Dragon';
import Falcon9 from './Falcon9';
import FalconHeavy from './FalconHeavy';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Starship from './Starship';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/falcon-heavy" Component={Falcon9} />
        <Route path="/falcon-heavy" Component={FalconHeavy} />
        <Route path="/dragon" Component={Dragon} />
        <Route path="/starship" Component={Starship} />
        <Route path="*" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
