var ui = require('ui');
var Geo = require('Geo');
var api = require('api');

var win = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var mainView = ui.createView({
  //width: '100%',
  backgroundImage: 'Images/SummerDay.jpg',
  backgroundSize: 'cover'
});

var view2 = Ti.UI.createView({
	//backgroundColor: 'black',
	width: '90%',
	height:'45%',
	bottom: '0%',
	//left: '2%'
});

var view3 = Ti.UI.createView({
	//backgroundColor: 'black',
	width: '45%',
	height:'30%',
	bottom: '0%',
	right: '5%'
});

var border = Ti.UI.createView({
	borderRadius: 3,
	backgroundColor: '#ffffff',
	borderColor: '#ffffff',
	borderWidth: 2,
	width: '100%',
	height: '1%',
	top: '30%',
	layout: 'horizontal'
});


var cityLabel = Ti.UI.createLabel({	
	color:'#ffffff',
	top:'center',
	font:{
	fontSize: '100sp',
	fontWeight: 'bold'
	}
});

var tempLabel = Ti.UI.createLabel({
	color:'#ffffff',
	left:'center',
	top: '30%',
	font:{
	fontSize: '200sp',
	fontFamily: 'Helvetica Neue Thin' 
	}
});

var descLabel = Ti.UI.createLabel({
	color:'#ffffff',
	right:'center',
	top: '10%',
	horizontalWrap: true,
	font:{
	fontSize: '65sp',
	//fontWeight: 'bold'
	}
});

view2.add(cityLabel);
view2.add(border);
view2.add(tempLabel);
view3.add(descLabel);
mainView.add(view2);
mainView.add(view3);
win.add(mainView);

win.open();
