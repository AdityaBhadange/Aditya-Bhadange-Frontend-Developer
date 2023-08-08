import React from 'react';
import image1 from '../framework/assets/images/space-x-image-1.jpg';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const AppLayout = () => {
  return (
    <Box
      sx={{
        zIndex: -1,
        height: '100vh'
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '10%',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))'
        }}
      />
      <img
        src={image1}
        alt="SpaceX Image 1"
        style={{
          objectFit: 'cover',
          height: '100vh',
          width: '100%',
          zIndex: -1
        }}
      />
      <Navbar />
    </Box>
  );
};

export default AppLayout;
