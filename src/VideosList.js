import React from 'react';
import { Link } from 'react-router-dom';
import './VideosList.css';
 
function VideosList(props) {
    return (
      <div className="VideosList">
        <div className="row">    
          {props.videos.map((video, id) => (
            <div className="col-lg-3 col-md-4 col-sm-6 text-center" key={id}>
              <Link className="link" to={`videos/${id}`}>
                <img src={`http://img.youtube.com/vi/${video}/0.jpg`} alt="videoThumbnail"/>
                <p className="playButton"></p>            
              </Link>
            </div>
          ))}
        </div>  
      </div>
    );  
}

export default VideosList;