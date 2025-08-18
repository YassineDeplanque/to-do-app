import express from 'express';
import { getTask, createTask } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTask);
router.post('/', createTask);

export default router;