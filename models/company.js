var mongoose = require('mongoose');
var company_schema = mongoose.Schema({
    coll_datacompanies: [{
        facebook_companies: {type: String},
        youtube_companies:{type: String},
        email_companies: {type:String},
        phone_companies:{type:String},
        twitter_companies: {type: String},
        logo_companies: {type: String},
        country_companies: {type: String},
        language_companies:{type: String},
    }],
    name_companies: {type: String, required: true},
    createdat_datecompanies: {type: Date, required: true},
    updatedat_datecompanies: {type: Date, required: true},
    users_companies:{ type: mongoose.Schema.Types.ObjectId, ref: 'coll_users' },
    id_products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductsModel' }]
});
module.exports = mongoose.model('coll_companies', company_schema);