
var geo = function(){	
//if(Ti.Geolocation.locationServicesEnabled && Ti.Network.online){
	Ti.Geolocation.getCurrentPosition(function(e){		
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		//var url = 'http://api.wunderground.com/api/a17670d582e2fe0a/geolookup/forecast/q/' +lat+ ',' +lng+ '.json';
		//alert('location found');
		//var Client = Ti.Network.createHTTPClient();
		api.getData(lat, lng);
	});
		
	//}
};

geo();
