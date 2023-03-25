const mongoose = require('mongoose')
const {Schema} = mongoose

const marvelSchema  = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modified: {
        type: String,
        required: true
    }
})

const marvelModel = mongoose.model('characters', marvelSchema)

module.exports = marvelModel