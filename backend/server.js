import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

// app.use('/todo' todoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
