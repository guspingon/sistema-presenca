import { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database) {
    await database.execAync(
        `CREATE TABLE IF NOT EXISTS funcionarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        ),
        CREATE TABLE IF NOT EXISTS Empresas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idfunc INTEGER,
            date DATE,
            refeicao TEXT
            `
    )}