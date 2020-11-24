import ButtonAppBar from "../src/components/ButtonAppBar";
//import AddNew from "../src/components/NewCourse/AddNew";
import FirstView from "../src/components/Homepage/FirstView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">      
      <ButtonAppBar/>
        <div className="w-4/5 mx-auto mt-20">
          <Switch>
            <Route exact path="/" component={FirstView} />
            <Route
              exact
              path="/test"
              component={ButtonAppBar}
            />
             {/* <Route exact path="/addNewCourse"
              component={AddNew}
            /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
