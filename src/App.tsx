import React, { useState } from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import defaultTheme from './styles/defaultTheme.styles';
import { Box } from '@mui/material';
import AppRoutes from './components/AppRoutes';
import AppLayout from './components/AppLayout';

function App() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <AppLayout />
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
