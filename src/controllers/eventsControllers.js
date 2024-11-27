const Events = require('../models/eventsModel')

const fetchEvents = async (req, res)=>{
    res.send("ye le events")
}

module.exports={
    fetchEvents
}