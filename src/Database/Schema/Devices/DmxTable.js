import db from '../../Database';


//create table query
export const createDmxTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Dmx (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        title TEXT,
        zoneid INTEGER,
        customerid TEXT,
        subnetid INTEGER,
        deviceid INTEGER,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Dmx table created successfully');
      },
      error => {
        console.error('Error creating Dmx table:', error);
      },
    );
  });
};


//data insert query
export const insertDmxData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Dmx (_id, title, zoneid, customerid, subnetid, deviceid, status) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.title,
        item.zoneid,
        item.customerid,
        item.subnetid,
        item.deviceid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Dmx data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchDmxDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Dmx WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Dmx data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateDmxData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Dmx SET ';
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
        console.log('Dmx data updated successfully');
      } else {
        console.log('No Dmx records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertDmxData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Dmx WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertDmxData([item]);
        } else {
          const id = existingData[0]._id;
          updateDmxData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllDmxData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Dmx',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Dmx data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Dmx data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteDmxData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Dmx WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Dmx data deleted successfully');
      },
      error => {
        console.log('Error deleting Dmx data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllDmxData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Dmx',
      [],
      (tx, res) => {
        console.log('All Dmx data deleted successfully');
      },
      error => {
        console.log('Error deleting all Dmx data:', error);
      },
    );
  });
};
