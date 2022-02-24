import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MovieList';
import Button from './utils/Button';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import routes from './route-config';
function App() {


  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          {routes.map(route => 
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          )}
          {/* <Route exact path="/">
            <Button children={<>My Button</>}></Button>
           
          </Route>

          <Route path="/genres">
            <IndexGenres></IndexGenres>
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
