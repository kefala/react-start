"use strict";

var React = require('react');

var App = React.createClass({
    displayName: 'App',
    render: function (RouteHandler) {
    	return (
    		<div>			
    			{this.props.children}
    		</div>
    	);
    }
});

module.exports = App;


