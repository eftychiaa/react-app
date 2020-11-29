import React from "react";
import { Jumbotron, Container } from "reactstrap";
import JumbotronCard from "../Homepage/JumbotronCard";
import TableApp from "../Homepage/TableApp";

function FirstView() {
  return (
    <div id="firstView" style={{marginLeft:20, marginRight:20}}>
      <div>
        <Jumbotron
          style={{ backgroundColor: "#ccebff", height: "200px", marginTop: 20 }}
        >
          <Container fluid>
            <h4>Welcome to Code.Hub Dashboard!</h4>
            <p className="lead">Manage everything and have fun!</p>
          </Container>
        </Jumbotron>
      </div>
      <JumbotronCard />
      <TableApp />
    </div>
  );
}

export default FirstView;
