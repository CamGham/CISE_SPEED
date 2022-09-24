const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    authors:{
        type:String,
        required:true
    },
    journal:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    volvume:{
        type:Number,
        required:true
    },
    version:{
        type:Number,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    doi:{
        type:String,
        required:true
    }
});

module.exports = subArticle = mongoose.model('subarticle', ArticleSchema);