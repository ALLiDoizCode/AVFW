var getDatabase = function() {
	var db = Ti.Database.open('weatherDB');
	db.execute('CREATE TABLE IF NOT EXISTS dataTbl (high TEXT, low TEXT, con TEXT)');
	return db;
};

var readDatabase = function() {
	var tableData = [];
	var db = getDatabase();
	var rows = db.execute('SELECT high, low, con FROM dataTbl');
	
	while (rows.isValidRow()) {
		tableData.push({
			high: rows.fieldByName('high'),
			low: rows.fieldByName('low'),
			con: rows.fieldByName('con'),
		});
		rows.next();
	}
	rows.close();
	db.close();
	
	return tableData;
};

var deleteDatabase = function() {
	var db = getDatabase();
	db.execute('DELETE FROM dataTbl');
	db.close();
};

var insert = addToDatabase = function() {
		var db = database.getDatabase();
		db.execute('INSERT INTO dataTbl (high, low, con) VALUES (?, ?, ?)', high, low, conditions);
		db.close();
	};

// Exports
exports.insert = insert;
exports.getDatabase = getDatabase;
exports.readDatabase = readDatabase;
exports.deleteDatabase = deleteDatabase;