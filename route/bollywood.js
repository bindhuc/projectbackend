const express = require("express")
const detailscontroller= require('../components/Bollywood')

const detailsrouter2 = express.Router()
detailsrouter2.route("/bollywood")
.get(detailscontroller.apicontroller)

module.exports=detailsrouter2