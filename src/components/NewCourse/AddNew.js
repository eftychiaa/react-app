// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const AddNew = (props) => {
//   return (
//     <Form>
//       <FormGroup>
//         <Label for="exampleEmail">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Select</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Select Multiple</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Text Area</Label>
//         <Input type="textarea" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           This is some placeholder block-level help text for the above input.
//           It's a bit lighter and easily wraps to a new line.
//         </FormText>
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <legend>Radio Buttons</legend>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option one is this and that—be sure to include why it's great
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option two can be something else and selecting it will deselect option one
//           </Label>
//         </FormGroup>
//         <FormGroup check disabled>
//           <Label check>
//             <Input type="radio" name="radio1" disabled />{' '}
//             Option three is disabled
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" />{' '}
//           Check me out
//         </Label>
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }

// export default AddNew;



// // import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
// // import React from 'react';
// //  function AddNew (){
// //      return(
// //          <div>
// //                  <FormControl>
// //         <InputLabel htmlFor="my-input">Email address</InputLabel>
// //         <Input id="my-input" aria-describedby="my-helper-text" />
// //         <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
// //         </FormControl> 
// //         </div>

// //      )}

// // export default AddNew;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,            
            height: 0,
            marginLeft: 0,
            width: '1500px'
        }}
    />
);

export default function App() {
  return (
    <div>
      <Form style={{marginLeft:'20px', marginTop:'10px'}}>
      <h4>Add Course</h4>      
        <FormGroup >
          <Label for="password" sm={2}>
            Title:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="password" sm={2}>
            Duration:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="password" sm={2}>
            Image path:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="checkbox2" sm={2}>            
          </Label>
          <Col sm={{ size: 12 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Bookable
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup tag="fieldset" >
          <legend className="col-form-label col-sm-2">Instructors</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="fruit" /> John Tsevdos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="fruit" /> Yiannis Nikolakopoulos
              </Label>
            </FormGroup>           
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup >
          <Label for="text" sm={2}>
            Description:
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="text" />
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup tag="fieldset" >
          <legend className="col-form-label col-sm-2">Dates</legend>
          <Col sm={10}>
          <FormGroup >
          <Label for="password" sm={2}>
           Start date:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="password" sm={2}>
            End date:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>           
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" >
          <legend className="col-form-label col-sm-2">Price</legend>
          <Col sm={10}>
          <FormGroup >
          <Label for="password" sm={2}>
           Early Bird:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="password" sm={2}>
            Normal price:
          </Label>
          <Col className="col-sm-10">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>           
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 12, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>        
      </Form>
    </div>
  );
}