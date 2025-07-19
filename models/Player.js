
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    skill:{
        type:String,
        enum:["batsman" ,"bowler" ,"coach"],
        required:true,
    },

    weight:{
        type:String,
    },


    email:{
        type:String,
        required: true,
        unique: true
    },

    range:{
        type:String,
        default:false
    },

    no_players:{

        type:Number,
        default:0
    },

    ingredients:{
        type :[String],
        default:[]
    },

})

const Player = mongoose.model('player',playerSchema);
module.exports = Player;