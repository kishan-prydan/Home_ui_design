import db from '../../Database';

//create table query
export const createCameraTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Camera (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        Title TEXT,
        WebURL TEXT,
        UserName TEXT,
        Port INTEGER,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        console.log('Camera table created successfully');
      },
      error => {
        console.error('Error creating Camera table:', error);
      },
    );
  });
};


//data insert query
export const insertCameraData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Camera (_id, Title, WebURL, UserName, Port, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.Title,
        item.WebURL,
        item.UserName,
        item.Port,
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Camera data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchCameraDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Camera WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Camera data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateCameraData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Camera SET ';
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
        console.log('Camera data updated successfully');
      } else {
        console.log('No Camera records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertCameraData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Camera WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertCameraData([item]);
        } else {
          const id = existingData[0]._id;
          updateCameraData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllCameraData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Camera',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Camera data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Camera data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteCameraData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Camera WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Camera data deleted successfully');
      },
      error => {
        console.log('Error deleting Camera data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllCameraData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Camera',
      [],
      (tx, res) => {
        console.log('All Camera data deleted successfully');
      },
      error => {
        console.log('Error deleting all Camera data:', error);
      },
    );
  });
};
