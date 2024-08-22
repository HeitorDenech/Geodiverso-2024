const { Router } = require('express');
const router = Router();

const { getConteudo } = require('../controller/conteudoController');

router.get('/conteudos', getConteudo)
// router.get('/store/conteudo', storeConteudo);

module.exports = router;