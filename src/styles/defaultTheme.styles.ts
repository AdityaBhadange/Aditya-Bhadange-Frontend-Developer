import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3' // Set your desired primary color
    }
  },
  typography: {
    fontSize: 16, // Default font size for the entire application (in pixels)
    fontFamily: 'Roboto, sans-serif', // You can specify your desired font family here
    h1: {
      fontSize: '2.5rem' // Custom font size for h1
    },
    h2: {
      fontSize: '2rem' // Custom font size for h2
    }
    // Add other customizations for typography as needed
  }
  // Add more theme customizations here (spacing, breakpoints, etc.)
});

export default defaultTheme;
