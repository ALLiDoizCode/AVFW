var ui = require('ui');
var api = require('api');

var searchWin = function(userName,password){
	var win = Ti.UI.createWindow({
	backgroundColor:'#e2e1df'
});

///Buttons///

var playButton = Ti.UI.createView({ 
    backgroundImage :'assets/play38-2x.png',
    width: 64,
    height: 64,
    align: 'center',
    zindex: 2
});

var sButton = Ti.UI.createButton({
	title: 'Search'
});

////SEARCH ELEMENTS
var iconView = Ti.UI.createView({
	top:25,
	right: '0%',
	align: 'center',
	width: '10%',
	height: 50,
	zIndex: 2
});

var searchField = Ti.UI.createTextField({
	top:25,
	left: '0%',
	align: 'center',
	width: '100%',
	height: 45,
	borderColor : '#e2e1df',
	borderRadius : 3,
	borderWidth : 6,
	backgroundColor: '#efeeea',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    zIndex: 1
});

///Content Elements///
var coverView = Ti.UI.createView({
    width:490/1.50,
    height:710/1.50, 
    right:20,
    top:30,
    right:20,
    zindex: 1
});
	
var containerView = Ti.UI.createView({
	width:'99%',
    height:'70%', 
    align: 'center',
    top:'10%',
    backgroundColor: '#e2e1df',
   // right:20,
    borderColor : '#efeeea',
	borderRadius : 3,
	borderWidth : 5
});

var scroll = Ti.UI.createScrollView({
    contentWidth: '100%',      
	top: 40,
  	left: 45,
  	width: '50%',
   });

///LABELS///
var info = Ti.UI.createLabel({
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  textAlign: 'left',
});

var MPAA = Ti.UI.createLabel({
    bottom:20, 
    font: {fontSize:130, fontWeight:'bold', fontFamily:'Chunkfive'},
    right:20, 
   });
	
var button = Ti.UI.createView({
	backgroundImage: 'assets/add.png',
	bottom:20,
	left:20,
	width:602,
	height:86 
	
});	

var buttonIcon = Ti.UI.createView({
	backgroundImage: 'assets/books_1-512.png',
	align: 'center',
	left:20, 
	width: 64,
	height: 64
});	

var buttonLabel = Ti.UI.createLabel({
	text: 'Add To Library',
	align: 'center',
	font:{fontSize:32}
});
	sButton.addEventListener('click',function(e){
		api.find(searchField,sButton,coverView,MPAA,playButton,containerView,info);
	});
	
	button.addEventListener('click',function(){
					api.auth(searchField,userName,password);
				});
	
	win.addEventListener('swipe',function(){
		win.close();
});	 

button.add(buttonIcon);
button.add(buttonLabel);
scroll.add(info);
containerView.add(scroll);
iconView.add(sButton);
win.add(button);
win.add(MPAA);
win.add(iconView);
win.add(searchField);
win.add(containerView);
win.open();
};

exports.searchWin = searchWin;