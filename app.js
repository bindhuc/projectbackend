const express = require("express")
const detailsrouter2 = require('./route/details')
const cors = require("cors")
const app = express()


app.use(cors())
app.use('/',function(req,res){
    res.send("fun")
})
app.use('/api',detailsrouter2)


app.listen(3044,()=>{
    console.log("app is running")
})