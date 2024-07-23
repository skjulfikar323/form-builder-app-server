const express = require('express');
const router = express.Router();

// Register route
const userController = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);

// router.post('/getAllTask', auth, userTask.getAllTask);
// router.post('/getAllTaskById', auth, userTask.getAllTaskById);
// router.post('/getAllTaskByDate', auth, userTask.getAllTaskByDate);
// router.post('/createTask', auth, userTask.createTask);
// router.post('/updateTask', auth, userTask.updateTask);
// router.post('/deleteTask', auth, userTask.deleteTask);


// router.post('/getAllBacklogTask', userTask.getAllBacklogTask);
// router.post('/getAllToDoTasks', userTask.getAllToDoTasks);
// router.post('/getAllInProcess', userTask.getAllInProcess);
// router.post('/getAllompletedTask', userTask.getAllompletedTask);
// router.post('/getAllLowPriorityTask', userTask.getAllLowPriorityTask);
// router.post('getAllModeratePriorityTask', userTask.getAllModeratePriorityTask);
// router.post('getAllDueDateTask', userTask.getAllDueDateTask);
// router.post('/getAllHighPriorityTask', userTask.getAllHighPriorityTask);

// router.post('/getAllTask', userTask.getAllTask);
// router.post('/getAllTaskById', userTask.getAllTaskById);
// router.post('/getAllTaskByDate', userTask.getAllTaskByDate);
// router.post('/createTask', userTask.createTask);
// router.post('/updateTask', userTask.updateTask);
// router.post('/deleteTask', userTask.deleteTask);

// router.get('/profile', auth, userController.getProfile);
// router.post('/updateSetting', auth, userController.updateSetting);
// router.post('/updateSetting', auth, userController.deleteUser);

module.exports = router;


