/** @jsx React.DOM */
Button = require('./Button.jsx');
Utils = require('../utils/utils.js');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="CallEnded">
          <h3>Call Ended</h3>
          <h6>3:21</h6>
        <div className="ButtonGroup">
          <Button text="Close" style="cancel"/>
          <Button text="Call Back" style="emphasis" />
        </div>
      </div>
    )
  }
});
