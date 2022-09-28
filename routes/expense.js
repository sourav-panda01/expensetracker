const express = require('express');

const controller = require('../controllers/expense');

const router = express.Router();
router.get('/get', controller.getExpense);
router.post('/post', controller.postExpense);
router.delete('/delete/:id', controller.deleteExpense);


module.exports=router