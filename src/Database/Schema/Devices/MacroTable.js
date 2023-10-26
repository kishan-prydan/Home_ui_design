import db from '../../Database';


//create table query
export const createMacroTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Macro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        title TEXT,
        subnetid INTEGER,
        deviceid INTEGER,
        macroNo INTEGER,
        onimage TEXT,
        offimage TEXT,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        console.log('Macro table created successfully');
      },
      error => {
        console.error('Error creating Macro table:', error);
      },
    );
  });
};


//data insert query
export const insertMacroData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Macro (_id, title, subnetid, deviceid, macroNo, onimage, offimage, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.title,
        item.subnetid,
        item.deviceid,
        item.macroNo,
        JSON.stringify(item.onimage),
        JSON.stringify(item.offimage),
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Macro data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchMacroDataById = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Macro WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Macro data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateMacroData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Macro SET ';
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
        console.log('Macro data updated successfully');
      } else {
        console.log('No Macro records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertMacroData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Macro WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertMacroData([item]);
        } else {
          const id = existingData[0]._id;
          updateMacroData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllMacroData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Macro',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Macro data from the local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Macro data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteMacroData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Macro WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Macro data deleted successfully');
      },
      error => {
        console.log('Error deleting Macro data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllMacroData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Macro',
      [],
      (tx, res) => {
        console.log('All Macro data deleted successfully');
      },
      error => {
        console.log('Error deleting all Macro data:', error);
      },
    );
  });
};
