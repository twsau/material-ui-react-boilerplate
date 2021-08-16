import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: 'slateblue',
    border: '2px solid white',
    color: 'white',
    boxShadow: '0 5px 3px rgba(0, 0, 0, 0.3)',
    margin: '1rem',
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100%',
  },
});

export default function App(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">
        <Grid container direction="row" item justifyContent="center">
          <Avatar className={classes.avatar} color="primary"><PhoneAndroidIcon /></Avatar>
          <Avatar className={classes.avatar} color="primary"><ComputerIcon /></Avatar>
          <Avatar className={classes.avatar} color="primary"><TabletAndroidIcon /></Avatar>
        </Grid>
        <Typography variant="overline">
          <a href="https://material-ui.com/">material-ui</a> / <a href="https://reactjs.org/">react</a> boilerplate
        </Typography>
        <Typography variant="caption">Edit your App.js file to get started!</Typography>
      </Grid>
    </>
  );
}

