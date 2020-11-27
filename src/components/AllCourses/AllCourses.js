import Course from "../AllCourses/Course";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { GridList } from "@material-ui/core";
import App from "../../App.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AllCourses() {
  //const { id } = useParams();
  const url = `http://localhost:3001/courses`;

  // const classes = useStyles();

  //const Test = () => {
  const [courseCard, setCourseCard] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      //setError(false);
      //setIsLoading(true);

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          setCourseCard(data);
          console.log(data);
          //setIsLoading(false);
        })
        .catch((error) => {
          // setError(error);
          //setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  function formatDate(input) {
    var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
    if (!input || !input.match(pattern)) {
      return null;
    }
    return input.replace(pattern, "$2/$3/$1");
  }

  if (courseCard.length > 0) {
    for (var i = 0; i < courseCard.length; i++) {
      if (courseCard[i].dates) {
        courseCard[i].dates.start_date = formatDate(
          courseCard[i].dates.start_date
        );
        courseCard[i].dates.end_date = formatDate(courseCard[i].dates.end_date);
      }
    }
  }

  return (
    <div>
      <h1>All Courses</h1>
      <div className="marginLeft50">
        <GridList cols={3} cellHeight={"auto"}>
          {courseCard.map((courseCard) => (
            <div key={courseCard.id}>
              <Course
                id={courseCard.id}
                title={courseCard.title}
                img={courseCard.imagePath}
                price={courseCard.price?.normal}
                isBookable={courseCard.open}
                duration={courseCard.duration}
                dateStart={courseCard.dates?.start_date}
                dateEnd={courseCard.dates?.end_date}
              ></Course>
            </div>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default AllCourses;
