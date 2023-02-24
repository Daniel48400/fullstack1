const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
    nom: { type: String, require: true},
    description: { type: String, require: true}
    
})

module.exports = mongoose.model('CocktailModel', PostSchema)