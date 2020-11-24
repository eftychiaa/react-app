import React from 'react';
import {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonApp from '../ButtonApp';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
//import App from '../../App.css'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





const useStyles = makeStyles({
  table: {
    width: 1000,
  },
});

export default function TableApp() {
  const classes = useStyles();

  //const Test = () => {
    const [courses, setCourses] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);
    //const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      //setError(false);
      //setIsLoading(true);
  
    fetch('http://localhost:3001/courses')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setCourses(data);
        //setIsLoading(false);
      })
      .catch(error =>  {
       // setError(error);
        //setIsLoading(false);
      })
    };
  
    fetchData();
  }, []);

  return (
    <TableContainer className={classes.table} component={Paper} style={{pading:'40px 70px'}}>
    <caption><div>Last {courses.length} courses</div></caption>
      <Table className={classes.table} aria-label="customized table">
      <caption><ButtonApp align="right" link="allCourses" msg='View All'></ButtonApp></caption>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Bookable</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>           
          
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <StyledTableRow key={course.id}>
              <StyledTableCell component="th" scope="row"><InfoIcon/></StyledTableCell>
              <StyledTableCell align="right">{course.title}</StyledTableCell>
              <StyledTableCell align="right">{course.open && <CheckIcon/>}</StyledTableCell>
              <StyledTableCell align="right">{course.price.normal}€</StyledTableCell>
              <StyledTableCell align="right">{course.dates.start_date} - {course.dates.end_date}</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonApp link="course" msg="View Details"></ButtonApp>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
//}
}
