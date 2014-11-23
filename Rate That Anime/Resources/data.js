var Cloud = require('Cloud'); 
var create = function(name, pic, animeInfo, animeScore){
	var db = Ti.Database.open('Anime');
	db.execute('CREATE TABLE IF NOT EXISTS dataTbl (id INTEGER PRIMARY KEY, name TEXT, pic TEXT, animeInfo TEXT, animeScore TEXT)');
	db.execute('INSERT INTO dataTbl (name, pic, animeInfo, animeScore) VALUES (?, ?, ?, ?)', name, pic, animeInfo, animeScore);
	var rowID = db.lastInsertRowId;
	db.close();
};

exports.create = create;

var read = function(){
	tableData=[];
	var db = Ti.Database.open('Anime');
	var dbRows = db.execute('SELECT name, pic, animeInfo, animeScore FROM dataTbl');
	while(dbRows.isValidRow()){
		tableData.push({
			name: dbRows.fieldByName('name'),
			pic: dbRows.fieldByName('pic'),
			animeInfo: dbRows.fieldByName('animeInfo'),
			animeScore: dbRows.fieldByName('animeScore')
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	for(var i; i<tableData.length; i++){
	var dataName = tableData[i].name;
	var dataPic = tableData[i].pic;
	var dataAnimeInfo = tableData[i].animeInfo;
	var dataAnimeScore = tableData[i].animeScore;
	};
	//ui
	thumb.addEventListener('touchstart',function(e){
					mainImage.image = dataPic;
					title.title = dataName;
					year.text = e.source.timeStart;
					label.text = dataAnimeInfo;
					rating.text = dataAnimeScore;
				});
				
				scroll.add(thumb);
};

var readCloud = function(){
	tableData=[];
	var db = Ti.Database.open('Anime');
	var dbRows = db.execute('SELECT name, pic, animeInfo, animeScore FROM dataTbl');
	while(dbRows.isValidRow()){
		tableData.push({
			name: dbRows.fieldByName('name'),
			pic: dbRows.fieldByName('pic'),
			animeInfo: dbRows.fieldByName('animeInfo'),
			animeScore: dbRows.fieldByName('animeScore')
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	for(var i; i<tableData.length; i++){
	var dataName = tableData[i].name;
	var dataPic = tableData[i].pic;
	var dataAnimeInfo = tableData[i].animeInfo;
	var dataAnimeScore = tableData[i].animeScore;
	};
	
	Cloud.loginApp(dataName,dataPic,dataAnimeInfo,dataAnimeScore);
};

exports.read = read;
exports.readCloud = readCloud;


