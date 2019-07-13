import React from 'react';
import './ShowDetails.css';
import { Link } from 'react-router-dom';

function ShowDetails(props){
  
  let {show} = props;

  return (
    
      <div className="ShowDetails row justify-content-center mt-5">
        <div className="col-11 col-5-lg">
          <div className="ShowDetails-card card">
            <img className="card-img-top" src={`/images/Shows/${show}`} alt={show}/>                        
          </div>
          <div className="card-body">
            <Link className="btn btn-dark" to="/shows">Go Back</Link>
          </div>
        </div>
      </div>     
  );
}

export default ShowDetails;