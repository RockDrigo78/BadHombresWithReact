import React from 'react';
import { Link } from 'react-router-dom';
import './PhotosList.css'

function PhotosList(props){
    return (
    <div className="PhotosList">
        <div className="row">
          {props.photos.map(photo => (
            <div className="Photo col-lg-3 col-md-4 col-sm-6 text-center" key={photo}> 
            
              <Link className="link" to={`photos/${photo}`}>
                <img src={`/images/Photos/${photo}`} alt="foto"/>
              </Link>
                        
            </div>
          ))}
        </div>
    </div>
  );
}

export default PhotosList;