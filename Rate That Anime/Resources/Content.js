login = require('login');
////Func////
var getData = function(){ 
	console.log(username.value);
	var url = 'https://hbrd-v1.p.mashape.com/users/di3twater/library';
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
////WINDOWS////
var win = Ti.UI.createWindow({
	backgroundColor:'#e2e1df',
});
win.addSubview;
var content = Ti.UI.createWindow({
    backgroundColor: '#efeeea'
});

var splitWin = Ti.UI.iPad.createSplitWindow({
	masterView:content,
	detailView:win,
	showMasterInPortrait:true
});

////VIEWS////
var mainImage = Ti.UI.createImageView({
    width:490/1.75,
    height:710/1.75, 
    top:60,
    right:20
});
mainImage.addEventListener('touchstart', function(e){
	popover.show({view:mainImage});
});

var scroll = Ti.UI.createScrollView({
    contentHeight: 'auto',      
showVerticalScrollIndicator:true,
   });
   
////POPOVER////
var popover = Ti.UI.iPad.createPopover({
    width:250, height:110,
    arrowDirection:Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT,
});

////LABEL////
var label = Ti.UI.createLabel({
  //borderWidth: 2,
  //borderColor: '#bbb',
  //borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  textAlign: 'left',
  top: 60,
  left: 45,
  width: 300,// height : 70
});

////POPOVER ELEMENTS////
var rating = Ti.UI.createLabel({
    bottom:20, 
    font: {fontSize:160, fontWeight:'bold', fontFamily:'Chunkfive'},
    right:20
   });
   
var title = Ti.UI.createLabel({
    width:140, 
    left:120,
    color:'#ffffff',
    font:{fontSize:16},
    top:30,
    height:30
});
var year = Ti.UI.createLabel({
    color:'#ffffff',    
    font:{fontSize:16},
    left:120,   
    width:140,
    top:60, 
    height:30
});

getData();

popover.add(title);
popover.add(year);
content.add(scroll);
win.add(mainImage);
win.add(label);
win.add(rating);
splitWin.open();