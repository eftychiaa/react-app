import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(),
//     },
//   },
// }));

const ButtonApp = ({msg,color,link,variant}) => {
  


  return (
    <div >
          <Link to={`/${link}`}>  
      <Button variant={variant}>{msg}</Button>
       </Link>
    </div>
  );
}

// <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}


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