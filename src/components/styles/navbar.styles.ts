import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    linkText: {
      color: 'white',
      textDecoration: 'none',
      position: 'relative', // To create a stacking context for the pseudo-element
      '&:hover': {
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0, // Start with zero width
          height: '2px',
          background: 'white',
          animation: '$underlineAnimation 0.4s forwards' // Apply the animation on hover
        }
      }
    },
    marginLeft: {
      marginLeft: '3em'
    },
    '@keyframes underlineAnimation': {
      '0%': {
        width: 0 // Start from zero width (far left)
      },
      '100%': {
        width: '100%' // Go to the full width of the text (far right)
      }
    }
  })
);
