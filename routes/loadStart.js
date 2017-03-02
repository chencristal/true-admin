var sessionHelper = require("sessionHelper.js");
var Async = require('async');


var company;
var campaign;
var callcenter;
var user;
var category;

/*  -------------- MODELOS DE LA BASE DE DATOS -------------- */

exports.setUser = function(modelo){
	user = modelo;
};

exports.setCompany = function(modelo){
	company = modelo;
};
exports.setCampaign= function(modelo){
	campaign = modelo;
};

exports.setCallcenter = function(modelo){
	callcenter = modelo;
};

exports.setCategory = function(modelo){
	category = modelo;
};


/* -------------- SECCIÓN DE FUNCIONES  -------------- */

exports.loadLogo = function(req, res){	
	id_user = req.session.session_data.id_user;
	user.find({'_id':id_user})
	.populate({path:'id_companie',select:'logo_company', options: {lean:true}})
	.limit(1)
	.lean()
	.then(function(result){
		if(result == null){
			var data = new Object();
			data.msj_error = 'true';
			data.message = '102';
			res.send(data);
		}else{
			for(var x in result){
				var resp = result.id_companie;
				var dir_logo = resp.logo_company;
				data.msj_error = 'false';
				data.dir_logo = dir_logo;
				res.send(data);
			}
		}
	}).catch(function(err){
		var data = new Object();
		data.msj_error = 'true';
		data.message = '101';
		res.send(data);
	});
};

exports.loadCallCenter = function(req, res){
	id_user = req.session.session_data.id_user;

	user.find({'_id':id_user})
	.limit(1)
	.lean()
	.then(function(result){
		company.aggregate([
			{"$unwind" : "$callcenter_conversations"},
			{"$project":{"callcenter_conversations.name_callcenter":1,"callcenter_conversations._id":1,"_id":0}},

		],function(err,result){
			if(err){
				var data = new Object();
				data.msj_error = 'true';
				data.message = '101';
				res.send(data);
			}
			if(result!= null){

				
				var data = new Object();
				data.names = [];
				data.values = [];
				for (var x in result[0]) {
					data.values.push(result[0][x]['_id']);
					data.names.push(result[0][x]['name_callcenter']);
				}
				res.send(data);
			}
		});
	}).catch(function(err){
		var data = new Object();
		data.msj_error = 'true';
		data.message = '101';
		res.send(data);
	});
}; //end export

exports.loadCampaign = function(req, res){
	var ids= req.body.CallCenters;

	user.find({'_id':id_user})
	.limit(1)
	.lean()
	.then(function(result){

		company.aggregate([
			{"$unwind" : "$callcenter_conversations"},
			{"$unwind" : "$callcenter_conversations.campaign_callcenter_conversations"},
			{"$match":{"callcenter_conversations._id": {$in:ids}}},
			{"$project":{"callcenter_conversations.campaign_callcenter_conversations.name_campaign":1,
						"callcenter_conversations.campaign_callcenter_conversations._id":1,
						"_id":0},
			},
			],function(err,result){
				var data = new Object();
				data.names = [];
				data.id = [];
				if(result != undefined){
					for(var i =0;i<result.length;i++){
						console.log(result[i].callcenter_conversations);
						console.log(result[i].callcenter_conversations);
						for(var x in result[i].callcenter_conversations){
							data.id.push(result[i].callcenter_conversations[x]._id);
							data.names.push(result[i].callcenter_conversations[x].name_campaign);
						}
					}
				}else{
					var data = new Object();
					data.names=[];
					data.id=[];
					res.send(data);
				}

				res.send(data);			
			});
	})
	.catch(function(err){
		console.log(err);
	})
};

/*
Function to search the customer categories and return the name and id of the categories found.
*/
exports.loadCategories = function(req, res){
	res.send('hola');
	id_user = req.session.session_data.id_user;
	user.findOne({'_id':id_user}, function (err, result) {
  		if (err){
  			var data = new Object();
			data.msj_error = true;
			data.message = '101';
			res.send(data);
		}//end if user
		else{
  			var id_company = result.id_companies;
  			queryCategory =category.aggregate(				    [
		   		{"$match":{"id_companies" : id_company }}
		    ]);
	        queryCategory.exec(function(err, result) {
	        	if (err){
		  			var data = new Object();
					data.msj_error = true;
					data.message = '101';
					res.send(data);
				}//end if queryCategory
				else{
					id_category = [];
					name_category = [];
				    result.forEach(function(res) {
				    	id_category.push(res._id);
				    	name_category.push(res.name_categories);
				    });
				    var data = new Object();
					data.msj_error = false;
					data.ids = id_category;
					data.names = name_category;
					res.send(data);  
				} //end else queryCategory				
			}); //end queryCategory 
  		}//end else user
	});//end query user
};//end loadCategories