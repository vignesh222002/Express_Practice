import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Vignesh@123",
    database: "practice",
    port: 3306,
})