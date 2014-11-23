var ui = require('ui');
var main = require('mainWindow');

var login = function(){

var win = Ti.UI.createWindow({});

var image = ui.createView({
	backgroundImage: 'assets/epic-anime-wallpaper-pokemon-hd.jpg',
 	backgroundSize: 'cover',
 	zindex: 1
});

var userName = Titanium.UI.createTextField({
	color:"#336699",
	top:'38%',
	align:'center',
	width:300,
	height:40,
	hintText:"Username",
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	zindex: 2
	});
var password = Titanium.UI.createTextField({
	color:"#336699",
	top:'45%',
	align:'center',
	width:300,
	height:40,
	hintText:"Password",
	//passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	zindex: 2
	});
var loginBtn = Titanium.UI.createButton({
	title:"Login",
	top:'55%',
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:"Arial",fontWeight:"bold",fontSize:14},
	zindex: 2
	});

	 loginBtn.addEventListener('click',function(){
	 	main.mainWin(userName,password);
	 });
	 
win.add(image);
win.add(userName);
win.add(password);
win.add(loginBtn);
win.open();

};

exports.login = login;