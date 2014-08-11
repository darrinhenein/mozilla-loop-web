/** @jsx React.DOM */
WebPage = require('./WebPage.jsx');
WebPanel = require('./WebPanel.jsx');
Button = require('./Button.jsx');
WebFooter = require('./WebFooter.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      isConnecting: true
    }
  },
  componentDidMount: function(){
    setInterval(function(){
      this.setState({
        isConnecting: !this.state.isConnecting
      })
    }.bind(this), 2000)
  },
  gotoStart: function(){
    window.location.hash = 'call-start-known';
  },
  render: function() {
    var connectingText = "Ringing...";
    if(this.state.isConnecting){
      connectingText = "Connecting...";
    }
    return (
      <WebPage>
        <div className="WebColumn Connecting">
          <div className="HelloLogo" />
          <WebPanel>
            <div className="Overlay" />
          </WebPanel>
          <div className="LoadingWrapper">
            <div className="Loading"></div>
          </div>
          <h3>{ connectingText }</h3>
          <div className="ButtonGroup">
            <Button text="Cancel" style="cancel" onClick={this.gotoStart}/>
          </div>
        <h6>By using Firefox Hello!, you agree to the <a>Terms of Use</a> and <a>Privacy Notice</a></h6>
        <div className="MozillaLogo" />
        </div>
        <div className="bottomButtons">
          <a className="RoundButton" href="#call-failed">Go to Failed</a>
          <a className="RoundButton" href="#video-call">Go to Call</a>
        </div>
        <WebFooter />
      </WebPage>
    );
  }
});
