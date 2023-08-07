// Navbar.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { SpaceXIcon } from '../framework/assets/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './styles/navbar.styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box component="nav" display="flex" alignItems="center" className={classes.navbar}>
      <Box>
        <SpaceXIcon style={{ height: 80, width: '9.2rem' }} />
      </Box>
      <Box className={classes.linkContainer}>
        <Link to="/" className={classes.linkText}>
          <Typography variant="caption">FALCON 9</Typography>
        </Link>
        <Link to="/falcon-heavy" className={classes.linkText}>
          <Typography variant="caption">FALCON HEAVY</Typography>
        </Link>
        <Link to="/dragon" className={classes.linkText}>
          <Typography variant="caption">DRAGON</Typography>
        </Link>
        <Link to="/starship" className={classes.linkText}>
          <Typography variant="caption">STARSHIP</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
