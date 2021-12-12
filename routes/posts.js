const express=require("express");
const postsController = require('../controllers/posts_controller')

const router =  express.Router();

router.get('/post' ,postsController.posts);

console.log("router loaded")
module.exports=router;