var mongoose = require('mongoose');

var agent_schema = mongoose.Schema({
    id_callcenters: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_callcenters' },
    code_agents: {type: String, required: true},
    id_campaigns: {type: mongoose.Schema.Types.ObjectId, ref: 'coll_campaigns'},
    name_agents: {type:String, required: true},
    updatedat_agents: {type: Date, required: true},
    createdat_agents: {type: Date, required: true},
});
module.exports = mongoose.model('coll_agents', agent_schema);