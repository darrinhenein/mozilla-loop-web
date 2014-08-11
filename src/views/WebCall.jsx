/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    return (
        <div className="WebCall">
          { this.props.children }
        </div>
    );
  }
});
