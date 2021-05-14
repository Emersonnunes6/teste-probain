import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from "react";
import HomePage from '../pages/homePage/homePage';
import DetailCharacter from '../pages/detailCharacterPage/detailCharacter';
import DetailPlanet from '../pages/detailPlanetPage/detailPlanet';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>   
        <Route exact path="/details/character/:idCharacter">
            <DetailCharacter/>
        </Route> 
        <Route exact path="/details/planet/:idPlanet">
            <DetailPlanet/>
        </Route>   
      </Switch>
    </BrowserRouter>
  );
};

export default Router;