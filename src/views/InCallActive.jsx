/** @jsx React.DOM */
BaseStateCorner = require('./BaseStateCorner.jsx');
Window = require('./Window.jsx');
VideoCall = require('./VideoCall.jsx');

module.exports = React.createClass({
  render: function() {
    return (
        <BaseStateCorner name={ this.props.name } index={ this.props.index }>
          <Window extraClass="InCall" items={ this.props.items } title="Aubrey Drake Graham">
            <VideoCall />
          </Window>
        </BaseStateCorner>
    );
  }
});
