const express=require("express");
const userController = require('../controllers/users_controller')

const router =  express.Router();

router.get('/profile' ,userController.profile);

console.log("router loaded");


module.exports=router;