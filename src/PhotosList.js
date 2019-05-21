import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PhotosList.css'


class PhotosList extends Component {
 
    render() {   
      return (
      <div className="PhotosList">
          <div className="row">
            {this.props.photos.map(d => (
              <div className="Photo col-lg-3 col-md-4 col-sm-6 text-center" key={d}> 
              
                <Link className="link" to={`photos/${d}`}>
                  <img src={`/images/Photos/${d}`} alt="foto"/>
                </Link>
                         
              </div>
            ))}
          </div>
      </div>
    );
  }
}

export default PhotosList;