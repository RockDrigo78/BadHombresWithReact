import React from 'react';
import './VideosList.css';

function VideosList(props){
  return (
  <div className="container VideosList">
    <div className="row text-center text-lg-left">
      {props.videos.map((video, id) => (
        <div key={id} className="col-lg-4 col-md-6 col-sm-12">
          <li className="VideoBox d-block mb-4 h-100">
            <iframe title={id} className="Video img-fluid img-thumbnail" src={video} frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </li>
        </div>
      ))}
    </div>  
  </div>
  );
}

export default VideosList;