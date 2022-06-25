
const mongoose = require('mongoose')
const HomeImageSchema = new mongoose.Schema({
    
    heading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    showingImage:{
       type:Object,
       requierd:true
    },

    hoverImage:{
        type:Object,
        required:true
    },

    client:{
        type:String,
    },
    role:{
        type:String,
    },
    url:{
        type:String
    },
    relatedImages:{
        type:Array,
        default:[]
    }
        
    
},{
    timestamps:true
})

const Homeimages = mongoose.model('homeimages',HomeImageSchema)

module.exports = Homeimages