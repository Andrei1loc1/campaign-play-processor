import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_PATH = './events_log.db';
let db;

export async function initializeDB() {
    db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS events_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            screen_id TEXT,
            campaign_id TEXT,
            timestamp TEXT,
            ingestion_time TEXT
        );
    `);

    console.log(`Database initialized at ${DB_PATH}`);
}

export async function logEvent(event) {
    if (!db) {
        console.error("Database not initialized.");
        return;
    }

    const { screen_id, campaign_id, timestamp } = event;
    const ingestion_time = new Date().toISOString();

    try {
        await db.run(
            `INSERT INTO events_log (screen_id, campaign_id, timestamp, ingestion_time)
             VALUES (?, ?, ?, ?)`,
            [screen_id, campaign_id, timestamp, ingestion_time]
        );
    } catch (error) {
        console.error("Failed to log event:", error);
    }
}