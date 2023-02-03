/* eslint-disable linebreak-style */
const express = require('express');
const taskController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validarTitulo, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTasks);
router.put('/tasks/:id', 
  tasksMiddleware.validarTitulo, 
  tasksMiddleware.validarStatus,
  taskController.updateTasks);

module.exports = router;
