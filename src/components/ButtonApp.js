import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(),
    },
  },
}));

const ButtonApp = ({msg,color,link}) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
          <Link to={`/${link}`}>  
      <Button variant="contained">{msg}</Button>
       </Link>
    </div>
  );
}

export default ButtonApp;

// import React from 'react';
// import { Button } from 'reactstrap';

// const ButtonApp = (props) => {
//   return (
//     <div>
//       <Button outline color="primary" size="lg">{props.msg}</Button>{' '}
//     </div>
//   );

// }

// export default ButtonApp;