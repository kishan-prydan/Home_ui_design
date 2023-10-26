import db from '../../Database';


//create table query
export const createIrrigationTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Irrigation (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        deviceid INTEGER,
        devicename TEXT,
        subnetid INTEGER,
        channelid INTEGER,
        Isautomatic INTEGER, 
        startTime TEXT,
        EndTime TEXT,
        DayofWeek TEXT,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Irrigation table created successfully');
      },
      error => {
        console.error('Error creating Irrigation table:', error);
      },
    );
  });
};


//data insert query
export const insertIrrigationData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Irrigation (_id, deviceid, devicename, subnetid, channelid, Isautomatic, startTime, EndTime, DayofWeek, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.deviceid,
        item.devicename,
        item.subnetid,
        item.channelid,
        item.Isautomatic ? 1 : 0, // Convert boolean to integer
        item.startTime,
        item.EndTime,
        item.DayofWeek,
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Irrigation data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchIrrigationDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Irrigation WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Irrigation data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateIrrigationData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Irrigation SET ';
    const params = [];

    for (const key in updatedFields) {
      if (key !== '_id') {
        if (key === 'Isautomatic') {
          params.push(updatedFields[key] ? 1 : 0); // Convert boolean to integer
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
        console.log('Irrigation data updated successfully');
      } else {
        console.log('No Irrigation records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertIrrigationData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Irrigation WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertIrrigationData([item]);
        } else {
          const id = existingData[0]._id;
          updateIrrigationData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllIrrigationData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Irrigation',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Irrigation data from the local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Irrigation data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteIrrigationData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Irrigation WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Irrigation data deleted successfully');
      },
      error => {
        console.log('Error deleting Irrigation data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllIrrigationData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Irrigation',
      [],
      (tx, res) => {
        console.log('All Irrigation data deleted successfully');
      },
      error => {
        console.log('Error deleting all Irrigation data:', error);
      },
    );
  });
};
