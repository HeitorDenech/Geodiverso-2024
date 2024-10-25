const express = require('express');
const router = express.Router();
 
const { login, getUser } = require("../controller/loginController");
 
/**
* @swagger
* /login:
*   post:
*     summary: Fazendo Login
*     responses:
*        200:
*           description: Faz consulta do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.post('/login', login);

/**
* @swagger
* /getUser:
*   post:
*     summary: Pegar usuário
*     responses:
*        200:
*           description: Vai pegar o usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.post('/getUser', getUser);
 
module.exports = router;