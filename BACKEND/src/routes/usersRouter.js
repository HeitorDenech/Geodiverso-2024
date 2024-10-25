const { Router } = require('express');
const router = Router();
const { storeUser } = require('../controller/usersController');
const { deleteConta } = require('../controller/usersController');

/**
* @swagger
* /user/create:
*   post:
*     summary: Cria um novo usuário
*     responses:
*        200:
*           description: Insere dados de um usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.post('/user/create', storeUser);

/**
* @swagger
* /deleteConta:
*   delete:
*     summary: Deletar conta
*     responses:
*        200:
*           description: Deleta a conta do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.delete('/deleteConta', deleteConta);  

module.exports = router;