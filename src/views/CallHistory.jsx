/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');
TabBar = require('./TabBar.jsx');
Panel = require('./Panel.jsx');
HistoryList = require('./HistoryList.jsx');

module.exports = React.createClass({
  render: function() {
    return (
        <BaseState name={ this.props.name } index={ this.props.index }>
          <TabBar selected={this.props.tab} />
          <Panel items={ this.props.items }>
            <HistoryList/>
          </Panel>
          <Footer linkText={STRINGS.signOut} username={STRINGS.loggedInUsername}/>
        </BaseState>
    );
  }
});
