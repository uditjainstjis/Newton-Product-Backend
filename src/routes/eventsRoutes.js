const express = require("express");

const {fetchEvents} = require('../controllers/eventsControllers')

const router = express.Router()

router.get('/', fetchEvents)
router.post('/')
router.patch('/')
router.delete('/')
 
module.exports = router;