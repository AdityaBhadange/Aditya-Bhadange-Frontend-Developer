import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useStyles } from './styles/landingPage.styles';

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
        <Button>
          <Typography
            className={`rewatchStyle ${classes.textShadow}`}
            fontWeight={800}
            variant="caption">
            REWATCH
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPageFirstSection;
