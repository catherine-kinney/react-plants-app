import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import db from './config/firebase-setup';
import CreatePlant from './pages/CreatePlant';
import Home from './pages/Home';
import PlantList from './pages/PlantList';
import EditPlant from './pages/EditPlant';
import ShowPlant from './pages/ShowPlant';
import './App.css';

const plantsCol = collection(db, 'plants');

// let docRef = db.collection("plants").document("water")

export default class App extends Component {
  state = {
    plants: [],
    
  }


  createPlant = async newPlant => {
    await addDoc(plantsCol, newPlant);

    //Redirect the user to the /plants/add by pushing that route to this.props.history

    this.props.history.push('/plants/list');

    this.readPlants();
  }

  removePlant = async id => {
    const plantDoc = doc(plantsCol, id);

    await deleteDoc(plantDoc);

    // Redirect the user to the /puppies route
    // by pushing that route to this.props.history
    this.props.history.push('/plants/list');

    this.readPlants();
  }

updatePlant = async editedPlant => {
  const plantDoc = doc(plantsCol, editedPlant.id);

  await setDoc(plantDoc, editedPlant);
  this.props.history.push('/plants/list');
  this.readPlants();
}

  readPlants = async () => {
    const plantsSnapshot = await getDocs(plantsCol)

    const plantsData = [];
    plantsSnapshot.forEach(doc => {
      plantsData.push({
        id: doc.id,
        species: doc.data().species,
        water: doc.data().water,
        image: doc.data().image,
      });
    });

    this.setState({
      plants: plantsData
    });
  }

  componentDidMount() {
    this.readPlants();
  }

render() {
  
  return (
    <div className="App">
                <nav>
                <strong><NavLink exact to='/'>HOME</NavLink></strong>
                <strong><NavLink exact to='/plants/list'>PLANT PETS</NavLink></strong>
                <strong><NavLink exact to='/plants/add'>ADD PLANT</NavLink></strong>
          </nav>
          <header className="App-header">

        <main>
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/plants/add'>
            <CreatePlant createPlant={this.createPlant} />
            </Route>
            <Route exact path='/plants/list'>
            <PlantList 
              plantList={this.state.plants}
              removePlant={this.removePlant}
              />
              </Route>
              <Route path='/plants/edit' render={({ location }) =>
                <EditPlant updatePlant={this.updatePlant} 
                location={location} />
              } />
            <Route path='/plants/details' render={({ location}) =>
              <ShowPlant
                removePlant={this.removePlant}
                location={location}
              /> 
            } 
            />
          </Switch>
        </main>
        </header>
    </div>
  );
}
}