import React, {useState, useEffect} from 'react';
import {Spinner, Alert} from 'react-bootstrap';
import {Jumbotron,Container} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import App from '../../App.css';
import { Badge } from 'reactstrap';

const JumbotronCard = () => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setIsLoading(true);

    fetch('http://localhost:3001/stats')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setStats(data);
        setIsLoading(false);
      })
      .catch(error =>  {
        setError(error);
        setIsLoading(false);
      })
    };
 
    fetchData();
  }, []);

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }

  return (
    <div>
        <Grid container spacing={3}>
        {stats.map((stat) => 
        <Grid item xs key={stat.id}>
        <Jumbotron style={{ backgroundColor: '#E8FAFF',padding: 35, height: 5,width:'250px', border:'2px solid' }}>
          <Container fluid style={{width:'120%', marginTop:'-14px' }} >
          <div>          
            <span className="lead toUpper">{stat.title}</span>
            :  
            <Badge variant="light" style={{marginLeft:'8px'}}>{stat.amount}</Badge> 
            </div>
          </Container>
        </Jumbotron>
        </Grid>    
      )}

        </Grid>
    </div>

  );
}

export default JumbotronCard;