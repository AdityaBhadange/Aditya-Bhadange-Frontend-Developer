import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    linkText: {
      textDecoration: 'none'
    }
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="black" color="#fff" py={2}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="caption">SPACEX © 2023</Typography>
        </Grid>
        <Grid item>
          <Link to="https://twitter.com/spacex" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              TWITTER
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.youtube.com/spacex" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              YOUTUBE
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.instagram.com/spacex/" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              INSTAGRAM
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.flickr.com/photos/spacex" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              FLICKR
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.linkedin.com/company/spacex" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              LINKEDIN
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link
            to="https://www.spacex.com/media/privacy_policy_spacex.pdf"
            className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              PRIVACY POLICY
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.spacex.com/supplier/" className={classes.linkText}>
            <Typography fontWeight={500} variant="caption">
              SUPPLIERS
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
