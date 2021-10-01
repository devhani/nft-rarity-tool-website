import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LandingPage } from './pages/LandingComponent';
import Home from './pages/HomeComponent';

const Main = () => {
    return (
        <>
            {/** Place header here */}
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/home' component={Home} />
                <Redirect to='/' />
            </Switch>
        </>
    )
}
export default Main;