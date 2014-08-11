/** @jsx React.DOM */
WebCall = require('./WebCall.jsx')
Defaults = require('../utils/defaults');
module.exports = React.createClass({
  getInitialState: function(){
    return {
      time: new moment(),
      selected: null
    }
  },
  selectHappy: function(){
    this.setState({
      selected: 'happy'
    });
    this.open();
  },
  selectSad: function(){
    this.setState({
      selected: 'sad'
    });
    this.open();
  },
  submit: function(){
    this.setState({
      selected: 'thanks'
    });
  },
  open: function(){
    $(this.refs.panel.getDOMNode()).velocity({
      translateX: '-50%'
    }, Defaults.animation);
  },
  close: function(){
    $(this.refs.panel.getDOMNode()).velocity({
      translateX: '0'
    }, Defaults.animation);
  },
  componentDidMount: function(){
    this.setState({
      time: new moment()
    });
  },
  gotoConnecting: function(){
    window.location.hash = 'connecting';
  },
  render: function() {
    var formHtml;
    if(this.state.selected == 'happy')
    {
      formHtml =
        <div>
          <h3>Thank you for your feedback!</h3>
        </div>
      ;
    } else if(this.state.selected == 'thanks')
    {
      formHtml = <div>
        <h3>Thank you for your feedback!</h3>
      </div>;
    } else
    {
      formHtml =
        <div>
          <div className="Back" onClick={this.close}>
            <i className="fa fa-angle-left"></i>
            Back
          </div>
          <h3>What makes you sad?</h3>
          <div className="Form">
            <input type="radio" name="what" value="audio"/>Audio Quality<br/>
            <input type="radio" name="what" value="video"/>Video Quality<br/>
            <input type="radio" name="what" value="diconnected"/>Was Disconnected<br/>
            <input type="radio" name="what" value="ui"/>Confusing<br/>
            <input type="radio" name="what" value="other"/>Other<br/>
            <input type="text" name="what" placeholder="Comment here..."/>
            <Button text="Submit" style="action" onClick={this.submit} />
          </div>

        </div>
      ;
    }
    return (
      <WebCall>
        <div className="VideoScreen Terminated">
          <header>
            <div className="Logo" />
            <div className="FriendlyName">
              Ally Avocado
            </div>
          </header>

          <div className="VideoCaption">
            Call Ended
            <div className="Feedback">
              <div ref="panel" className="PanelGroupInner">

                <div className="Inner">
                  <h3>{ STRINGS.feedbackQuestion }</h3>
                  <div className="Faces">
                    <div onClick={ this.selectHappy } className={ this.state.selected == 'happy' ? "happy active" : "happy" }></div>
                    <div onClick={ this.selectSad } className={this.state.selected == 'sad' ? "sad active" : "sad"}></div>
                  </div>
                  <div className="ButtonGroup">
                    <Button text="Report User" />
                  </div>
                </div>
                <div className="Inner">
                  { formHtml }
                </div>
              </div>
            </div>
          </div>

        <div className="VideoPreview" />
        <div className="VideoControls">
          <Button text="Call Back" style="action" onClick={this.gotoConnecting} />
          <i className="fa fa-video-camera" />
          <i className="button fa fa-microphone-slash"></i>
          <span className="time">{ this.state.time.format('m:ss') }</span>
        </div>

        </div>
        <div className="VideoPreviewMobile Terminated" />
        <div className="VideoControlsMobile">
          <Button text="Call Back" style="action" onClick={this.gotoConnecting} />
          <i className="fa fa-video-camera" />
          <i className="button fa fa-microphone-slash active"></i>
          <span className="time">{ this.state.time.format('m:ss') }</span>
        </div>
        <WebFooter />
      </WebCall>
    );
  }
});
