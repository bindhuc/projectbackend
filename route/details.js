const express = require("express")
const detailscontroller= require('../components/details')

const detailsrouter = express.Router()
detailsrouter.route("/details")
.get(detailscontroller.get)

module.exports=detailsrouter