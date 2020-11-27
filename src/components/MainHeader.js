import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonApp from './ButtonApp';
import { spacing } from '@material-ui/system';
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

const theme = {
  spacing: 10,
}

const MainHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{color:"white"}}>
            Code.Hub Dashboard
            </Link>
          </Typography>
          <Link to="/allCourses">
          <ButtonApp variant="light" msg="View all" color="primary" mr={2} ></ButtonApp>
          </Link>
          <Link to="/addNewCourse">
         <ButtonApp variant="light" msg="Add new course" color="primary"></ButtonApp>
         </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default MainHeader;
