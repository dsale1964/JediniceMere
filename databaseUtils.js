const baza = require('./bazaKonekcija');

async function findNextID(db, tabela, idKolona, sortiranje) {
	var myTable=db.collection(tabela);
	var cursor=myTable.find({}).sort(sortiranje).limit(1);
	var data=await cursor.toArray();
	var id=data[0][idKolona];
	id=parseInt(id,10)+1;
	return(id);
}

async function ocitajID() {
    await baza.connectToDatabase();
    const db = baza.getDatabase();

	var id=await findNextID(db,"JEDINICE_MERE", "ID_MERE", {ID_MERE: -1});
	console.log(id);
}

//ocitajID();

module.exports={
	findNextID
};


