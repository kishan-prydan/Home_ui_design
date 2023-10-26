import db from '../../Database';


//create table query
export const createFanTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Fan (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        deviceid INTEGER,
        devicename TEXT,
        fantype TEXT,
        subnetid INTEGER,
        channelid INTEGER,
        gear INTEGER,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Fan table created successfully');
      },
      error => {
        console.error('Error creating Fan table:', error);
      },
    );
  });
};


//data insert query
export const insertFanData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Fan (_id, deviceid, devicename, fantype, subnetid, channelid, gear, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.deviceid,
        item.devicename,
        item.fantype,
        item.subnetid,
        item.channelid,
        item.gear,
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Fan data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchFanDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Fan WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Fan data:', error);
          reject (error);
        },
      );
    });
  });
};


//update query
export const updateFanData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Fan SET ';
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
        console.log('Fan data updated successfully');
      } else {
        console.log('No Fan records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertFanData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Fan WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertFanData([item]);
        } else {
          const id = existingData[0]._id;
          updateFanData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllFanData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Fan',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Fan data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Fan data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteFanData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Fan WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Fan data deleted successfully');
      },
      error => {
        console.log('Error deleting Fan data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllFanData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Fan',
      [],
      (tx, res) => {
        console.log('All Fan data deleted successfully');
      },
      error => {
        console.log('Error deleting all Fan data:', error);
      },
    );
  });
};
