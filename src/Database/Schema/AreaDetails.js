import { showSuccess } from '../../utils/helperFunction';
import db from '../Database';

//create table query
export const createAreaTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS AreaDetailsTable (id INTEGER PRIMARY KEY AUTOINCREMENT, areazoneid INTEGER, customerid TEXT, title TEXT, subnetid TEXT, image BLOB, arearole INTEGER, _id TEXT)',
      [],
      () => {
        // console.log('Area Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};


//data insert query
export const insertAreaData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO AreaDetailsTable (areazoneid, customerid, title, subnetid, image, arearole, _id) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item.Areazoneid,
        item.customerid,
        item.title,
        item.subnetid,
        item.image,
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


//fetch data by id query
export const fetchAreaDataId = _id => {
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


//update query
export const updateAreaData = (_id, updatedFields) => {
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


//update or insert query
export const updateOrInsertAreaData = data => {
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
          insertAreaData([item]);
          showSuccess('Data inserted successfully')
        } else {
          // If existing data found, update the existing row
          const id = existingData[0]._id;
          // console.log('id from updateandreplace-------', id);
          updateAreaData(id, item);
          showSuccess('Data updated successfully')
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllAreaData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM AreaDetailsTable',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('all areas data from local database', rows);
          resolve(rows);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteAreaData = _id => {
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


//delete all data query
export const deleteAllAreaData = () => {
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
