import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config();

export const connection = async () => {
    const connection = await mysql2.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DBNAME
    })

try {
    const [results, fields] = await connection.query(
        'SELECT * FROM `task`'
    );
    console.log(results);
    console.log(fields);
} catch (err) {
    console.log(err);
}

return connection;

};

connection();