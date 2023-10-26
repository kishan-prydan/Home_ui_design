import db from "../Database";

export const deleteTable = tableName => {
	db.transaction(txn => {
	  txn.executeSql(
		`DROP TABLE IF EXISTS ${tableName}`,
		[],
		(tx, res) => {
		  console.log(`Table '${tableName}' deleted successfully`);
		},
		error => {
		  console.log(`Error deleting table '${tableName}':`, error);
		},
	  );
	});
  };