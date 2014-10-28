//Load Cloud Module
var Cloud = require('ti.cloud');
// set .debug property to 'true' as we are in Development mode
Cloud.debug = true;
var loginUser = function(){
	Cloud.Users.login({
		login: 'walton21@fullsail.edu',
		password: '1234'
	}, function(e){
		// use .info method to view login info in the Console, if successful
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // loginUser ends
loginUser();
// now your app is ready to access ACS network and data services



var api = require('api');
var database = require('database');
var win = Ti.UI.createWindow({
});
//VIEWS//
var view1 = Ti.UI.createView({
	backgroundColor: 'gray',
	top: '0',
	height: "30%",
	width: '100%'
});

var dataView1 = Ti.UI.createView({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	left: '0',
	zIndex: 1,
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var dataView2 = Ti.UI.createView({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	right:'0',
	zIndex: 1,
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var dataView3 = Ti.UI.createView({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	left: '0',
	zIndex: 1,
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var dataView4 = Ti.UI.createView({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	right:'0',
	zIndex: 1,
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var view2 = Ti.UI.createView({
	backgroundColor: 'silver',
	top: '30%',
	height: "38%",
	width: '100%'
});

var view3 = Ti.UI.createView({
	backgroundColor: '#727F7F',
	top: '65%',
	height: "35%",
	width: '100%'
});
//Image View
var centerImage1 = Ti.UI.createView({
	backgroundImage: 'Images/field.jpg',
	width: '110%'
});

var centerImage2 = Ti.UI.createView({
	backgroundImage: 'Images/rain.jpg',
	height: '110%'
});

var centerImage3 = Ti.UI.createView({
	backgroundImage: 'Images/Icy.jpg',
	height: '105%'
});

var image1 = Ti.UI.createImageView({
	width: '50%',
	top:'10%',
	align: 'center'
});

var image2 = Ti.UI.createImageView({
	width: '50%',
	top:'10%',
	align: 'center'
});


var image3 = Ti.UI.createImageView({
	width: '50%',
	top:'10%',
	align: 'center'
});

var image4 = Ti.UI.createImageView({
	width: '50%',
	top:'10%',
	align: 'center'
});
//labels
var high1 = Ti.UI.createLabel({
		color: '#fff',	
		top: '55%',
		left: '5%'
	});	
	
var low1 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		right: '5%'
	});	
		
var con1 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		align: 'center'
	});
	
var high2 = Ti.UI.createLabel({
		color: '#fff',	
		top: '55%',
		left: '5%'
	});	
	
var low2 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		right: '5%'
	});	
		
var con2 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		align: 'center'
	});
	
var high3 = Ti.UI.createLabel({
		color: '#fff',	
		top: '55%',
		left: '5%'
	});	
	
var low3 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		right: '5%'
	});	
		
var con3 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		align: 'center'
	});	
	
var high4 = Ti.UI.createLabel({
		color: '#fff',	
		top: '55%',
		left: '5%'
	});	
	
var low4 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		right: '5%'
	});	
		
var con4 = Ti.UI.createLabel({
		color: '#fff',
		top: '55%',
		align: 'center'
	});
		
//button layout1
var buttonsView = Ti.UI.createView({
	width: '100%',
	height: '22%',
	layout: 'horizontal',
	zIndex: 2,
	top: '78%'
});

var button1 = Ti.UI.createButton({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	backgroundColor: '#727F7F',
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var button2 = Ti.UI.createButton({
	color: 'silver',
	width:'50%',
	height: Ti.UI.FILL,
	backgroundColor: '#404040',
	zIndex: 1,
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

//button layout2
var buttonsView2 = Ti.UI.createView({
	width: '100%',
	height: '20%',
	layout: 'horizontal',
	zIndex: 2,
	top: '70%'
});

var button3 = Ti.UI.createButton({
	color: '#FDF7EF',
	width:'100%',
	height: Ti.UI.FILL,
	backgroundColor: '#gray',
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});


//button layout3
var buttonsView3 = Ti.UI.createView({
	width: '100%',
	height: '20%',
	layout: 'horizontal',
	zIndex: 2,
	top: '80%'
});

var button5 = Ti.UI.createButton({
	color: '#FDF7EF',
	width:'50%',
	height: Ti.UI.FILL,
	backgroundColor: '#727F7F',
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

var button6 = Ti.UI.createButton({
	color: 'silver',
	width:'50%',
	height: Ti.UI.FILL,
	backgroundColor: '#404040',
	font:{
	fontSize: '25sp',
	fontWeight: 'bold'
	}
});

dataView1.add(high1,low1,con1,image1);
dataView2.add(high2,low2,con2,image2);
dataView3.add(high3,low3,con3,image3);
dataView4.add(high4,low4,con4,image4);
view1.add(buttonsView,dataView1,dataView2,centerImage1);
view2.add(buttonsView2,centerImage2);
view3.add(buttonsView3,dataView3,dataView4,centerImage3);
buttonsView.add(button1);
buttonsView.add(button2);
buttonsView2.add(button3);
buttonsView3.add(button5);
buttonsView3.add(button6);
win.add(view1);
win.add(view2);
win.add(view3);
win.open();
