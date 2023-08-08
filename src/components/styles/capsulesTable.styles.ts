import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '95%',
      margin: 'auto'
    },
    lightBlackGradient: {
      background: 'radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))'
    },
    textShadow: {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Adjust the shadow properties as needed
    }
  })
);
