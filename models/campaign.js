var mongoose = require('mongoose');
var campaign_schema = mongoose.Schema({
    id_callcenters: {type: mongoose.Schema.Types.ObjectId, ref: 'coll_callcenters'},
    stardate_campaigns: {type: Date, required: true},
    enddate_campaigns: {type: Date, required: true},
    createdat_campaigns: {type: Date, required: true},
    updatedat_campaigns: {type: Date, required: true},
    language_campaigns : {type: String, required: true},
    name_campaigns: {type: String, required: true},
});
module.exports = mongoose.model('coll_campaigns', campaign_schema);