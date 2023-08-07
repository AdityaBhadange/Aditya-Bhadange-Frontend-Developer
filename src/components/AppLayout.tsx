import React from 'react';
import image1 from '../framework/assets/images/space-x-image-1.jpg';
import image2 from '../framework/assets/images/space-x-image-2.jpg';
import image3 from '../framework/assets/images/space-x-image-3.jpg';
import { Box } from '@mui/material';

const AppLayout = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '10%',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0))'
        }}
      />
      <img
        src={image1}
        alt="SpaceX Image 1"
        style={{
          objectFit: 'cover',
          height: '100vh',
          width: '100%',
          zIndex: 0,
        }}
      />
      <img
        src={image2}
        alt="SpaceX Image 2"
        style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
      />
      <img
        src={image3}
        alt="SpaceX Image 3"
        style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
      />
    </Box>
  );
};

export default AppLayout;
