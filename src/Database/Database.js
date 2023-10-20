import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase(
  {name: 'G4.db', location: 'default'},
  () => {
    // console.log('Database opened successfully');
  },
  error => {
    console.error('Error opening database:', error);
  },
);

if (!db) {
  console.error('Database not properly initialized');
}
// console.log('Database instance:', db);
export default db;




export const getTableNames = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = "SELECT name FROM sqlite_master WHERE type='table'";

      txn.executeSql(
        query,
        [],
        (tx, res) => {
          const tableNames = [];
          for (let i = 0; i < res.rows.length; i++) {
            tableNames.push(res.rows.item(i).name);
          }
          resolve(tableNames);
        },
        error => {
          console.log('Error getting table names:', error);
          reject(error);
        },
      );
    });
  });
};



