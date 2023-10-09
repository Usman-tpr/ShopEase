const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    cate:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        default:[],
        required:true,
    },
    bill:{
        type:Boolean,
        required:true,
    },
    box:{
        type:Boolean,
        required:true,
    },
    warranty:{
        type:Boolean,
        required:true,
    }

},{timestamp:true}
)

module.exports = mongoose.model('Product',productSchema)