import db from '../../Database';


//create table query
export const createCurtainTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Curtin (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        _id TEXT,
        devicename TEXT,
        Shadetype TEXT,
        Mangedby TEXT,
        HasStop INTEGER,
        HasRotate INTEGER,
        onimage TEXT,
        offimage TEXT,
        zoneid INTEGER,
        customerid TEXT,
        status TEXT
      )`,
      [],
      () => {
        // console.log('Curtain table created successfully');
      },
      error => {
        console.error('Error creating Curtin table:', error);
      },
    );
  });
};


//data insert query
export const insertCurtainData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const query =
        'INSERT INTO Curtin (_id, devicename, Shadetype, Mangedby, HasStop, HasRotate, onimage, offimage, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const params = [
        item._id,
        item.devicename,
        item.Shadetype,
        item.Mangedby,
        item.HasStop,
        item.HasRotate,
        JSON.stringify(item.onimage),
        JSON.stringify(item.offimage),
        item.zoneid,
        item.customerid,
        item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('Curtin data inserted successfully');
      });
    });
  });
};


//fetch data by id query
export const fetchCurtainDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Curtin WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Curtin data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateCurtainData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE Curtin SET ';
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
        console.log('Curtin data updated successfully');
      } else {
        console.log('No Curtin records were updated');
      }
    });
  });
};

//update or insert query
export const updateOrInsertCurtainData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Curtin WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        if (existingData.length === 0) {
          insertCurtainData([item]);
        } else {
          const id = existingData[0]._id;
          updateCurtainData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllCurtainData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Curtin',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('All Curtin data from local database', rows);
          resolve(rows);
        },
        error => {
          console.log('Error retrieving Curtin data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteCurtainData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Curtin WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Curtin data deleted successfully');
      },
      error => {
        console.log('Error deleting Curtin data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllCurtainData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Curtin',
      [],
      (tx, res) => {
        console.log('All Curtin data deleted successfully');
      },
      error => {
        console.log('Error deleting all Curtin data:', error);
      },
    );
  });
};
