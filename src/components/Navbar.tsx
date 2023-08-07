import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { SpaceXIcon } from '../framework/assets/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './styles/navbar.styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <SpaceXIcon
              style={{
                height: 80,
                width: '9.2rem'
              }}
            />
          </Box>
          <Box className={classes.marginLeft}>
            <Link to="/" className={classes.linkText}>
              <Typography variant="body2">FALCON 9</Typography>
            </Link>
          </Box>
          <Box className={classes.marginLeft}>
            <Link to="/falcon-heavy" className={classes.linkText}>
              <Typography variant="body2">FALCON HEAVY</Typography>
            </Link>
          </Box>
          <Box className={classes.marginLeft}>
            <Link to="/dragon" className={classes.linkText}>
              <Typography variant="body2">DRAGON</Typography>
            </Link>
          </Box>
          <Box className={classes.marginLeft}>
            <Link to="/starship" className={classes.linkText}>
              <Typography variant="body2">STARSHIP</Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
