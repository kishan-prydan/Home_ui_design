import db from '../Database';

//create table query
export const createZoneTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS ZoneDetailsTable (id INTEGER PRIMARY KEY AUTOINCREMENT, areazoneid INTEGER, customerid TEXT, zoneid INTEGER, title TEXT, subnetid TEXT, image TEXT, arearole INTEGER, _id TEXT)',
      [],
      () => {
        // console.log('Zone Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};


//data insert query
export const insertZoneData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO ZoneDetailsTable (areazoneid, customerid, zoneid, title, subnetid, image, arearole, _id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item.Areazoneid,
        item.customerid,
		item.zoneid,
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


//fetch data by id query
export const fetchZoneDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM ZoneDetailsTable WHERE _id = ?';
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
export const updateZoneData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE AND REPLACE ZoneDetailsTable SET ';
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
export const updateOrInsertZoneData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM ZoneDetailsTable WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        // console.log('res from updateandreplace-------', res);

        if (existingData.length === 0) {
          // console.log('existingData from updateandreplace-------', existingData);
          insertZoneData([item]);
          showSuccess('Data inserted successfully')
        } else {
          // If existing data found, update the existing row
          const id = existingData[0]._id;
          // console.log('id from updateandreplace-------', id);

          updateZoneData(id, item);
          showSuccess('Data updated successfully')
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllZoneData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM ZoneDetailsTable',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('all zones data from local database', rows);
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


//delete data by id query
export const deleteZoneData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM ZoneDetailsTable WHERE _id = ?',
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
export const deleteAllZoneData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM ZoneDetailsTable',
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

