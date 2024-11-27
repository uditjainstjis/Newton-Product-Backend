const express = require("express");

const {fetchMessMenu} = require('../controllers/messmenuControllers')

const router = express.Router()

router.get('/', fetchMessMenu)
router.post('/')
router.patch('/')
router.delete('/')
 
module.exports = router;