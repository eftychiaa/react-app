import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";

const InstructorsDetail = ({ instr }) => {
  const [isLoading, setLoading] = useState(false);
  const [instructorAll, setInstructorsDet] = useState([]);
  const [error, setErrorMessage] = useState(""); // holds an error message in case the network request dosn't succeed
  const [instructors, setInstructors] = useState(instr); // the search queries for the `s` parameter at your API endpoint

  useEffect(() => {
    const fetchInstructorsLists = async (...instructors) => {
      const fetchInstructorsList = async (instructor) => {
        const baseUrl = `http://localhost:3001/instructors/${instructor}`;
        const url = new URL(baseUrl);
        const res = await fetch(url.href); 
        const data = await res.json();
        const instructorsAll = data; 
        return instructorsAll;
      };

      setLoading(true);
      try {
        const promises = [];
        for (const instructor of instructors) {
          promises.push(fetchInstructorsList(instructor));
        }
        const instructorAll = await Promise.all(promises); // -> [[name1, email1], [name2, email2]]
        setInstructorsDet(instructorAll);

      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };

    fetchInstructorsLists(...instructors);

  }, [instructors, setInstructorsDet, setErrorMessage, setLoading]);

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }

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
