import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowsList.css'


class ShowsList extends Component {

  render() {   
    return (
    <div className="ShowsList">
        <div className="row">
          {this.props.shows.map(d => (
            <div className="col-lg-3 col-md-4 col-sm-6 text-center" key={d}>            
              <Link className="link" to={`shows/${d}`}>
                <img src={`/images/Shows/${d}`} alt="foto"/>
              </Link>                        
            </div>
          ))}
        </div>
    </div>
  );
}
}

export default ShowsList;