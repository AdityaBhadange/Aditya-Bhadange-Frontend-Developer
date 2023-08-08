import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '90%',
      margin: 'auto'
    },
    takeFullHeight: {
      height: '100vh'
    },
    textShadow: {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
    },
    buttonStyle: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '10rem',
      height: '3rem',
      verticalAlign: 'center',
      border: '2px solid white',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: 'white',
        '& .rewatchStyle': {
          color: 'black',
          textShadow: 'none'
        }
      }
    },
    bottomLeftPosition: {
      position: 'absolute',
      bottom: '5rem',
      left: '5rem',
      justifyContent: 'flex-end'
    }
  })
);
