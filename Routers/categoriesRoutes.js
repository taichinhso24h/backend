let express = require('express');
let router = express.Router();


let categoriesController = require('../Controllers/CategoriesController')

router.get('/get-detail/:id', categoriesController.getOne);
router.get('/get-all', categoriesController.getAll);
router.post('/create-categories', categoriesController.createCategory);

module.exports = router