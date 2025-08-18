import express from 'express';
import { getTask, createTask, deleteTask, editTask } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', editTask);

export default router;