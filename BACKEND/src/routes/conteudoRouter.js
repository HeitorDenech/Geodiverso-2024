const { Router } = require('express');
const router = Router();

const { getConteudo } = require('../controller/conteudoController');

/**
* @swagger
* /conteudos:
*   get:
*     summary: Pega os conteudo
*     responses:
*        200:
*           description: Listando os conteúdos
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/

router.get('/conteudos', getConteudo)
// router.get('/store/conteudo', storeConteudo);

module.exports = router;