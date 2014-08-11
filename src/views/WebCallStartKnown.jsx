/** @jsx React.DOM */
WebPage = require('./WebPage.jsx');
WebPanel = require('./WebPanel.jsx');
Button = require('./Button.jsx');

module.exports = React.createClass({
  gotoCall: function(){
    window.location.hash = 'connecting';
  },
  render: function() {
    return (
      <WebPage>
        <div className="WebColumn">
          <WebPanel>
            <div className="HelloLogo" />
            <div className="Avatar" />
            <h1>Ally Avocado</h1>
            <h4>(from May 26, 2014)</h4>
          </WebPanel>
          <h3>Click Call to start a video chat!</h3>
          <div className="ButtonGroup">
            <Button text="Call" icon="fa-video-camera" hasRightChevron onClick={this.gotoCall} style="action" />
          </div>
        <h6>By using Firefox Hello!, you agree to the <a>Terms of Use</a> and <a>Privacy Notice</a></h6>
        <div className="MozillaLogo" />
        </div>
      </WebPage>
    );
  }
});
