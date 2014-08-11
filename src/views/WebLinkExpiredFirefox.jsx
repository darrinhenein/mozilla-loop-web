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
        <div className="MozillaLogo" />
        </div>
        <WebFooter />
      </WebPage>
    );
  }
});
