import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dragon, Falcon9, FalconHeavy, Navbar, LandingPage, Starship } from './components';
import { Theme, ThemeProvider } from '@mui/material/styles';
import defaultTheme from './styles/defaultTheme.styles';

function App() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
