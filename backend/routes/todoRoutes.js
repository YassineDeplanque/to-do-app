import express from 'express';
import { getTask } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTask);

export default router;