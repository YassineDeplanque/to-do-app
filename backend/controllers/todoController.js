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

export const createTask = async (req, res) => {
    const { texte } = req.body;

    if(!texte){
        return res.status(400).json({ success: false, message: "Name required." });
    }

    try {
        const db = await connection();
        const query = 'INSERT INTO task (texte) VALUES (?)';
        const [result] = await db.execute(query, [texte]);

        res.status(201).json({ 
            success: true, 
            message: "Task added", 
            contactId: result.insertId 
        })
    } catch (err) {
        console.error('Error inserting task', err);
        res.status(500).json({sucess: false, message: "Servor error"});
    }
}
