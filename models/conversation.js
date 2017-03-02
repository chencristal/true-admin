var mongoose = require('mongoose');
var Cconversation_schema = ({
    to_conversations: {type: String},
    name_conversations: {type: String},
    stardate_conversations: {type: Date, required: true},
    star_conversations: {type: Date, required: true},
    id_agents: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_agents' },
    id_callcenters:  { type: mongoose.Schema.Types.ObjectId, ref: 'coll_callcenters' },
    id_campaigns: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_campaigns' },
    enddate_conversations: {type: Date, required: true},
    createdat_conversations: {type: Date, required: true},
    updatedat_conversations: {type: Date, required: true},
    callid_conversations : {type: String, required: true},
    start_conversations: {type: String, required: true},
    licence_conversations: {type: String, required: true},
    audios_conversations: {type: String, required: true},
    ipagents_conversations: {type:String, required: true},
    from_conversations: {type:String, required: true},
    // transcriptions : { type: mongoose.Schema.Types.ObjectId, ref: 'coll_transcriptions' },
});
module.exports = mongoose.model('coll_conversations', Cconversation_schema);