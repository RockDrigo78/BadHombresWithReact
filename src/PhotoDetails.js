import React from 'react';
import './PhotoDetails.css';
import { Link } from 'react-router-dom';

function PhotoDetails(props){
     
  let {photo} = props;

  return (     
      <div className="PhotoDetails row justify-content-center mt-5">
        <div className="col-11 col-5-lg">
          <div className="PhotoDetails-card card">
            <img className="card-img-top" src={`/images/Photos/${photo}`} alt={photo}/>                        
          </div>
          <div className="card-body">
            <Link className="btn btn-dark" to="/photos">Go Back</Link>
          </div>
        </div>
      </div>     
  );
}

export default PhotoDetails;