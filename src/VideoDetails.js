import React from 'react';
import './VideoDetails.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoDetails(props){
  
  let {video} = props;

  return (    
      <div className="container">
        <div className="videoWrapper">
            <ReactPlayer 
              className="player"
              url={`https://www.facebook.com/somebadhombres/videos/${video}/`} 
              width={"80vh"}    
              height={"auto"}   
              controls       
              volume={0.2}
              playing={"true"}                   
            />           
          <div className="button">
            <Link className="btn btn-dark" to="/videos">Go Back</Link>
          </div>
        </div>
      </div>
  );
}

export default VideoDetails;