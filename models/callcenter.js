var mongoose = require('mongoose');
var callcenter_Schema = mongoose.Schema({
    id_agents: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_agents' },
    name_callcenters: {type: String, required: true},
    id_companies: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_companies' },
    id_campaigns: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_campaigns' },
    updatedat_callcenters: {type: Date, required: true},
    createdat_callcenters: {type: Date, required: true},
});
module.exports = mongoose.model('coll_callcenters', callcenter_Schema);