import { Form } from "react-bootstrap";
import React from "react";

const  Calendar = ({id,label,placeholder,name,value,onChangeFunction}) =>{
 
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId={id}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type="date"
                name={name}
                placeholder={placeholder}
                value={value}
                // onChange={onChangeFunction}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  
}

export default Calendar;
