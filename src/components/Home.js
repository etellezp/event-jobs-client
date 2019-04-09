import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


const Home = () => (
  <div>
    <h2>Hello World</h2>
    <Button outline color="primary"><Link to="/profiles">Check Profiles</Link></Button>
  </div>

)

export default Home;
