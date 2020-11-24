import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonApp from './ButtonApp';



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
          
          <ButtonApp msg="View all" link="allCourses" color="primary"></ButtonApp>
          
         <ButtonApp msg="Add new course" link="addNewCourse" color="primary"></ButtonApp>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;
