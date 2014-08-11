/** @jsx React.DOM */
Button = require('./Button.jsx');
Utils = require('../utils/utils.js');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="IncomingCall">
        <div className="CallHeader">
          <div className="avatar unknown"></div>
          <div className="CallHeaderInfo">
            <h3 id="incoming-call-url">http://lo.op/{ Utils.getRandomString(8)}</h3>
            <div id="incoming-call-icons" className="callTypeIcons">
              <i className="fa fa-microphone active"></i>
              <i className="fa fa-video-camera active"></i>
              <h6 id="incoming-call-date">(May 26, 2014)</h6>
            </div>
          </div>
        </div>
        <div className="ButtonGroup">
          <Button text="Ignore" hasRightChevron style="cancel"/>
          <Button text="Answer" icon="fa-microphone" hasRightChevron style="action"/>
        </div>
      </div>
    )
  }
});
