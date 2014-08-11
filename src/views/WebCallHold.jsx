/** @jsx React.DOM */
WebCall = require('./WebCall.jsx')
WebFooter = require('./WebFooter.jsx')
module.exports = React.createClass({
  getInitialState: function(){
    return {
      time: new moment()
    }
  },
  gotoEnd: function(){
    window.location.hash = 'call-terminated';
  },
  render: function() {
    return (
      <WebCall>
        <div className="VideoScreen Hold">
          <header>
            <div className="Logo" />
            <div className="FriendlyName">
              Ally Avocado
            </div>
          </header>

          <div className="VideoCaption">
            <span>Call on Hold</span>
          </div>

        <div className="VideoPreview" />
        <div className="VideoControls">
          <Button text="End Call" style="cancel" onClick={this.gotoEnd} />
          <i className="fa fa-video-camera" />
          <i className="button fa fa-microphone-slash"></i>
          <span className="time">{ this.state.time.format('m:ss') }</span>
        </div>

        </div>
        <div className="VideoPreviewMobile" />
        <div className="VideoControlsMobile">
          <Button text="Call Back" style="action" onClick={this.gotoEnd} />
          <i className="fa fa-video-camera" />
          <i className="button fa fa-microphone-slash active"></i>
          <span className="time">{ this.state.time.format('m:ss') }</span>
        </div>
        <WebFooter />
      </WebCall>
    );
  }
});
