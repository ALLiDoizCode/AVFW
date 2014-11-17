var login = require('login');
var getData = function(){ 
	user = login.name.value;
	console.log(user);
	var url = 'https://hbrd-v1.p.mashape.com/users/'+user+'/library';
	if(Ti.Network.online){
		var Client = Ti.Network.createHTTPClient();
		Client.open('GET',url);
		Client.setRequestHeader('X-Mashape-Authorization', 'aAlcvjLDMSmshMRRPNyBJlkHR8wYp1s9KkfjsnXOf5ppTcZ4yO');
		Client.send();
		Client.onerror = function(){
		//dataBase.read();
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
				thumb.addEventListener('touchstart',function(e){
					mainImage.image = e.source.image;
					title.title = e.source.title;
					year.text = e.source.timeStart;
					label.text = e.source.desc;
					rating.text = Math.round(e.source.score * 100) / 100;
				});
				scroll.add(thumb);
			}
			
		//dataBase.create(high, cityInfo, current);
		//dataBase.readCloud();
		};
	};
};

exports.getData = getData;

