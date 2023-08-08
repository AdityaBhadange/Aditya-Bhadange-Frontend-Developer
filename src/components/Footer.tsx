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

  const FooterLinks = [
    {
      text: 'TWITTER',
      link: 'https://twitter.com/spacex'
    },
    {
      text: 'YOUTUBE',
      link: 'https://www.youtube.com/spacex'
    },
    {
      text: 'INSTAGRAM',
      link: 'https://www.instagram.com/spacex/'
    },
    {
      text: 'FLICKR',
      link: 'https://www.flickr.com/photos/spacex'
    },
    {
      text: 'LINKEDIN',
      link: 'https://www.linkedin.com/company/spacex'
    },
    {
      text: 'PRIVACY POLICY',
      link: 'https://www.spacex.com/media/privacy_policy_spacex.pdf'
    },
    {
      text: 'SUPPLIERS',
      link: 'https://www.spacex.com/supplier/'
    }
  ];

  return (
    <Box bgcolor="black" color="#fff" py={2}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography fontSize={12} variant="caption">
            SPACEX © 2023
          </Typography>
        </Grid>
        {FooterLinks?.map((footerItem) => {
          return (
            <Grid key={footerItem.link} item>
              <Link to={footerItem.link} className={classes.linkText}>
                <Typography fontWeight={600} fontSize={12}>
                  {footerItem.text}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Footer;
