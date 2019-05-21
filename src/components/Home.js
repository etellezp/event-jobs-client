import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container-fluid vh-100 m-0 p-0">
    <div className="row align-items-center text-center">
      <div className="col align-self-center">
        <h1 className="display-1 font-weight-bold text-white my-5">Uncubicle</h1>
        <h4 className="text-white font-weight-light w-50 mx-auto mb-5">
          Welcome to Uncublicle, the platform where you can find great talent for your next big event.
        </h4>
        <button type="button" className="btn btn-primary p-2 mr-3"><Link to="/profiles">Check Profiles</Link></button>
      </div>
    </div>
  </div>

)

export default Home;
