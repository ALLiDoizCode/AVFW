Ti.Geolocation.purpose = "We need your location for this app";
Ti.Geolocation.getCurrentPosition(function(e){	
	if(Ti.Geolocation.locationServicesEnabled && Ti.Network.online){
		console.log(e);
		database.deleteDatabase();
		alert('location found');
	//var lat = e.coords.latitude;
	//var Long = e.coords.longitude;
	var url = 'http://api.wunderground.com/api/a17670d582e2fe0a/geolookup/forecast/q/' +lat+ ',' +Long+ '.json';
	var Client = Ti.Network.createHTTPClient();
	Client.open('GET', url);
	Client.send();
	Client.onerror = function(){
		Ti.UI.createAlertDialog({
			title: 'Network Error',
			message: 'Unable to retrieve data.'	
		}).show();
	};
	Client.onload = function(data){
	var json = JSON.parse(this.responseText);
	var location = json.location;
	var state = location.state;
	var city = location.city;
	var desc = json.forecast.txt_forecast.forecastday;
	var data = json.forecast.simpleforecast.forecastday;
	for(i = 0; j = data.length, i<j; i++){
		var high = data[i].high.fahrenheit;
		var low = data[i].low.fahrenheit;
		var conditions = data[i].conditions;
		var icon = data[i].icon_url;
		
	//write to database
	var DB = function(high,low,conditions){
		var db = Ti.Database.open('weatherDB');
		var create = db.execute('CREATE TABLE IF NOT EXISTS dataTbl (id INTEGER PRIMARY KEY,high TEXT, low TEXT, con TEXT)');
		var write = db.execute('INSERT INTO dataTbl (high, low, con) VALUES (?, ?, ?)', high, low, conditions);
		
		var read = db.execute('SELECT high, low, con FROM dataTbl');
			var tableData = [];
			while (read.isValidRow()) {
					tableData.push({
					high: read.fieldByName('high'),
					low: read.fieldByName('low'),
					con: read.fieldByName('con'),
		});
		read.next();
	}
	read.close();
			db.close();
			console.log(read.high);
	};

	//Buttons//
	button1.title = data[0].date.weekday;
	button2.title = data[1].date.weekday;
	button3.title = json.forecast.txt_forecast.date;
	button5.title = data[2].date.weekday;
	button6.title = data[3].date.weekday;
	
	//Labels//
	high1.text = data[0].high.fahrenheit;
	low1.text = data[0].low.fahrenheit;
	con1.text = data[0].conditions;
	
	high2.text = data[1].high.fahrenheit;
	low2.text = data[1].low.fahrenheit;
	con2.text = data[1].conditions;
	
	high3.text = data[2].high.fahrenheit;
	low3.text = data[2].low.fahrenheit;
	con3.text = data[2].conditions;
	
	high4.text = data[3].high.fahrenheit;
	low4.text = data[3].low.fahrenheit;
	con4.text = data[3].conditions;
	//Image//
	image1.image = icon = data[0].icon_url;
	image2.image = icon = data[1].icon_url;
	image3.image = icon = data[2].icon_url;
	image4.image = icon = data[3].icon_url;
	
	view2.add(Ti.UI.createLabel({
		color: '#fff',
		text:'Location: ' +state+ ' , ' +city
			}));	
	
	};
	
	button1.addEventListener('click',function(){
		alert(desc[0].fcttext);
	});
	button2.addEventListener('click',function(){
		alert(desc[1].fcttext);
	});
	button5.addEventListener('click',function(){
		alert(desc[3].fcttext);
	});
	button6.addEventListener('click',function(){
		alert(desc[4].fcttext);
	});
	};
	}
});


