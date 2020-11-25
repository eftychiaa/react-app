import Box from '@material-ui/core/Box';
import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import DetailView from './getCourseDetails';
import ButtonApp from '../ButtonApp';
import InstructorsDetail from './getInstructorDetail'

const CourseDetails = () => {
 

    return (
        <div>
        <DetailView/>
        <ButtonApp  msg="Edit"></ButtonApp>
          <ButtonApp  msg="Delete"></ButtonApp>
        <h4>Instructors</h4>

        {/* <InstructorsDetail/> */}
        </div>
    );
  }
  
  export default CourseDetails;