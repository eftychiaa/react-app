import React from "react";
import { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonApp from "../ButtonApp";
import CheckIcon from "@material-ui/icons/Check";
import InfoIcon from "@material-ui/icons/Info";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function formatDate(input) {
  var pattern = /(\d{4})-(\d{2})-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, "$3/$2/$1");
}

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

export default function TableApp() {
  const classes = useStyles();

  //const Test = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setIsLoading(true);

      fetch("http://localhost:3001/courses")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          if (data.length >= 5) {
            setCourses(data.slice(data.length - 5));
          } else {
            setCourses(data);
          }
          // formatDate(data.dates.start_date);
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

  // if (courses.length > 0) {
  //   for (var i = 0; i < courses.length; i++) {
  //     if (courses[i].dates) {
  //       courses[i].dates.start_date = formatDate(courses[i].dates.start_date);
  //       courses[i].dates.end_date = formatDate(courses[i].dates.end_date);
  //     }
  //   }
  // }

  return (
    <div>
      <Toolbar style={{backgroundColor: '#FAFAFA'}}>
        <Typography 
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
         Last {courses.length} courses
        </Typography>
      </Toolbar>

      <TableContainer
        className={classes.table}
        component={Paper}
        style={{ pading: "40px 70px" }}
      >
        {/* <caption><div>Last {courses.length} courses</div></caption> */}
        <Table className={classes.table} aria-label="customized table">
          <caption style={{ paddingLeft: 1470, backgroundColor: '#FAFAFA' }}>
          <Link to="/allCourses">
            <ButtonApp  msg="View All"></ButtonApp>
            </Link>
          </caption>
          <TableHead>
            <TableRow>
              <StyledTableCell width="20"></StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Bookable</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <StyledTableRow key={course.id}>
                <StyledTableCell component="th" scope="row">
                  <InfoIcon />
                </StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.open && <CheckIcon />}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {course.price?.normal}€
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatDate(course.dates.start_date)} - {formatDate(course.dates.end_date)}
                </StyledTableCell>
                <StyledTableCell align="center">
                <Link to={`courses/${course.id}`}>
                  <ButtonApp
                    variant="primary"                    
                    msg="View Details"
                    color="blue"
                  ></ButtonApp>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
  //}
}
