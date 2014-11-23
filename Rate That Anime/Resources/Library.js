var api = require('api');
////WINDOWS////
var lib = function(userName){
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
   
var scroll2 = Ti.UI.createScrollView({
    contentWidth: '100%',      
	showVerticalScrollIndicator:true,
	top: 60,
  	left: 45,
  	width: 300,
   });
   
////POPOVER////
var popover = Ti.UI.iPad.createPopover({
    width:250, height:110,
    arrowDirection:Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT,
});

////LABEL////
var label = Ti.UI.createLabel({
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  textAlign: 'left',
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

//api.getData(username,scroll,mainImage,rating,title,year,label);
splitWin.addEventListener('swipe',function(){
	splitWin.close();
});
api.getData(userName,scroll,mainImage,rating,title,year,label);
//api.post();

scroll2.add(label);
popover.add(title);
popover.add(year);
content.add(scroll);
win.add(mainImage);
win.add(scroll2);
win.add(rating);
splitWin.open();

};

exports.lib = lib;

