import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      width: '90%',
      margin: 'auto'
    },
    linkText: {
      color: 'white',
      textDecoration: 'none',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 0,
        height: '2px',
        background: 'white',
        transition: 'width 0.4s'
      },
      '&:hover::before': {
        width: '100%'
      }
    },
    linkContainer: {
      display: 'flex', // Set to display as flex
      alignItems: 'center', // Vertically center the items within the container
      '& > *': {
        margin: theme.spacing(2) // Add spacing between Link components
      }
    },
    container: {
      width: '90%',
      margin: 'auto'
    },
    iconStyle: {
      height: 80,
      width: '9.2rem'
    }
  })
);
