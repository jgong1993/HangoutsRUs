
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var index = require('./routes/index');
var login = require('./routes/login');

var addGroup = require('./routes/addGroup');
var indivGroup = require('./routes/indivGroup');

var addFriend = require('./routes/addFriend');
var browseActivities = require('./routes/browseActivities');
var friends = require('./routes/friends');
var gallery = require('./routes/gallery');
var groups = require('./routes/groups');
var groupchat = require('./routes/groupChat');
var homepage = require('./routes/homepage');
var index = require('./routes/index')
var upcomingEvents = require('./routes/upcomingEvents');

var events = require('./routes/events');
var indivEvent = require('./routes/indivEvent');
var planEvent = require('./routes/planEvent');
var planEventResult = require('./routes/planEventResult');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/', index.viewIndex);
app.get('/homepage', login.login);

// app.get('/', homepage.home);
app.get('/addGroup', addGroup.addNewGroup);
app.get('/addFriend', addFriend.addNewFriend);
app.get('/browseActivities', browseActivities.viewBrowseActivities);
app.get('/editGroup', indivGroup.editGroup);
app.get('/friends', friends.viewFriends);
app.get('/gallery', gallery.viewGallery);
app.get('/group/:name', indivGroup.thisGroup);
app.get('/groupchat', groupchat.viewGroupChat);
app.get('/register', login.register);
app.get('/removeFriend', friends.removeFriend);
app.get('/viewGroups', groups.viewGroups);
app.get('/viewGroups/:groupName', indivGroup.leaveGroup);
//app.get('/upcomingEvents', upcomingEvents.viewUpcomingEvents);
app.get('/upcomingEvents', events.viewEvents);
app.get('/event/:name', indivEvent.thisEvent);
app.get('/planEvent', planEvent.planEventView);
app.get('/planEventResult', planEventResult.addNewEvent);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
