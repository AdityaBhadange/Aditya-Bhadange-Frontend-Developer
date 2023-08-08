import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useStyles } from './styles/landingPage.styles';
import { Link } from 'react-router-dom';

const LandingPageFirstSection = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.container} ${classes.textShadow} ${classes.bottomLeftPosition}`}>
      <Box>
        <p>
          <Typography className={classes.textShadow} variant="h6">
            RECENT LAUNCH
          </Typography>
        </p>
        <p>
          <Typography className={classes.textShadow} fontWeight="bold" variant="h1">
            STARLINK MISSION
          </Typography>
        </p>
      </Box>
      <br />
      <Box className={classes.buttonStyle}>
        <Link
          to="https://www.youtube.com/watch?v=alkJWrqffcw"
          target="_blank"
          rel="noopener noreferrer">
          <Button>
            <Typography
              className={`rewatchStyle ${classes.textShadow}`}
              fontWeight={800}
              variant="caption">
              REWATCH
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LandingPageFirstSection;
