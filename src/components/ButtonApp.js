import React from 'react';
import Button from 'react-bootstrap/Button';


const ButtonApp = ({msg,color,link,variant,functionClick}) => {
  


  return (
    // <div >
    <span style={{marginLeft:10}}>
          {/* <Link to={`/${link}`}>   */}
      <Button onClick={functionClick} variant={variant}>{msg} </Button>
       {/* </Link> */}
       </span>
  
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