import db from '../../Database';

export const createOtherControlsTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS OtherControls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        channel1 TEXT,
        channel2 TEXT,
        channelid TEXT,
        customerid TEXT,
        deviceid INTEGER,
        logicOFF INTEGER,
        logicON INTEGER,
        onimage BLOB,
        offimage BLOB,
        remark TEXT,
        status TEXT,
        subnetid INTEGER,
        type TEXT,
        zoneid INTEGER
      )`,
      [],
      () => {
        console.log('OtherControls table created successfully');
      },
      error => {
        console.error('Error creating OtherControls table:', error);
      },
    );
  });
};

export const insertOtherControlsData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO OtherControls (_id, channel1, channel2, channelid, customerid, deviceid, logicOFF, logicON, offimage, onimage, remark, status, subnetid, type, zoneid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.channel1,
        item.channel2,
        item.channelid,
        item.customerid,
        item.deviceid,
        item.logicOFF,
        item.logicON,
        item.onimage,
        item.offimage,
        item.remark,
        item.status,
        item.subnetid,
        item.type,
        item.zoneid,
      ];
      txn.executeSql(query, params, (tx, res) => {
        // console.log('OtherControls data inserted successfully');
      });
    });
  });
};

export const fetchOtherControlsDataById = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM OtherControls WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving OtherControls data:', error);
          reject(error);
        },
      );
    });
  });
};

export const updateOtherControlsData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE OtherControls SET ';
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
        console.log('OtherControls data updated successfully');
      } else {
        console.log('No OtherControls records were updated');
      }
    });
  });
};

export const updateOrInsertOtherControlsData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM OtherControls WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertOtherControlsData([item]);
        } else {
          const id = existingData[0]._id;
          updateOtherControlsData(id, item);
        }
      });
    });
  });
};

export const fetchAllOtherControlsData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM OtherControls',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All OtherControls data from the local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving OtherControls data:', error);
          reject(error);
        },
      );
    });
  });
};

export const deleteOtherControlsData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM OtherControls WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('OtherControls data deleted successfully');
      },
      error => {
        console.log('Error deleting OtherControls data:', error);
      },
    );
  });
};

export const deleteAllOtherControlsData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM OtherControls',
      [],
      (tx, res) => {
        console.log('All OtherControls data deleted successfully');
      },
      error => {
        console.log('Error deleting all OtherControls data:', error);
      },
    );
  });
};
