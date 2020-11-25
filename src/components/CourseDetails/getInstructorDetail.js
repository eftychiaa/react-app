// import React, {useState, useEffect} from 'react';
// import {Spinner, Alert, ListGroup} from 'react-bootstrap';
// import { useParams, Link } from "react-router-dom";
// // import CheckIcon from '@material-ui/icons/Check';

// //import Contacts from '../common/Contacts';
// //import UserCard from '../common/UserCard';
// //import {API} from '../api';

// const InstructorsDetail = () => {
// //   const [contacts, setContacts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//     const  props = useParams();
//     const id = props.id;
//     console.log(id);
//      const [instructorsDetail, setInstructorsDetail] = useState([]);

//   useEffect(() => {
//     const fetchData1 = () => {
//       setError(false);
//       setIsLoading(true);

//     fetch(`http://localhost:3001/instructors/${id}`)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Something went wrong ...');
//         }
//       })
//       .then(data => {
//         setInstructorsDetail(data);
//         setIsLoading(false);
//         console.log(instructorsDetail);
//       })
//       .catch(error =>  {
//         setError(error);
//         setIsLoading(false);
//       })
//     };
 
//     fetchData1();
//   }, []);
  

//   if (error) {
//     return <Alert variant="warning">{error.message}</Alert>;
//   }

//   if (isLoading) {
//     return <Spinner animation="border" size="lg" />;
//   }

//   return (
//     <div>   
//       {instructorsDetail.gender} 
      
//         {/* <div>{instructorsDetail.name.first} {instructorsDetail.name.last} ({instructorsDetail.dob})</div> */}
//         {/* <div>Email: {instructorsDetail.dob} | <span><Link to={`/${instructorsDetail.linkedin}`}>Linkedin</Link></span></div> */}
//     </div>

//   );
// }

// export default InstructorsDetail;