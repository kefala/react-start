"use strict";
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


var Toolbar = require('./components/Toolbar.jsx');
var App = require('./app.jsx');


ReactDOM.render(
	<ReactRouter.Router history={ReactRouter.browserHistory}>
    	<ReactRouter.Route path="/" component={App}>
    		<ReactRouter.Route path="app" component={Toolbar}/>
    	</ReactRouter.Route>
    </ReactRouter.Router>
, document.getElementById('app'));