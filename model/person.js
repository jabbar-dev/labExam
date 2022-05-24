const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

    fullName: {
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
    zip:{
        type:String
    }

}) 

module.exports = mongoose.model('person', personSchema)