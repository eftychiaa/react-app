import React from 'react';
import {Jumbotron,Container} from 'reactstrap';
import JumbotronCard from "../Homepage/JumbotronCard";
import TableApp from "../Homepage/TableApp";



function FirstView  ()  {
 

  return (
      <div>
    <div >
    <Jumbotron style={{ backgroundColor: '#ccebff', height: '200px', marginTop:20 }}>
      <Container fluid >
        <h4 >Welcome to Code.Hub Dashboard!</h4>
        <p className="lead">Manage everything and have fun!</p>
      </Container>
    </Jumbotron>      
    </div>
    <JumbotronCard/>
    
    {/* <div style={{padding:'30px 50px'}}> */}
      <TableApp />

   
    </div>

  );
}

export default FirstView;