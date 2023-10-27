import db from '../../Database';

//create table query
export const createSequenceTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Sequence (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        Remark TEXT,
        Subnetid INTEGER,
        Deviceid INTEGER,
        AreaNo INTEGER,
        SequenceNo INTEGER,
        onimage BLOB,
        offimage BLOB,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Sequence table created successfully');
      },
      error => {
        console.error('Error creating Sequence table:', error);
      },
    );
  });
};

//data insert query
export const insertSequenceData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Sequence (_id, Remark, Subnetid, Deviceid, AreaNo, SequenceNo, onimage, offimage, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.Remark,
        item.Subnetid,
        item.Deviceid,
        item.AreaNo,
        item.SequenceNo,
        item.onimage,
        item.offimage,
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Sequence data inserted successfully');
      });
    });
  });
};

//fetch data by id query
export const fetchSequenceDataById = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Sequence WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Sequence data:', error);
          reject(error);
        },
      );
    });
  });
};

//update query
export const updateSequenceData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Sequence SET ';
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
        console.log('Sequence data updated successfully');
      } else {
        console.log('No Sequence records were updated');
      }
    });
  });
};

//update or insert query
export const updateOrInsertSequenceData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Sequence WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertSequenceData([item]);
        } else {
          const id = existingData[0]._id;
          updateSequenceData(id, item);
        }
      });
    });
  });
};

//fetch all data query
export const fetchAllSequenceData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Sequence',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Sequence data from the local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Sequence data:', error);
          reject(error);
        },
      );
    });
  });
};

//delete data by id query
export const deleteSequenceData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Sequence WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Sequence data deleted successfully');
      },
      error => {
        console.log('Error deleting Sequence data:', error);
      },
    );
  });
};

//delete all data query
export const deleteAllSequenceData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Sequence',
      [],
      (tx, res) => {
        console.log('All Sequence data deleted successfully');
      },
      error => {
        console.log('Error deleting all Sequence data:', error);
      },
    );
  });
};
