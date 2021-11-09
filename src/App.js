import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { collection, addDoc  } from 'firebase/firestore/lite';
import db from './config/firebase-setup';
import CreatePlant from './pages/CreatePlant';
import Home from './pages/Home';
import './App.css';

const plantsCol = collection(db, 'plants');

export default class App extends Component {
  state = {
    plants: [],
  }

  createPlant = async newPlant => {
    await addDoc(plantsCol, newPlant);
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
                {/* Insert navlink for ALL PUPPIES that links to the ListPuppies.js page */}
                {/* Insert navlink for ADD PUPPY that links to the CreatePuppy.js page */}
                <div><NavLink exact to='/plants/add'>ADD PLANT</NavLink></div>
                <div><NavLink exact to='/'>HOME</NavLink></div>
          </nav>
        <p>
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <CreatePlant createPlant={this.createPlant} />
          </Switch>
        </p>
      </header>
      <main>
      </main>
    </div>
  );
}
}