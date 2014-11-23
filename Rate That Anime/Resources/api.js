var dataBase = require('data');
var getData = function(userName,scroll,mainImage,rating,title,year,label){
	var name = userName.value;
	var url = 'http://hummingbird.me/api/v1/users/'+name+'/library';
	if(Ti.Network.online){
		var Client = Ti.Network.createHTTPClient();
		Client.open('GET',url);
		Client.setRequestHeader('X-Client-Id', '183557659bdd06cbb42c');
		Client.send();
		Client.onerror = function(){
		dataBase.read();
		Ti.UI.createAlertDialog({
			title: 'Network Error',
			message: 'unable to retrieve data'
			}).show();
		};
		Client.onload = function(){
			alert('api loaded');
			var json = JSON.parse(this.responseText);
			for(var i = 0; i<json.length; i++){
				var thumb = Ti.UI.createImageView({
					image:json[i].anime.cover_image,
					title:json[i].anime.slug,
					timeStart:json[i].anime.started_airing,
					timeEnd:json[i].anime.finished_airing,
					desc:json[i].anime.synopsis,
					score:json[i].anime.community_rating,
					height:150,
					top:i*170
				});
				var name = thumb.title;
				var pic = thumb.image;
				var animeInfo = thumb.desc;
				var animeScore = Math.round(thumb.score * 100) / 100;
					
				thumb.addEventListener('touchstart',function(e){
					mainImage.image = e.source.image;
					title.title = e.source.title;
					year.text = e.source.timeStart;
					label.text = e.source.desc;
					rating.text = Math.round(e.source.score * 100) / 100;
				});
				
				scroll.add(thumb);
			}
			console.log('ohyea '+name);
			console.log('ohyea '+pic);
			//dataBase.create(name, pic, animeInfo, animeScore);
			//dataBase.readCloud();
		};
	};
	
};

exports.getData = getData;

var post = function(searchField,json){
	var id = searchField.value;
	var url = 'https://hummingbird.me/api/v1/libraries/'+id;
	if(Ti.Network.online){
		var Client2 = Ti.Network.createHTTPClient();
		Client2.open('POST',url);
		Client2.setRequestHeader('X-Client-Id', '183557659bdd06cbb42c');
		Client2.send({
			auth_token:json,
			status: 'plan-to-watch',
			notes: 'Awsome Sauce'
		});
		Client2.onerror = function(){
		Ti.UI.createAlertDialog({
			title: 'post error',
			message: 'unable to retrieve data'
			}).show();
		};
		Client2.onload = function(){
			alert('posted');
			var json = JSON.parse(this.responseText);
			
		};
	};
	
};


var auth = function(searchField,userName,password){
	var name = userName.value;
	var pass = password.value;
	console.log(name);
	console.log(pass);
	var url = 'https://hummingbird.me/api/v1/users/authenticate';
	if(Ti.Network.online){
		var Client = Ti.Network.createHTTPClient();
		Client.open('POST',url);
		Client.setRequestHeader('X-Client-Id', '183557659bdd06cbb42c');
		Client.send({
			username:name,
			password:pass
		});
		Client.onerror = function(){
		Ti.UI.createAlertDialog({
			title: 'authoriztion Error',
			message: 'unable to retrieve data'
			}).show();
		};
		Client.onload = function(){
			alert('authorized');
			var json = JSON.parse(this.responseText);
				console.log(json);
				post(searchField,json);
		};
	};
	
};

exports.auth = auth;


var find = function(searchField,sButton,coverView,MPAA,playButton,containerView,info,title){
	var id = searchField.value;
	var url = 'https://hummingbird.me/api/v2/anime/'+id;
	if(Ti.Network.online){
		var Client = Ti.Network.createHTTPClient();
		Client.open('GET',url);
		Client.setRequestHeader('X-Client-Id', '183557659bdd06cbb42c');
		Client.send({});
		Client.onerror = function(){
		Ti.UI.createAlertDialog({
			title: 'Network Error',
			message: 'unable to retrieve data'
			}).show();
		};
		Client.onload = function(){
			alert('Anime Found');
			var json = JSON.parse(this.responseText);
				var cover = json.anime.poster_image;
				var	titleData = json.anime.slug;
				var	timeStart = json.anime.started_airing;
				var	timeEnd = json.anime.finished_airing;
				var	desc = json.anime.synopsis;
				var	score = json.anime.community_rating;
				var age = json.anime.age_rating;
				var video = json.anime.youtube_video_id;
				console.log(video);
				console.log(cover);
				console.log(score);
				coverView.backgroundImage = cover;
				info.text = desc;
				MPAA.text = age;
				coverView.add(playButton);
				containerView.add(coverView);
							
				playButton.addEventListener('click',function(){
					Ti.Platform.openURL('http://www.youtube.com/watch?v=' + video);
				});
						
		};
	
	};
};
exports.find = find;