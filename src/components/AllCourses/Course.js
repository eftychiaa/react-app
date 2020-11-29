import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ButtonApp from '../ButtonApp';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from "react-router-dom";



const Course = (props) => {


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
          <Link to={`courses/${props.id}`}>
          <ButtonApp id={props.id} style={{marginLeft:220}} msg="View">Button</ButtonApp>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;