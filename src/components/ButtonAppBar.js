import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonApp from './ButtonApp';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Code.Hub Dashboard
          </Typography>
          <Link to="/test">
          <ButtonApp msg="View all" color="primary"></ButtonApp>
          </Link>
          <Link to="/addNewCourse">
         <ButtonApp msg="Add new course" color="primary"></ButtonApp>
         </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;
