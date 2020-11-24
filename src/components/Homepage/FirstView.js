import React from 'react';
import {Jumbotron,Container} from 'reactstrap';
import JumbotronCard from "../Homepage/JumbotronCard";
import TableApp from "../Homepage/TableApp";



const FirstView = () => {
 

  return (
      <div>
    <div style={{padding:'20px 0px'}}>
    <Jumbotron style={{ backgroundColor: '#D8EDFF', height: '200px' }}>
      <Container fluid style={{padding:'20px'}}>
        <h1 className="display-3">Welcome to Code.Hub Dashboard!</h1>
        <p className="lead">Manage everything and have fun!</p>
      </Container>
    </Jumbotron>      
    </div>
    <JumbotronCard/>
    
    <div style={{padding:'30px 50px'}}>
      <TableApp/>

    </div>
    </div>

  );
}

export default FirstView;