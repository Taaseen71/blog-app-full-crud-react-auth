import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";

const App = () => {
    return (

        <div className="App">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
            </nav>
            <Switch>
                <Route exact path="/home" render={props => <Home />} />
                <Route exact path="/posts" render={props => <Posts />} />
                <Route exact path="/posts/:id" component={Post} />
            </Switch>
        </div>

    );
}

export default App;
