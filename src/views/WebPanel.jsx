/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    return (
      <div className="WebPanel">
        { this.props.children }
      </div>
    );
  }
});
