var win = Titanium.UI.currentWindow;

 var username = Titanium.UI.createTextField({
    color:'#336699',
    top:'35%',
    width:300,
    height:40,
    hintText:'Username',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginBtn = Titanium.UI.createButton({
    title:'Login',
    top:'45%',
    width:90,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

////EVENTLISTENER////
loginBtn.addEventListener('click',function(){
	var loadFile = Ti.UI.createWindow({
		url:'Content.js'
	});
	Ti.UI.currentTab.open(loadFile);
});
exports.username = name;
win.add(username);
win.add(loginBtn);