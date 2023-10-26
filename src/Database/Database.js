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



// Import the necessary modules
// import SQLite from 'react-native-sqlite-storage';
// import RNFS from 'react-native-fs';

// // Define the database file name and paths
// const dbName = 'G4.db';
// const sourceLocation = RNFS.DocumentDirectoryPath + '/' + dbName;
// const destinationLocation = RNFS.ExternalStorageDirectoryPath + '/Android/media/com.G4/G4/Databases/' + dbName;

// // Open the SQLite database
// const db = SQLite.openDatabase(
//   { name: dbName, location: 'default' },
//   () => {
//     console.log('Database opened successfully');
//   },
//   error => {
//     console.error('Error opening database:', error);
//   },
// );

// // Check if the database file exists and copy it
// const checkIfDatabaseExists = async () => {
//   try {
//     const sourceFileExists = await RNFS.exists(sourceLocation);

//     if (sourceFileExists) {
//       // Perform operations with the SQLite database
//       db.transaction(txn => {
//         const query = "SELECT name FROM sqlite_master WHERE type='table'";
//         txn.executeSql(
//           query,
//           [],
//           (tx, res) => {
//             const tableNames = [];
//             for (let i = 0; i < res.rows.length; i++) {
//               tableNames.push(res.rows.item(i).name);
//             }
//             console.log('Table names:', tableNames);
//           },
//           error => {
//             console.log('Error getting table names:', error);
//           },
//         );
//       });

//       // Copy the database file to the external storage directory
//       RNFS.copyFile(sourceLocation, destinationLocation)
//         .then(success => {
//           console.log('Database copied to external storage successfully');
//         })
//         .catch(error => {
//           console.error('Error copying the database:', error);
//         });
//     } else {
//       console.error('Source database file does not exist.');
//     }
//   } catch (error) {
//     console.error('Error checking if the database exists:', error);
//   }
// };

// checkIfDatabaseExists();

// export default db;
