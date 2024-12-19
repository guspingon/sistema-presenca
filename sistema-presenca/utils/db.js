import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        empresa TEXT,
        func TEXT,
        refeicao TEXT
      );`
    );
  });
};

export const insertRecord = (empresa, func, refeicao) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO records (empresa, func, refeicao) VALUES (?, ?, ?);`,
      [empresa, func, refeicao]
    );
  });
};

export const getRecords = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM records;`,
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};

export default db;
