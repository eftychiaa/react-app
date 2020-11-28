// // import React, { useState, useEffect } from "react";
// // import { Spinner, Alert, ListGroup } from "react-bootstrap";
// // import { useParams, Link } from "react-router-dom";
// // // import CheckIcon from '@material-ui/icons/Check';

// // //import Contacts from '../common/Contacts';
// // //import UserCard from '../common/UserCard';
// // //import {API} from '../api';

// // const InstructorsDetail = ({ instructors }) => {
// //   //   const [contacts, setContacts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   //const  props = useParams();
// //   const id = '01';
// //   //console.log(instructors);
// //   const [instructorsDetail, setInstructorsDetail] = useState([]);

// //  //const {instructorsDetail} = {};
// //   useEffect(() => {
// //     const fetchData1 = () => {
// //       setError(false);
// //       setIsLoading(true);

// //         {instructors.map((id) => (
// //       fetch(`http://localhost:3001/instructors/${id}`)
// //         .then((response) => {
// //           if (response.ok) {
// //             return response.json();
// //           } else {
// //             throw new Error("Something went wrong ...");
// //           }
// //         })
// //         .then((data) => {
// //           //setInstructorsDetail[id](data);
// //           setInstructorsDetail(data);
// //           setIsLoading(false);
// //           console.log(instructorsDetail);
// //         })
// //         .catch((error) => {
// //           setError(error);
// //           setIsLoading(false);
// //         });
// //     };
// //   ))}

// //     fetchData1();
// //   }, []);

// //   if (error) {
// //     return <Alert variant="warning">{error.message}</Alert>;
// //   }

// //   if (isLoading) {
// //     return <Spinner animation="border" size="lg" />;
// //   }

// //   return (
// //     <div>
// //     <h4>Instructors</h4>

// //       {instructorsDetail.email}

// //       {/* <div>{instructorsDetail.name.first} {instructorsDetail.name.last} ({instructorsDetail.dob})</div> */}
// //       {/* <div>Email: {instructorsDetail.dob} | <span><Link to={`/${instructorsDetail.linkedin}`}>Linkedin</Link></span></div> */}
// //     </div>
// //   );
// // };

// //export default InstructorsDetail;
// import React, { useState, useEffect } from "react";
// import { Spinner, Alert, ListGroup } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";
// // import CheckIcon from '@material-ui/icons/Check';

// //import Contacts from '../common/Contacts';
// //import UserCard from '../common/UserCard';
// //import {API} from '../api';

// const InstructorsDetail = ({ props }) => {

//     const [isLoading, setLoading] = useState(false);
//     const [cocktails, setCocktails] = useState([]);

//     const DrinkList = [];

//     useEffect(() => {
//         const fetchCocktail = async (id) => {
//             const baseUrl = `http://localhost:3001/instructors/$`;
//             try {
//               const res = await fetch(`${baseUrl}` + id);
//               const data = await res.json();
//               return data.drinks;
//             } catch (err) {
//               console.log('Error fetching data');
//             }
//           }

//           fetchCocktail();
//     }, []);

//     setLoading(true);
//     var promises = [
//     fetchCocktail(`margarita`),
//     fetchCocktail(`martini`)
//     ];

//     const fetchCocktailList = async (promises) => {
//     var results = await Promise.all(promises);
//     setLoading(false);
//     DrinkList(results);
//     }

// }
// export default InstructorsDetail;

import React, { useState, useEffect } from "react";
import  { Link } from "react-router-dom";
// import { Spinner, Alert, ListGroup } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";
// import CheckIcon from '@material-ui/icons/Check';

// import Contacts from '../common/Contacts';
// import UserCard from '../common/UserCard';
// import {API} from '../api';

const InstructorsDetail = ({ instr }) => {
  const [isLoading, setLoading] = useState(false);
  const [instructorAll, setInstructorsDet] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // holds an error message in case the network request dosn't succeed
  const [instructors, setInstructors] = useState(instr); // the search queries for the `s` parameter at your API endpoint

  useEffect(() => {
    const fetchInstructorsLists = async (...instructors) => {
      const fetchInstructorsList = async (instructor) => {
        const baseUrl = `http://localhost:3001/instructors/${instructor}`;
        const url = new URL(baseUrl);
        //const params = new URLSearchParams({s: cocktailName});
        //url.search = params.toString(); // -> '?s=cocktailName'
        const res = await fetch(url.href); // -> 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktailName'
        const data = await res.json();
        const instructorsAll = data; // destructured form of: const drinkList = data.drinks;
        return instructorsAll;
      };

      setLoading(true);
      try {
        const promises = [];
        for (const instructor of instructors) {
          promises.push(fetchInstructorsList(instructor));
        }
        const instructorAll = await Promise.all(promises); // -> [[drink1, drink2], [drink3, drink4]]
        //const allInstructos = instructorAll.flat(1); // -> [drink1, drink2, drink3, drink4]
        setInstructorsDet(instructorAll);
        //console.log(instructorsDetail);
        console.log(instructorAll.length);
      } catch (err) {
        setErrorMessage(err.message /* or whatever custom message you want */);
      }
      setLoading(false);
    };

    fetchInstructorsLists(...instructors);

    //console.log(instructorsDet);
  }, [instructors, setInstructorsDet, setErrorMessage, setLoading]);

  return (
    //     <div>
    //     <h4>Instructors</h4>
    //     {instructorAll.map((stat) => (
    //         <div key={stat.id}>
    //         <span></span>
    //   ))}

    //     </div>
    <div >
      <div >
        <h1>Instructors</h1>
        <div >
          <div >
            {instructorAll.map((instruct) => (
              <div key={instruct.id} style={{marginBottom:20}}>
                <div>{instruct.name.first} {instruct.name.last} ({instruct.dob})</div> 
                <div>Email: <a href={`mailto:${instruct.email}`}>{instruct.email}</a> |<span><a href={`${instruct.linkedin}`}>{" "}Linkedin</a></span></div> 
                <div>{instruct.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetail;
