import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import ShowsList from './ShowsList';
import PhotosList from './PhotosList';
import VideosList from './VideosList';
import ContactForm from './ContactForm';

class Routes extends Component {
  render() {    
    // const getDog = props => {
    //   let name = props.match.params.name;
    //   let currentDog = this.props.dogs.find( 
    //     dog => dog.name.toLowerCase() === name.toLowerCase()
    //   );
    //   return <DogDetails {...props} dog={currentDog} />;
    // };

    return (
      <Switch>
        <Route exact path="/" render={()=><HomePage />}/>
        <Route exact path="/shows" render={()=><ShowsList />}/>
        <Route exact path="/photos" render={()=><PhotosList />}/>
        <Route exact path="/videos" render={()=><VideosList />}/>
        <Route exact path="/contact" render={()=><ContactForm />}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default Routes;