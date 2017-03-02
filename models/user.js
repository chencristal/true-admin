var mongoose = require('mongoose');
var user_schema = mongoose.Schema({
    state_users: {type: Number, required: true},
    password_users: {type: String, required: true},
    id_companies: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_companies'},
    id_typeusers: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeUsersModel'},
    name_users: {type: String, required: true},
    email_users: {type: String, required: true},
    username_users: {type: String, required: true},
    updatedat_users: {type: Date, required: true},
    createdat_users: {type: Date, required: true},
});
module.exports = mongoose.model('coll_users', user_schema);