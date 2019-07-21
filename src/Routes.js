import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import ShowsList from './ShowsList';
import ShowDetails from './ShowDetails';
import PhotosList from './PhotosList';
import PhotoDetails from './PhotoDetails';
import VideosList from './VideosList';
import VideoDetails from './VideoDetails';
import ContactForm from './ContactForm';

class Routes extends Component {
  render() {    
    const getShow = props => {
      let name = props.match.params.name;
      let currentShow = this.props.shows.find( 
        show => show.toLowerCase() === name.toLowerCase()
      );
      return <ShowDetails {...props} show={currentShow} />;
    };

    const getPhoto = props => {
      let name = props.match.params.name;
      let currentPhoto = this.props.photos.find( 
        photo => photo.toLowerCase() === name.toLowerCase()
      );
      return <PhotoDetails {...props} photo={currentPhoto} />;
    };

    const getVideo = props => {
      let name = props.match.params.name;
      let currentVideo = this.props.videos[name];
      return <VideoDetails {...props} video={currentVideo} />;
    };

    return (
      <Switch>
        <Route exact path="/" render={()=><HomePage />}/>
        <Route exact path="/shows" render={()=><ShowsList shows={this.props.shows}/>}/>        
        <Route exact path="/shows/:name" render={getShow} />
        <Route exact path="/photos" render={()=><PhotosList photos={this.props.photos}/>}/>        
        <Route exact path="/photos/:name" render={getPhoto} />
        <Route exact path="/videos" render={()=><VideosList videos={this.props.videos}/>}/>        
        <Route exact path="/videos/:name" render={getVideo} />
        <Route exact path="/contact" render={()=><ContactForm />}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default Routes;