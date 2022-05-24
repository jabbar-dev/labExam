const express = require('express')
const res = require('express/lib/response')
const app = express()
const register = require('./controllers/register')
app.set('view engine', 'ejs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/person')

app.listen(6001,console.log("Server is In Air"))
app.use(express.urlencoded({extended:false}))



app.get('/', (req,res)=>{

    res.render('register')

})


app.use('/register',register)
module.exports = app;