/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');
TabBar = require('./TabBar.jsx');
Panel = require('./Panel.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="StateWrapper">
        <h3 className="higher"><span className="counter">{ this.props.index + 1 }</span> { this.props.name }</h3>
        <div className="ToolbarReal">
          <div id="icon-normal" className="ToolbarIcon normal"></div>
          <div id="icon-disabled" className="ToolbarIcon disabled"></div>
          <div id="icon-active" className="ToolbarIcon active">
            <div className="overlay"></div>
          </div>
          <div id="icon-error" className="ToolbarIcon error"></div>
          <div id="icon-action" className="ToolbarIcon action">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    );
  }
});
