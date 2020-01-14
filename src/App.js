import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import Planets from './components/Planets';
import People from './components/People';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.co/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    async function fetchPeople(){
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets(){
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchFilms();
    fetchPeople();
    fetchPlanets();
  }, [])
  return (
    <>
      <Router>
        <Navbar/>
        <Container>
          { loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/' >
                <Home/>
              </Route>
              <Route exact path='/movies'>
                <Movies data={films}/>
              </Route>
              <Route exact path='/people'>
                <People data={people}/>
              </Route>
              <Route exact path='/planets'>
                <Planets data={planets} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
      
  );
}

export default App;
