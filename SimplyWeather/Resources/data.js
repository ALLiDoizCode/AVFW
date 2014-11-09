var Cloud = require('Cloud'); 
var create = function(high, cityInfo, current){
	var db = Ti.Database.open('weather');
	db.execute('CREATE TABLE IF NOT EXISTS dataTbl (id INTEGER PRIMARY KEY, temp TEXT, city TEXT, desc TEXT)');
	//db.execute('DELETE FROM dataTbl');
	db.execute('INSERT INTO dataTbl (temp, city, desc) VALUES (?, ?, ?)', high, cityInfo, current);
	var rowID = db.lastInsertRowId;
	db.close();
};

exports.create = create;

var read = function(){
	tableData=[];
	var db = Ti.Database.open('weather');
	var dbRows = db.execute('SELECT temp, city, desc FROM dataTbl');
	while(dbRows.isValidRow()){
		tableData.push({
			temp: dbRows.fieldByName('temp'),
			city: dbRows.fieldByName('city'),
			desc: dbRows.fieldByName('desc')
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	var dataCity = tableData[0].city;
	var dataTemp = tableData[0].temp;
	var dataDesc = tableData[0].desc;
	
	//ui
	tempLabel.text = dataTemp;
	cityLabel.text = dataCity;
	descLabel.text = dataDesc;
};

var readCloud = function(){
	tableData=[];
	var db = Ti.Database.open('weather');
	var dbRows = db.execute('SELECT temp, city, desc FROM dataTbl');
	while(dbRows.isValidRow()){
		tableData.push({
			temp: dbRows.fieldByName('temp'),
			city: dbRows.fieldByName('city'),
			desc: dbRows.fieldByName('desc')
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	var dataCity = tableData[0].city;
	var dataTemp = tableData[0].temp;
	var dataDesc = tableData[0].desc;
	
	Cloud.loginApp(dataTemp,dataCity,dataDesc);
};

exports.read = read;
exports.readCloud = readCloud;


