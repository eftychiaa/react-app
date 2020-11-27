//import React from "react";
import { useState, useEffect } from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import ButtonApp from "../ButtonApp";
// import CheckIcon from "@material-ui/icons/Check";
// import InfoIcon from "@material-ui/icons/Info";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

export default function LastCourse() {
  //const classes = useStyles();

  //const Test = () => {
  const [courses, setCourses] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      //setError(false);
      //setIsLoading(true);

      fetch("http://localhost:3001/courses")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          setCourses(data.slice(data.length - 4));
          // formatDate(data.dates.start_date);
          //setIsLoading(false);
        })
        .catch((error) => {
          // setError(error);
          //setIsLoading(false);
        });
    };

    fetchData();
  }, []);
}
