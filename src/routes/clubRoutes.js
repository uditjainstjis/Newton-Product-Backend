const express = require("express");

const {fetchClubs} = require('../controllers/clubControllers')

const router = express.Router()

router.get('/', fetchClubs)
router.post('/')
router.patch('/')
router.delete('/')
 
module.exports = router;