const express = require('express');
const router = express.Router();

const brotherController = require('./serverCreation');
console.log("router");

router.post('/show',brotherController.show);
router.post('/store',brotherController.store);
router.post('/update',brotherController.update);
router.post('/delete',brotherController.destroy);

module.exports=router;