const express = require("express")
const detailsrouter1 = require('./route/details')
const detailsrouter2 = require('./route/bollywood')
const cors = require("cors")
const app = express()


app.use(cors())
// app.use('/',function(req,res){
//     res.send("fun")
// })
app.use('/api',detailsrouter1)
app.use('/bolly',detailsrouter2)

app.listen(process.env.PORT||8001,()=>{
    console.log("app is running")
})