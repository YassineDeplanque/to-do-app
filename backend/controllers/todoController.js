import { connection } from '../config/db.js';

export const getTask = async (req,res) => {
    try {
        const db = await connection();
        const query = 'SELECT * FROM task';
        const [result] = await db.execute(query);

        res.status(200).json(result)
    } catch (err) {
        console.error('Error retrieving tasks', err);
        res.status(500).json({sucess: false, message: "Servor error"});
    }
};