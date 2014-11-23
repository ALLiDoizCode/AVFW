var ui = require('ui');
var libFile = require('Library');
var api = require('api');
var anime = require('anime');

var mainWin = function(userName,password){

var win = Ti.UI.createWindow({});

var mainView = Ti.UI.createView({
	layout:'horizontal'
});
////VIEWS/////
var userView = Ti.UI.createView({
	width:'33.33%',
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 5
});

var libraryView = Ti.UI.createView({
	width:'33.33%',
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 5
});

var animeView = Ti.UI.createView({
	width:'33.33%',
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 5
});

var userImage = ui.createView({
	backgroundImage: 'assets/painting.jpg',
 	backgroundSize: 'cover'
});

var libraryImage = ui.createView({
	backgroundImage: 'assets/Imagination.jpg',
  	backgroundSize: 'cover'
});

var animeImage = ui.createView({
	backgroundImage: 'assets/1700850.jpg',
  	backgroundSize: 'cover'
});

////BUTTONS////
var userButton = Ti.UI.createButton({
	title: 'User',
	font:{fontWeight:'bold',fontSize:20},
	top:50,
	left: '0%',
	align: 'center',
	width: '70%',
	height: 35,
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 6,
	backgroundColor: '#efeeea'
    
});

var animeButton = Ti.UI.createButton({
	title: 'anime',
	font:{fontWeight:'bold',fontSize:20},
	top:50,
	left: '0%',
	align: 'center',
	width: '70%',
	height: 35,
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 6,
	backgroundColor: '#efeeea'
    
});

var libraryButton = Ti.UI.createButton({
	title: 'library',
	font:{fontWeight:'bold',fontSize:20},
	top:50,
	left: '0%',
	align: 'center',
	width: '70%',
	height: 35,
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 6,
	backgroundColor: '#efeeea'
    
});

libraryView.addEventListener('click',function(){
	 	libFile.lib(userName);
	 });

animeView.addEventListener('click',function(){
		anime.searchWin(userName,password);
	 });

win.addEventListener('swipe',function(){
	win.close();
});	 
	 

userView.add(userImage);
userView.add(userButton);
libraryView.add(libraryImage);
libraryView.add(libraryButton);
animeView.add(animeImage);
animeView.add(animeButton);
mainView.add(userView);
mainView.add(libraryView);
mainView.add(animeView);
win.add(mainView);
win.open();

};

exports.mainWin = mainWin;