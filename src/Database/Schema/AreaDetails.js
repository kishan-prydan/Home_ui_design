import db from '../Database';
import moment from 'moment';

export const createTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS AreaDetailsTable (id INTEGER PRIMARY KEY AUTOINCREMENT, areazoneid INTEGER, customerid TEXT, title TEXT, subnetid TEXT, image TEXT, arearole INTEGER, _id TEXT)',
      [],
      () => {
        // console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};

export const insertData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO AreaDetailsTable (areazoneid, customerid, title, subnetid, image, arearole, _id) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item.Areazoneid,
        item.customerid,
        item.title,
        item.subnetid,
        JSON.stringify(item.image),
        item.arearole,
        item._id,
      ];

      txn.executeSql(query, params, (tx, res) => {
        console.log('insert data params========================', params);
        console.log('Data inserted successfully');
      });
    });
  });
};

// export const fetchDataByDate = date => {
//   return new Promise((resolve, reject) => {
//     db.transaction(txn => {
//       const query = 'SELECT * FROM AreaDetailsTable WHERE date = ?';
//       const params = [date]; // Date in '27-09-2023' format
//       txn.executeSql(
//         query,
//         params,
//         (tx, res) => {
//           const rows = res.rows.raw();
//           resolve(rows);
//         },
//         error => {
//           console.log('Error retrieving data:', error);
//           reject(error);
//         },
//       );
//     });
//   });
// };

// export const fetchDataByCurrentDateAndCustomerId = customerId => {
//   const currentDate = moment().format('DD-MM-YYYY');

//   return new Promise((resolve, reject) => {
//     db.transaction(txn => {
//       const query =
//         'SELECT * FROM AreaDetailsTable WHERE date = ? AND customerid = ?';
//       const params = [currentDate, customerId];
//       txn.executeSql(
//         query,
//         params,
//         (tx, res) => {
//           const rows = res.rows.raw();
//           resolve(rows);
//         },
//         error => {
//           console.log('Error retrieving data:', error);
//           reject(error);
//         },
//       );
//     });
//   });
// };

// export const fetchDataByCustomerId = (customerId) => {
//   return new Promise((resolve, reject) => {
//     db.transaction(txn => {
//       const query = 'SELECT * FROM AreaDetailsTable WHERE customerid = ?';
//       const params = [customerId];
//       txn.executeSql(
//         query,
//         params,
//         (tx, res) => {
//           const rows = res.rows.raw();
//           resolve(rows);
//         },
//         error => {
//           console.log('Error retrieving data:', error);
//           reject(error);
//         },
//       );
//     });
//   });
// };

export const fetchDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM AreaDetailsTable WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving data:', error);
          reject(error);
        },
      );
    });
  });
};

export const updateData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE AND REPLACE AreaDetailsTable SET ';
    const params = [];

    for (const key in updatedFields) {
      if (key !== '_id') {
        query += `${key} = ?, `;
        params.push(updatedFields[key]);
      }
    }

    query = query.slice(0, -2) + ' WHERE _id = ?';
    params.push(_id);

    txn.executeSql(query, params, (tx, res) => {
      if (res.rowsAffected > 0) {
        console.log('Data updated successfully');
      } else {
        console.log('No records were updated');
      }
    });
  });
};

export const updateOrInsertData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM AreaDetailsTable WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        // console.log('res from updateandreplace-------', res);

        if (existingData.length === 0) {
          // console.log('existingData from updateandreplace-------', existingData);
          insertData([item]);
        } else {
          // If existing data found, update the existing row
          const id = existingData[0]._id;
          // console.log('id from updateandreplace-------', id);

          updateData(id, item);
        }
      });
    });
  });
};

export const fetchAllData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM AreaDetailsTable',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('all data from local database', rows);
          resolve(rows);
        },
        error => {
          // console.log('Error retrieving data:', error);
          reject(error);
        },
      );
    });
  });
};

export const deleteData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM AreaDetailsTable WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Data deleted successfully');
      },
      error => {
        console.log('Error deleting data:', error);
      },
    );
  });
};

export const deleteAllData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM AreaDetailsTable',
      [],
      (tx, res) => {
        console.log('All data deleted successfully');
      },
      error => {
        console.log('Error deleting all data:', error);
      },
    );
  });
};

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
