let express = require('express');
let router = express.Router();


let usersController = require('../Controllers/usersController')

router.get('/detail/:id', usersController.getOne);
router.get('/list', usersController.getAll);
router.post('/create', usersController.create);
router.post('/update', usersController.update);
router.post('/remove', usersController.remove);

module.exports = router