import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(),
    },
  },
}));

const ButtonApp = ({msg,color}) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
          
      <Button variant="contained">{msg}</Button>
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