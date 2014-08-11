/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    return (
      <div className={"WebPage " + Backbone.history.fragment }>
        { this.props.children }
      </div>
    );
  }
});
