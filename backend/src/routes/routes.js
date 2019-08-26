
const express = require('express');

const employeesController = require('../controllers/employees');

const router = express.Router();

router.post('/register', employeesController.postRegisterUser);

router.post('/login', employeesController.postLoginUser);

router.post('/create', employeesController.postCreateUser);

router.put('/edit/:id', employeesController.putEditUser);

router.get('/users', employeesController.getAllUsers);

router.delete('/delete/:id', employeesController.deleteUser);

module.exports = router;
