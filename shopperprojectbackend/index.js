const express = require("express")
const app = new express()
const port = 8000


//db connection
const mongoose = require("mongoose")

//import created models 
const User = require("./models/user")
mongoose.connect('mongodb://localhost/shopperonline', {useNewUrlParser: true,
useUnifiedTopology:true}).then(()=>{
    console.log("DB CONNECTEED")
})


app.listen(port,()=>{
    console.log(`The port is running on port ${port}`)
})