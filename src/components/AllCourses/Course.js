import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ButtonApp from '../ButtonApp';
import CheckIcon from '@material-ui/icons/Check';

const Course = (props) => {
   // const id  = props.id;
  return (
    <div >
      <Card style={{border:'groove'}}>
      <CardTitle tag="h5">{props.title}</CardTitle>
        <CardImg top alt="Card image cap" width="250px" src={props.img}></CardImg>
        <CardBody>         
          <CardText>
              Price: {props.price} € | Bookable: {props.isBookable && <CheckIcon/>}
              <div>Duration : {props.duration} </div>
              <div>Dates : {props.dateStart} - {props.dateEnd} </div>
          </CardText>
          <ButtonApp link={`courses/${props.id}`} msg="View">Button</ButtonApp>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;