import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            {/* SUGIEREN QUE SE MANEJE CON UN DIV */}
            <div>

                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={ AboutScreen }/>
                        <Route exact path="/login" component={ LoginScreen }/>
                        <Route exact path="/" component={ HomeScreen }/>
                        {/* EN CASO DE QUE NO ENCUENTRE LA RUTA */}
                        {/* <Router component={ NotFound }/> */}
                        <Redirect to="/" />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
