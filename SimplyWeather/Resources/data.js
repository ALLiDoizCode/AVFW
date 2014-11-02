var create = function(high, cityInfo, current){
	var db = Ti.Database.open('weather');
	db.execute('CREATE TABLE IF NOT EXISTS dataTbl (temp TEXT, city TEXT, desc TEXT)');
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
		console.log(tableData.temp); 
		dbRows.next();
	}
	dbRows.close();
	db.close();
	return tableData;
	/*console.log(tableData.temp);
	tempLabel.text = tableData.temp;
	cityLabel.text = tableData.city;
	descLabel.text = tableData.desc;*/
};
exports.read = read;


