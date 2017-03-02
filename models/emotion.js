var mongoose = require('mongoose');
var conversation_schema = mongoose.Schema({
    id_sentences: {type: mongoose.Schema.Types.ObjectId, ref: 'coll_sentences'},
    name_emotions: {type: String, required: true},
    percentage_emotions: {type: Number},
    updatedat_emotions: {type: Date, required: true},
    createdat_emotions: {type: Date, required: true},
});

module.exports = mongoose.model('coll_emotions', conversation_schema);