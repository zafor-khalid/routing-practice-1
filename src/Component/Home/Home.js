import React from 'react';
import Friends from '../Friends/Friends';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import Details from '../Details/Details';
const Home = () => {


    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/friends">
                        <Friends />
                    </Route>
                    <Route exact path="/">
                        <Friends />
                    </Route>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;