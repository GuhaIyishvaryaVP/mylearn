const express = require('express')
const productRouter  = require("./routes/productRoutes")
const app = express()
const port = 4000

// middleware

app.use(express.json())
// 

app.use('/product',productRouter)




module.exports = app
