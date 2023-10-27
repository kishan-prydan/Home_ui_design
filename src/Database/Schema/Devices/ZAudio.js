import db from '../../Database';

export const createZAudioTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS ZAudio (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        subnetid TEXT,
        deviceid TEXT,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('ZAudio table created successfully');
      },
      error => {
        console.error('Error creating ZAudio table:', error);
      },
    );
  });
};

export const insertZAudioData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO ZAudio (_id, subnetid, deviceid, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.subnetid,
        item.deviceid,
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('ZAudio data inserted successfully');
      });
    });
  });
};

export const fetchZAudioDataById = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM ZAudio WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving ZAudio data:', error);
          reject(error);
        },
      );
    });
  });
};

export const updateZAudioData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE ZAudio SET ';
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
        console.log('ZAudio data updated successfully');
      } else {
        console.log('No ZAudio records were updated');
      }
    });
  });
};

export const updateOrInsertZAudioData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM ZAudio WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertZAudioData([item]);
        } else {
          const id = existingData[0]._id;
          updateZAudioData(id, item);
        }
      });
    });
  });
};

export const fetchAllZAudioData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM ZAudio',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All ZAudio data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving ZAudio data:', error);
          reject(error);
        },
      );
    });
  });
};

export const deleteZAudioData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM ZAudio WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('ZAudio data deleted successfully');
      },
      error => {
        console.log('Error deleting ZAudio data:', error);
      },
    );
  });
};

export const deleteAllZAudioData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM ZAudio',
      [],
      (tx, res) => {
        console.log('All ZAudio data deleted successfully');
      },
      error => {
        console.log('Error deleting all ZAudio data:', error);
      },
    );
  });
};
