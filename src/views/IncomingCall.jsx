/** @jsx React.DOM */
Button = require('./Button.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="IncomingCall">
        <div className="CallHeader">
          <div className="avatar"></div>
          <div className="CallHeaderInfo">
            <h3>Aubrey Drake Graham</h3>
            <div id="incoming-call-icons" className="callTypeIcons">
              <i className="fa fa-microphone active"></i>
              <i className="fa fa-video-camera"></i>
            </div>
          </div>
        </div>
        <div className="ButtonGroup">
          <Button text="Ignore" hasRightChevron style="cancel"/>
          <Button text="Answer" icon="fa-video-camera" hasRightChevron style="action"/>
        </div>
      </div>
    )
  }
});
