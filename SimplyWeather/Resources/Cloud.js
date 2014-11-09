var Cloud = require('ti.cloud');
Cloud.debug = true;
//as we are in Development mode

//var Map = require('ti.map');
// ti map module

var loginApp = function(dataTemp, dataCity, dataDesc){
	Cloud.Users.login({
		login: 'walton21',
		password: '12345'	
	}, function(e) {
		if (e.success){
	//custome object
	Cloud.Objects.create({
    classname: 'weather',
    fields: {
        city: dataCity,
        temp: dataTemp,
        condition: dataDesc
    }
}, function (e) {
    if (e.success) {
        var weather = e.weather[0];
        alert('Success:\n' +
            'id: ' + weather.id + '\n' +
            'city: ' + weather.city + '\n' +
            'temp: ' + weather.temp + '\n' +
            'condition: ' + weather.condition + '\n' +
            'created_at: ' + weather.created_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
    //custome object
});
		}else{
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};
//loginUser
if (Ti.Network.online) {
	loginApp();
}else {
	alert('no network available');
}

exports.loginApp = loginApp;