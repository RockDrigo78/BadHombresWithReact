import React from 'react';
import { Link } from 'react-router-dom';
import './ShowsList.css';


function ShowsList(props){
    return (
      <div className="ShowsList">
        <div className="row">
          {props.shows.map(show => (
            <div className="col-lg-3 col-md-4 col-sm-6 text-center" key={show}>            
              <Link className="link" to={`shows/${show}`}>
                <img src={`/images/Shows/${show}`} alt="foto"/>
              </Link>                        
            </div>
          ))}
        </div>
      </div>
  );
}

export default ShowsList;