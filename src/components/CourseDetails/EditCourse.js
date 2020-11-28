import React, { useState, useEffect, useCallback } from "react";
import { Spinner, Alert, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import Parser from "html-react-parser";
import MainHeader from "../MainHeader";
import InstructorsDetail from "./getInstructorDetail";
import ButtonApp from "../ButtonApp";
//import Button from 'react-bootstrap/Button';
import axios from "axios";
//import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
//import { useState } from "react";
import Calendar from "../Calendar";
import { FormText } from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import LastCourse from "../../LastCourse";
import FirstView from "../Homepage/FirstView";
import { Redirect } from "react-router-dom";
//import axios from "axios";
//import DeleteCourse from './DeleteCourse';
// import EditCourse from './EditCourse.js'
import { render } from "@testing-library/react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      height: 0,
      marginLeft: 0,
      width: "1500px",
    }}
  />
);

class EditCourse extends React.Component {
  newdateStart =
    this.props.location.state.coursePacket.dates.start_date
      .split("/")
      .reverse()
      .join("-") + "T10:00:00.000Z";
  newdateEnd =
    this.props.location.state.coursePacket.dates.end_date
      .split("/")
      .reverse()
      .join("-") + "T10:00:00.000Z";
  // formattedvalue1 = newdate + "T10:00:00.000Z";

  state = {
    open: this.props.location.state.coursePacket.open,
    instructors: this.props.location.state.coursePacket.instructors,
    dates: {
      start_date: this.newdateStart,
      end_date: this.newdateEnd,
    },
    price: {
      normal: this.props.location.state.coursePacket.price.normal,
      early_bird: this.props.location.state.coursePacket.price.early_bird,
    },
    item: {
      title: this.props.location.state.coursePacket.title,
      duration: this.props.location.state.coursePacket.duration,
      imagePath: this.props.location.state.coursePacket.imagePath,
      description: this.props.location.state.coursePacket.description,
    },
    redirectToNewPage: false,
  };
  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value }, () => console.log(this.state));
  //   // event.persist();

  //   // this.setState(prevState => ({
  //   //   title: { prevState.title,  [event.target.name]: event.target.value }
  //   // }))
  // };

  handleChange = (event) => {
    event.persist();

    this.setState((prevState) => ({
      item: { ...prevState.item, [event.target.name]: event.target.value },
    }));
  };

  handleChangeOpen = (event) => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleChangeDateStart(value, formattedValue) {
    this.setState(({ dates }) => {
      dates["start_date"] = [];
      if (value) {
        dates["start_date"] = [];
        dates.start_date = value?.split("T")[0];
        return dates;
      }
    });
  }

  handleChangeDateEnd(value, formattedValue) {
    // this.setState({
    //   value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
    //   formattedValue: formattedValue, // Formatted String, ex: "11/19/2016"
    // });
    this.setState(({ dates }) => {
      // let newInstructor = [...instructors];
      dates["end_date"] = [];
      dates.end_date = value?.split("T")[0];
      return dates;
      //return { instructors: newInstructor };
    });
  }

  handleChangeCheckbox = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    this.setState(({ instructors }) => {
      let newInstructor = [...instructors];
      if (checked) {
        newInstructor = newInstructor.concat(value);
      } else {
        const index = newInstructor.indexOf(value);
        if (index > -1) {
          newInstructor.splice(index, 1);
        }
      }

      return { instructors: newInstructor };
    });
  };

  handleChangePrice = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(({ price }) => {
      if (name === "normal") {
        price["normal"] = [];
        price.normal = value;
      } else if (name === "early_bird") {
        price["early_bird"] = [];
        price.early_bird = value;
      }

      return price;
      //     return { instructors: newInstructor };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.dates.start_date !== "null" &&
      this.state.dates.start_date !== "null" &&
      this.state.dates.start_date > this.state.dates.end_date
    ) {
      alert("The start date can't be after the end date! Please try again");
    } else if (this.state.instructors.length === 0) {
      
      alert("You should select at least one instructor!");
    } else if (
      parseInt(this.state.price.normal) < parseInt(this.state.price.early_bird)
    ) {
      alert(
        "The early bird price seems to be greater than the normal price. Please try again"
      );
    }else if(parseInt(this.state.price.normal)<0 || parseInt(this.state.price.early_bird)<0){
      alert(
        "Prices should not have negative value. Please try again"
      );
    }
     else {
      event.preventDefault();
      // Simple PUT request with a JSON body using fetch
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          //id: this.props.location.state.coursePacket.id,
          title: this.state.item.title,
          imagePath: this.state.item.imagePath,
          price: {
            normal: parseInt(this.state.price.normal),
            early_bird: parseInt(this.state.price.early_bird),
          },
          dates: {
            start_date: this.state.dates.start_date,
            end_date: this.state.dates.end_date,
          },
          duration: this.state.item.duration,
          open: this.state.open,
          instructors: this.state.instructors,
          description: this.state.item.description,
        }),
      };
      fetch(
        `http://localhost:3001/courses/${this.props.location.state.coursePacket.id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then(this.setState({ redirectToNewPage: true }))
        .then((data) => this.setState({ postId: data.id }));
    }
  };

  render() {
    //this.props.location.state.coursePacket.dates.end_date = this.props.location.state.coursePacket.dates.end_date.split("/").reverse().join("-")+ "T10:00:00.000Z";
    const { coursePacket } = this.props.location.state;
    if (this.state.redirectToNewPage) {
      return <Redirect to="/" />;
    }
    return (
      <Form
        style={{ marginTop: "10px", backgroundColor: "aliceblue" }}
        onSubmit={this.handleSubmit}
      >
        <h4 style={{ marginLeft: 15 }}>Edit Course</h4>
        <FormGroup style={{ marginLeft: 15 }}>
          <Label for="title" sm={2}>
            Title:
          </Label>
          <Col className="col-sm-10">
            <Input
              value={this.state.item.title}
              onChange={this.handleChange}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup style={{ marginLeft: 15 }}>
          <Label for="duration" sm={2}>
            Duration:
          </Label>
          <Col className="col-sm-10">
            <Input
              value={this.state.item.duration}
              onChange={this.handleChange}
              type="text"
              name="duration"
              id="duration"
              placeholder="Duration"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup style={{ marginLeft: 15 }}>
          <Label for="image" sm={2}>
            Image path:
          </Label>
          <Col className="col-sm-10">
            <Input
              value={this.state.item.imagePath}
              onChange={this.handleChange}
              type="text"
              name="imagePath"
              id="imagePath"
              placeholder="Image path"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup style={{ marginLeft: 15 }}>
          <Label for="isBookable" sm={2}></Label>
          <Col sm={{ size: 12 }}>
            <FormGroup check>
              <Label check>
                <Input
                  value={this.state.open}
                  onChange={this.handleChangeOpen}
                  type="checkbox"
                  name="isBookable"
                  id="isBookable"
                  checked={this.state.open}
                />{" "}
                Bookable
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup tag="fieldset" style={{ marginLeft: 15 }}>
          <legend className="col-form-label col-sm-2">Instructors</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input
                  value="01"
                  type="checkbox"
                  name="instructor01"
                  id="instructor01"
                  checked={this.state.instructors.includes("01")}
                  onChange={this.handleChangeCheckbox}
                />{" "}
                John Tsevdos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  value="02"
                  type="checkbox"
                  name="instructor02"
                  id="instructor02"
                  checked={this.state.instructors.includes("02")}
                  onChange={this.handleChangeCheckbox}
                />{" "}
                Yiannis Nikolakopoulos
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup style={{ marginLeft: 15 }}>
          <Label for="text" sm={2}>
            Description:
          </Label>
          <Col sm={10}>
            <Input
              value={this.state.item.description}
              onChange={this.handleChange}
              type="textarea"
              name="description"
              id="text"
              required
            />
          </Col>
        </FormGroup>
        <ColoredLine color="black" />
        <FormGroup tag="fieldset" style={{ marginLeft: 15 }}>
          <legend className="col-form-label col-sm-2">Dates</legend>
          <Col sm={10}>
            <FormGroup>
              <Label for="startDate" sm={2}>
                Start date:
              </Label>
              <Col className="col-sm-10">
                {/* <Input
                  // type="password"
                  name="startDate"
                  id="startDate"
                  placeholder="Start date"
                /> */}
                {/* <FormGroup> */}
                {/* <Label>My Date Picker</Label> */}
                <DatePicker
                  id="startDate"
                  value={this.state.dates.start_date}
                  onChange={(v, f) => this.handleChangeDateStart(v, f)}
                />
                <FormText>Help</FormText>
                {/* </FormGroup> */}
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="endDate" sm={2}>
                End date:
              </Label>
              <Col className="col-sm-10">
                <DatePicker
                  id="endDate"
                  value={this.state.dates.end_date}
                  onChange={(v, f) => this.handleChangeDateEnd(v, f)}
                />
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" style={{ marginLeft: 15 }}>
          <legend className="col-form-label col-sm-2">Price</legend>
          <Col sm={10}>
            <FormGroup>
              <Label for="earlyBird" sm={2}>
                Early Bird:
              </Label>
              <Col className="col-sm-10">
                <Input
                  value={this.state.price.early_bird}
                  onChange={this.handleChangePrice}
                  pattern="[0-9]\.\,"
                  type="number"
                  id="earlyBird"
                  placeholder="0"
                  name="early_bird"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="normalPrice" sm={2}>
                Normal price:
              </Label>
              <Col className="col-sm-10">
                <Input
                  pattern="[0-9]\.\,"
                  type="number"
                  name="normal"
                  id="normalPrice"
                  placeholder="0"
                  value={this.state.price.normal}
                  onChange={this.handleChangePrice}
                  required
                />
              </Col>
            </FormGroup>
            <ColoredLine color="black" />
          </Col>
        </FormGroup>
        <FormGroup style={{ paddingLeft: 1200 }} check row>
          <Col sm={{ size: 12, offset: 2 }}>
            <Button style={{ backgroundColor: "#3f51b5" }}>
              Submit changes
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default EditCourse;
