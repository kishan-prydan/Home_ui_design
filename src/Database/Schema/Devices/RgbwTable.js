import db from '../../Database';


//create table query
export const createRgbwTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Rgbw (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        title TEXT,
        zoneid INTEGER,
        customerid TEXT,
        subnetid INTEGER,
        deviceid INTEGER,
        RedEnabled BOOLEAN,
        RedValue INTEGER,
        BlueEnabled BOOLEAN,
        BlueValue INTEGER,
        GreenEnabled BOOLEAN,
        GreenValue INTEGER,
        WhiteEnabled BOOLEAN,
        WhiteValue INTEGER,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Rgbw table created successfully');
      },
      error => {
        console.error('Error creating Rgbw table:', error);
      },
    );
  });
};


//data insert query
export const insertRgbwData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Rgbw (_id, title, zoneid, customerid, subnetid, deviceid, RedEnabled, RedValue, BlueEnabled, BlueValue, GreenEnabled, GreenValue, WhiteEnabled, WhiteValue, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.title,
        item.zoneid,
        item.customerid,
        item.subnetid,
        item.deviceid,
        item.Red[0],
        item.Red[1],
        item.Blue[0],
        item.Blue[1],
        item.Green[0],
        item.Green[1],
        item.White[0],
        item.White[1],
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Rgbw data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchRgbwDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Rgbw WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Rgbw data:', error);
          reject (error);
        },
      );
    });
  });
};


//update query
export const updateRgbwData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Rgbw SET ';
    const params = [];

    for (const key in updatedFields) {
      if (key !== '_id') {
        if (key.endsWith('Enabled')) {
          query += `${key} = ?, `;
          params.push(updatedFields[key] ? 1 : 0);
        } else {
          query += `${key} = ?, `;
          params.push(updatedFields[key]);
        }
      }
    }

    query = query.slice(0, -2) + ' WHERE _id = ?';
    params.push(_id);

    txn.executeSql(query, params, (tx, res) => {
      if (res.rowsAffected > 0) {
        console.log('Rgbw data updated successfully');
      } else {
        console.log('No Rgbw records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertRgbwData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Rgbw WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertRgbwData([item]);
        } else {
          const id = existingData[0]._id;
          updateRgbwData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllRgbwData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Rgbw',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Rgbw data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Rgbw data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteRgbwData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Rgbw WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Rgbw data deleted successfully');
      },
      error => {
        console.log('Error deleting Rgbw data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllRgbwData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Rgbw',
      [],
      (tx, res) => {
        console.log('All Rgbw data deleted successfully');
      },
      error => {
        console.log('Error deleting all Rgbw data:', error);
      },
    );
  });
};
