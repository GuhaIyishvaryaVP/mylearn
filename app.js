const express = require('express')
const productRouter  = require("./routes/productRoutes")
const app = express()



// middleware

app.use(express.json())
// 

app.use('/product',productRouter)




module.exports = app
