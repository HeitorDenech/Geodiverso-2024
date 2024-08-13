const { Router } = require('express');
const router = Router();

const { storeConteudo } = require('../controller/conteudoController');

router.get('/store/conteudo', storeConteudo);

module.exports = router;