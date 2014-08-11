/** @jsx React.DOM */
Marked = require('marked');

_users = require('./models/users.js');
STRINGS = require('./models/strings.js')
Utils = require('./utils/utils.js');
getTimeFromRange = Utils.getTimeFromRange;
TableOfContents = require('./views/TableOfContents.jsx');
NoteView = require('./views/NoteView.jsx');

CallStart = require('./views/WebCallStart.jsx');
CallStartKnown = require('./views/WebCallStartKnown.jsx');
Unavailable = require('./views/WebLinkExpired.jsx');
UnavailableFirefox = require('./views/WebLinkExpiredFirefox.jsx');
CallFailed = require('./views/WebCallFailed.jsx');
Connecting = require('./views/WebCallConnecting.jsx');
VideoCall = require('./views/WebVideoCall.jsx');
HoldCall = require('./views/WebCallHold.jsx');
CallTerminated = require('./views/WebCallTerminated.jsx');
MobileBanner = require('./views/MobileBanner.jsx');

moment.lang('en', {
  calendar : {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : 'l [at] LT',
    nextWeek : 'l [at] LT',
    sameElse : 'L'
  }
});


_.defer(function(){
  var tocEl = $('#toc')[0];
  var wrapperEl = $('#wrapper')[0];

  var links = [
    {
    name: 'Call Start',
    slug: 'call-start'
  },
  {
    name: 'Link Expired/Unavailable',
    slug: 'link-expired'
  },
  {
    name: 'Link Expired/Unavailable (Firefox)',
    slug: 'link-expired-ffx'
  },
  {
    name: 'Call Failed',
    slug: 'call-failed'
  },
  {
    name: 'Connecting/Ringing',
    slug: 'connecting'
  },
  {
    name: 'In Call',
    slug: 'video-call'
  },
  {
    name: 'Call on Hold',
    slug: 'hold-call'
  },
  {
    name: 'Call Terminated/Feedback',
    slug: 'call-terminated'
  },
  {
    name: 'FxOS App Banner',
    slug: 'mobile-banner'
  },
  ];


  React.renderComponent(<TableOfContents items={links} />, tocEl);

  var Router = Backbone.Router.extend({
    routes: {
      '' : 'defaultRoute',
      'call-start': 'callStart',
      'call-start-known': 'callStartKnown',
      'link-expired': 'unavailable',
      'link-expired-ffx': 'unavailableFirefox',
      'call-failed': 'callFailed',
      'connecting': 'connecting',
      'video-call': 'videoCall',
      'hold-call': 'holdCall',
      'call-terminated': 'callTerminated',
      'mobile-banner': 'mobileBanner',
    },


    defaultRoute: function(){
      window.location.hash = 'call-start';
    },

    callStart: function(){
      React.renderComponent(<CallStart />, wrapperEl);
    },

    callStartKnown: function(){
      window.location.hash = 'call-start';
      // React.renderComponent(<CallStartKnown />, wrapperEl);
    },

    callFailed: function(){
      React.renderComponent(<CallFailed />, wrapperEl);
    },

    unavailable: function(){
      React.renderComponent(<Unavailable />, wrapperEl);
    },

    unavailableFirefox: function(){
      React.renderComponent(<UnavailableFirefox />, wrapperEl);
    },

    connecting: function(){
      React.renderComponent(<Connecting />, wrapperEl);
    },

    videoCall: function(){
      React.renderComponent(<VideoCall />, wrapperEl);
    },

    holdCall: function(){
      React.renderComponent(<HoldCall />, wrapperEl);
    },

    callTerminated: function(){
      React.renderComponent(<CallTerminated />, wrapperEl);
    },

    mobileBanner: function(){
      React.renderComponent(<MobileBanner />, wrapperEl);
    }
  });

  var r = new Router();

  r.bind('all', function(route){
    $('#toc a').removeClass('active');
    $('#toc a[href=#' + Backbone.history.fragment + ']').addClass('active');
  });

  Backbone.history.start();
});
