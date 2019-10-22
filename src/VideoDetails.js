import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './VideoDetails.css';

function VideoDetails(props){
  
  let {video} = props;

  return (    
      <div className="video-container"> 
      <div className="button-video container-item">
        <Link className="btn btn-dark" to="/videos">Go Back</Link>
      </div>
        <div className="player-wrapper container-item">
            <ReactPlayer 
              className="react-player"
              url={`https://www.facebook.com/somebadhombres/videos/${video}/`} 
              controls   
              width='100%'
              height='100%'    
              volume={0.2}
              playing={"true"}                   
            />
        </div> 
      </div>
  );
}

export default VideoDetails;