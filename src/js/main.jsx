//require("babelify/polyfill");

import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'

//var React = require('react');
//var ReactRouter = require('react-router');
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;
//var IndexRoute = ReactRouter.IndexRoute;

import App from './components/app.jsx'
import Index from './components/index.jsx'
import Servers from './components/servers.jsx'
import Donate from './components/donate.jsx'

//var App = require('./components/app.jsx');
//var Index = require('./components/index.jsx');
//var Servers = require('./components/servers.jsx');
//var Donate = require('./components/donate.jsx');

render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="servers" component={Servers} />
            <Route path="donate" component={Donate} />
        </Route>
    </Router>
), document.body)
