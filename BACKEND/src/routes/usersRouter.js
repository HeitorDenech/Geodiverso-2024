const { Router } = require('express');
const router = Router();
const { storeUser } = require('../controller/usersController');
const { deleteConta } = require('../controller/usersController');


router.post('/user/create', storeUser);
router.delete('/deleteConta', deleteConta);  

module.exports = router;