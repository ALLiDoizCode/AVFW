var dataBase = require('data');

var getData = function(lat, lng){
	var url = 'http://api.wunderground.com/api/a17670d582e2fe0a/geolookup/forecast/q/' +lat+ ',' +lng+ '.json';
	if(Ti.Geolocation.locationServicesEnabled && Ti.Network.online){
		var Client = Ti.Network.createHTTPClient();
		Client.open('GET',url);
		Client.send();
		Client.onerror = function(){
		dataBase.read();
		Ti.UI.createAlertDialog({
			title: 'Network Error',
			message: 'unable to retrieve data'
			}).show();
		};
		Client.onload = function(){
			alert('location found');
			var json = JSON.parse(this.responseText);
			var location = json.location;
			var state = location.state;
			var cityInfo = location.city;
			var descInfo = json.forecast.txt_forecast.forecastday;
			var data = json.forecast.simpleforecast.forecastday;
			var high = data[0].high.fahrenheit;
			var current = data[0].conditions;
		
		dataBase.create(high, cityInfo, current);
		dataBase.readCloud();
			tempLabel.text = high;
			cityLabel.text = cityInfo;
			descLabel.text = current;
		
		};
	};
};

exports.getData = getData;