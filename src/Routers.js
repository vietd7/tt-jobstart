
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Base from './components/Layout/Base.js';
import Basepages from './components/Layout/Basepages.js';
import HomeComponent from './components/Home';
import LoginComponent from './components/Auth/Login';
import Register from './components/Auth/Register';



const Routers = (data) => {
    if (data.token === "") {
        return (
            <Basepages>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                      <Route path="/login" component={LoginComponent} />
                    <Route path="/register" component={Register} />
                    <Redirect path="*" to="/" />  
                </Switch>
            </Basepages>
        )
    }
    else {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingComponent} />
                    <Base>
                        <Switch>
                             
                                    {/* <Route exact
                                        key={index + key + ""}
                                        path={val.href}
                                        component={val.component}
                                    /> */}
                              
                            <Redirect path="*" to={data.rules === "user" ? "/user/home" : "/admin/home"} />
                        </Switch>
                    </Base>
                </Switch>
            </div>
        );
    }
}


export default Routers;