import db from '../../Database';


//create table query
export const createScenesTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Scenes (
		  id INTEGER PRIMARY KEY AUTOINCREMENT,
		  _id TEXT,
		  Remark TEXT,
		  Subnetid TEXT,
		  Deviceid TEXT,
		  AreaNo TEXT,
		  ScenceNo INTEGER,
		  onimage TEXT,
		  offimage TEXT,
		  zoneid INTEGER,
		  customerid TEXT,
		  status TEXT
		)`,
      [],
      () => {
        console.log('Scenes table created successfully');
      },
      error => {
        console.error('Error creating Scenes table:', error);
      },
    );
  });
};


//data insert query
export const insertScenesData = data => {
  db.transaction(txn => {
		data.forEach(item => {
			const query =
			'INSERT INTO Scenes (_id, Remark, Subnetid, Deviceid, AreaNo, ScenceNo, onimage, offimage, zoneid, customerid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
			const params = [
				item._id,
				item.Remark,
				item.Subnetid,
				item.Deviceid,
				item.AreaNo,
				item.ScenceNo,
				JSON.stringify(item.onimage),
				JSON.stringify(item.offimage),
				item.zoneid,
				item.customerid,
				item.status,
      ];
      txn.executeSql(query, params, (tx, res) => {
        console.log('insert data params========================', params);
        console.log('Data inserted successfully');
      });
  });
  });
};


//fetch data by id query
export const fetchSceneDataId = _id => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      const query = 'SELECT * FROM Scenes WHERE _id = ?';
      const params = [_id];
      txn.executeSql(
        query,
        params,
        (tx, res) => {
          const rows = res.rows.raw();
          resolve(rows);
        },
        error => {
          console.log('Error retrieving data:', error);
          reject(error);
        },
      );
    });
  });
};


//update query
export const updateScenesData = (_id, updatedFields) => {
  db.transaction(txn => {
    const query = 'UPDATE AND REPLACE Scenes SET ';
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
        console.log('Data updated successfully');
      } else {
        console.log('No records were updated');
      }
    });
  });
};


//update or insert query
export const updateOrInsertScenesData = data => {
  db.transaction(txn => {
    data.forEach(item => {
      const _id = item._id;
      const query = 'SELECT * FROM Scenes WHERE _id = ?';
      const params = [_id];

      txn.executeSql(query, params, (tx, res) => {
        const existingData = res.rows.raw();

        // console.log('res from updateandreplace-------', res);

        if (existingData.length === 0) {
          // console.log('existingData from updateandreplace-------', existingData);
          insertScenesData([item]);
        } else {
          // If existing data found, update the existing row
          const id = existingData[0]._id;
          // console.log('id from updateandreplace-------', id);

          updateScenesData(id, item);
        }
      });
    });
  });
};


//fetch all data query
export const fetchAllScenesData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Scenes',
        [],
        (tx, res) => {
          const rows = res.rows.raw();
          console.log('all Scenes data from local database', rows);
          resolve(rows);
        },
        error => {
          // console.log('Error retrieving data:', error);
          reject(error);
        },
      );
    });
  });
};


//delete data by id query
export const deleteScenesData = _id => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Scenes WHERE _id = ?',
      [_id],
      (tx, res) => {
        console.log('Data deleted successfully');
      },
      error => {
        console.log('Error deleting data:', error);
      },
    );
  });
};


//delete all data query
export const deleteAllScenesData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM Scenes',
      [],
      (tx, res) => {
        console.log('All data deleted successfully');
      },
      error => {
        console.log('Error deleting all data:', error);
      },
    );
  });
};
