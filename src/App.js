import MainHeader from "./components/MainHeader";
import AllCourses from "./components/AllCourses/AllCourses";
//import AddNew from "../src/components/NewCourse/AddNew";
import FirstView from "../src/components/Homepage/FirstView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import AddNew from "./components/NewCourse/AddNew";
import EditCourse from './components/CourseDetails/EditCourse'


function App() {
  return (
    <Router>
      <div className="App">      
      <MainHeader/>
        <div className="w-4/5 mx-auto mt-20">
          <Switch>
            <Route exact path="/" component={FirstView} />
            <Route
              
              path="/test"
              component={MainHeader}
            />
              <Route exact path="/addNewCourse"
              component={AddNew}
            /> 
            <Route              
              path="/allCourses"
              component={AllCourses}
            />
             <Route              
              path="/courses/:id"
              component={CourseDetails}
            />
            <Route              
              path="/editCourse"
              component={EditCourse}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
