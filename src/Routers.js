
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Base from './components/Layout/Base.js';
import Basepages from './components/Layout/Basepages.js';
import HomeComponent from './components/Home';
import LoginComponent from './components/Auth/Login';
import Register from './components/Auth/Register';
import Candidate from './components/Candicate';
import EmployersComponent from './components/Employers';



const Routers = (data) => {
    if (data.token === "") {
        return (
            <Basepages>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/register" component={Register} />
                    <Route exact path="/candidate" component={LoginComponent} />
                    <Route exact path="/employers" component={LoginComponent} />
                    <Redirect path="*" to="/" />
                </Switch>
            </Basepages>
        )
    }
    else {
        return (
            <Basepages>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/candidate" component={Candidate} />
                    <Route exact path="/employers" component={EmployersComponent} />
                    <Redirect path="*" to="/" />
                </Switch>
            </Basepages>
        );
    }
}


export default Routers;