import React, { useState, useEffect } from "react";
import { Spinner, Alert, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import Parser from "html-react-parser";
import MainHeader from "../MainHeader";
import InstructorsDetail from "./getInstructorDetail";
import ButtonApp from "../ButtonApp";

//import Contacts from '../common/Contacts';
//import UserCard from '../common/UserCard';
//import {API} from '../api';

// export class Delete extends React.Component {
//   constructor(props, context) {
//     super(props, context);
    
//     this.handleClick = this.handleClick.bind(this);
//   }
  
//   // the rest of code...
// }
// export class Search extends Component {

//   handleClick(){
//     console.log("algo");
//     this.props.findPokemon('eevee');
//     //console.log(this.refs.name);
//   }
// }

const CourseDetails = () => {
  //   const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const props = useParams();
  const id = props.id;
  console.log(id);
  const [courseDetail, setCourseDetail] = useState([]);
  const [instructors, setInstructors] = useState([]);
  

  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setIsLoading(true);

      fetch(`http://localhost:3001/courses/${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          setCourseDetail(data);
          setInstructors(data.instructors);
          
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

 

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }
  function formatDate(input) {
    var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
    if (!input || !input.match(pattern)) {
      return null;
    }
    return input.replace(pattern, "$3/$2/$1");
  }

  function handleClick(){
    console.log("clicked");
  };
 // const instructors = [courseDetail.instructors];
  console.log(instructors);

  
      if (courseDetail.dates) {
        courseDetail.dates.start_date = formatDate(courseDetail.dates.start_date);
        courseDetail.dates.end_date = formatDate(courseDetail.dates.end_date);
      }
    
  //console.log(courseDetail.description);
  if (courseDetail.description) {
    courseDetail.description = courseDetail.description.toString();

    console.log(courseDetail.description);
    return (
      <div>
        <h1>
          {courseDetail.title} ({courseDetail.id})
        </h1>
        <img
          src={courseDetail.imagePath}
          style={{ width: "1000px", height: "350px" }}
          alt="Course Logo"
        ></img>
        <div>Price: {courseDetail.price?.normal}€</div>
        <div>Bookable: {courseDetail.open && <CheckIcon />}</div>
        <div>Duration: {courseDetail.duration} </div>
        <div>
          Dates: {courseDetail.dates?.start_date} -{" "}
          {courseDetail.dates?.end_date}{" "}
        </div>
        {Parser(courseDetail.description)}
        <InstructorsDetail instr={courseDetail.instructors}/>
        <div>
          <ButtonApp msg="Edit"></ButtonApp>
          {/* <ButtonApp onChange={console.log('!')} msg="Delete"></ButtonApp> */}
          <button onChange={console.log('test')}>Delete</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CourseDetails;
