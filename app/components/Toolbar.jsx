"use strict";

var React = require('react');

var Toolbar = React.createClass({
    displayName: 'Toolbar',
    render: function () {
        return (
        	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
           		<div className="mdl-layout__drawer">
            		<span className="mdl-layout-title">Title</span>
            	</div>
            </div>
        )
    }
});

module.exports = Toolbar;