import db from '../../Database';


//create table query
export const createLightTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Light (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        deviceid INTEGER,
        devicename TEXT,
        lighttype TEXT,
        subnetid INTEGER,
        channelid INTEGER,
        onimage TEXT,
        offimage TEXT,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Light table created successfully');
      },
      error => {
        console.error('Error creating Light table:', error);
      },
    );
  });
};


//data insert query
export const insertLightData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Light (_id, deviceid, devicename, lighttype, subnetid, channelid, onimage, offimage, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.deviceid,
        item.devicename,
        item.lighttype,
        item.subnetid,
        item.channelid,
        JSON.stringify(item.onimage),
        JSON.stringify(item.offimage),
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Light data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchLightDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Light WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Light data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateLightData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Light SET ';
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
        console.log('Light data updated successfully');
      } else {
        console.log('No Light records were updated');
      }
    });
  });
};

//update or insert query
export const updateOrInsertLightData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Light WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertLightData([item]);
        } else {
          const id = existingData[0]._id;
          updateLightData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllLightData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Light',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Light data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Light data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteLightData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Light WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Light data deleted successfully');
      },
      error => {
        console.log('Error deleting Light data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllLightData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Light',
      [],
      (tx, res) => {
        console.log('All Light data deleted successfully');
      },
      error => {
        console.log('Error deleting all Light data:', error);
      },
    );
  });
};
