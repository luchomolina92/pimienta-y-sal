const express = require('express');
const router = express.Router(); 
const{index , detalleMenu} = require('../controllers/menucontrollers')

/* GET home page. */
router.get('/', index);
router.get('/detalle/:id', detalleMenu);

module.exports = router;
