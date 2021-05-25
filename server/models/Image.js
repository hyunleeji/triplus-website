const mongoose = require('mongoose');
const Schema = mongoose.Schema

const imageSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    region: {
        type: String,
        maxlength: 50
    },
    country: {
        type: String
    },
    description: {
        type: String
    },
    continents: {
        type: String
    },
    images: {
        type:Array,
        default:[]
    },
    mood : {
        type: String
    },
    price : {
        type: Number,
        default: 0
    },
    filePath: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

imageSchema.index({
    region: 'text',
    country: 'text',
    description: 'text'
}, {
    weights:{
        region: 10,
        country: 5,
        description: 1
    }
})

const Image = mongoose.model('Image', imageSchema);

module.exports = { Image }