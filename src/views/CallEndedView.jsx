/** @jsx React.DOM */
BaseStateCorner = require('./BaseStateCorner.jsx');
Window = require('./Window.jsx');
CallEnded = require('./CallEnded.jsx');

module.exports = React.createClass({
  render: function() {
    return (
        <BaseStateCorner name={ this.props.name } index={ this.props.index }>
          <Window items={ this.props.items } title="" type="">
            <CallEnded />
          </Window>
        </BaseStateCorner>
    );
  }
});
