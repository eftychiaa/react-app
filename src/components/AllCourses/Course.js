import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ButtonApp from '../ButtonApp';
import CheckIcon from '@material-ui/icons/Check';
//import CourseDetails from '../CourseDetails/CourseDetails';



const Course = (props) => {

    
   // const id  = props.id;
  return (
    <div >
      <Card style={{border:'groove', width:'350px',height:'580px', marginTop:'50px'}}>
      <CardTitle tag="div">{props.title}</CardTitle>
        <CardImg top alt="Card image cap" width="250px" src={props.img}></CardImg>
        <CardBody>         
          <CardText>
              Price:<span style={{fontWeight: 'bold'}}> {props.price} €</span> | Bookable: {props.isBookable && <CheckIcon/>}
              <div>Duration : <span style={{fontWeight: 'bold'}}>{props.duration} </span></div>
              <div>Dates : <span style={{fontWeight: 'bold'}}>{props.dateStart} - {props.dateEnd}</span> </div>
          </CardText>
          <ButtonApp link={`courses/${props.id}`} id={props.id} msg="View">Button</ButtonApp>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;