import express from 'express';
import { getTask, createTask, deleteTask } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);

export default router;