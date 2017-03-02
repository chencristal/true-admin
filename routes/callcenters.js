var router = require('express').Router();
var user = require('../models/user');
var callcenter = require('../models/callcenter');
var campaign = require('../models/campaign');

// exports.loadCallCenter = function (req, res) {
router.post('/loadCallCenter', function (req, res) {
    // var id_user = req.session.session_data.id_user;
    var id_user = '580e1ba9e278205f9ac499c1';
    user.findOne({'_id': id_user}, function (err, result) {
        if (err) {
            var data = new Object();
            data.msj_error = 'true';
            data.message = '101';
            res.send(data);
        } else {
            var id_company = result.id_companies;
            callcenter.find({id_companies: id_company}, function (err, result) {
                if (result != null) {
                    var data = new Object();
                    data.names = [];
                    data.values = [];
                    for (var x in result) {
                        data.names.push(result[x].get('name_callcenters'))
                        data.values.push(result[x].get('_id'))
                    }
                    res.send(data);
                }
                else {
                    res.send('No exist CallCenter');
                }
            });//end query callcenter
        } // end else
    }); // end query user
}); //end export

// exports.loadCampaign = function(req, res){
router.post('/loadCampaign', function(req, res){
    var ids= req.body.CallCenters;
    campaign.find({id_callcenters:{$in: ids}}, function(err, result){
        if (result != null){
            var data = new Object();
            data.names = [];
            data.id = [];
            for (var x in result){
                data.names.push(result[x].get('name_campaigns'));
                data.id.push(result[x].get('_id'));
            }
            res.send(data);
        }else{
            res.send('No exist Campaign')
        }
    });
});

module.exports = router;