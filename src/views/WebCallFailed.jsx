/** @jsx React.DOM */
WebPage = require('./WebPage.jsx');
WebPanel = require('./WebPanel.jsx');
Button = require('./Button.jsx');
WebFooter = require('./WebFooter.jsx');

module.exports = React.createClass({
  gotoConnecting: function(){
    window.location.hash = 'connecting';
  },
  render: function() {
    return (
      <WebPage>
        <div className="WebColumn">
          <WebPanel>
            <div className="HelloLogo" />
            <div className="Avatar Logo" />
            <h1>{STRINGS.sampleCallURL }</h1>
            <h4>(from May 26, 2014)</h4>
          </WebPanel>
          <div className="LoadingWrapper">
            <div className="Loading failed"></div>
          </div>
          <h3>Call failed.</h3>
          <div className="ButtonGroup">
            <Button text="Retry" style="action" onClick={this.gotoConnecting}/>
          </div>
        <h6>By using Firefox Hello!, you agree to the <a>Terms of Use</a> and <a>Privacy Notice</a></h6>
        <div className="MozillaLogo" />
        </div>
        <WebFooter />
      </WebPage>
    );
  }
});
