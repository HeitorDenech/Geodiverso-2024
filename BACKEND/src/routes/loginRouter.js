const express = require('express');
const router = express.Router();
 
const { login, getUser } = require("../controller/loginController");
 
router.post('/login', login);
router.post('/getUser', getUser);
 
module.exports = router;