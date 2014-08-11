/** @jsx React.DOM */
WebPage = require('./WebPage.jsx');
WebPanel = require('./WebPanel.jsx');
Button = require('./Button.jsx');
WebFooter = require('./WebFooter.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <WebPage>
        <div className="WebColumn">
          <WebPanel>
            <div className="HelloLogo" />
            <div className="Avatar Firefox" />
            <h1>Oops!</h1>
            <h4>This URL is no longer available.</h4>
          </WebPanel>
          <h3>Download Firefox to make free audio and video calls!</h3>
          <div className="ButtonGroup">
            <Button text="Get Firefox" style="action" />
          </div>
        <div className="MozillaLogo" />
        </div>
        <WebFooter />
      </WebPage>
    );
  }
});
