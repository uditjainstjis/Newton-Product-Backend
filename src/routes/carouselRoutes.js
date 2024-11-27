const express = require("express");

const {fetchCarousel} = require('../controllers/carouselControllers')

const router = express.Router()

router.get('/', fetchCarousel)
router.post('/')
router.patch('/')
router.delete('/')
 
module.exports = router;