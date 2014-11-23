var Cloud = require('ti.cloud');
Cloud.debug = true;
//as we are in Development mode

//var Map = require('ti.map');
// ti map module

var loginApp = function(dataName,dataPic,dataAnimeInfo,dataAnimeScore){
	Cloud.Users.login({
		login: 'walton21',
		password: '12345'	
	}, function(e) {
		if (e.success){
	//custome object
	Cloud.Objects.create({
    classname: 'Anime',
    fields: {
        title: dataName,
        score: dataAnimeScore,
        summary: dataAnimeInfo,
        image:dataPic
    }
}, function (e) {
    if (e.success) {
        var Anime = e.Anime[0];
        alert('Success:\n' +
        	'id: ' + Anime.id + '\n' +
            'title: ' + Anime.title + '\n' +
            'score: ' + Anime.score + '\n' +
            'summary: ' + Anime.summary + '\n' +
            'image: ' + Anime.image + '\n' +
            'created_at: ' + Anime.created_at);
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