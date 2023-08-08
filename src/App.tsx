import React, { useState } from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import defaultTheme from './styles/defaultTheme.styles';
import { Box } from '@mui/material';
import AppRoutes from './components/AppRoutes';
import './index.css';

function App() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
