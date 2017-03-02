  var Usuario;

  /*  MODELOS DE LA BASE DE DATOS  */
  //colección usuarios

  var company;
  var fs = require('fs');
  var fstream;

  exports.setModel = function(modelo){
    Usuario = modelo;
  };

  exports.setCompany = function(modelo){
    company=modelo;
  }

  exports.index = function(req, res){	
      res.render('user/index_user', {
      })
  };


  exports.signup = function(req, res){	
      var company_logo_v=req.session.company_logo;
      res.render('user/createUser', {
          response : '' ,company_logo:company_logo_v
        })
  };

  exports.signup_post = function(req, res){ 
    var company_logo_v=req.session.company_logo;

  	response_signup= {
  		company_name: req.body.company_name,
  		company_url: req.body.company_url,
      company_phone: req.body.company_phone,
      username: req.body.user_name,
      userFullName: req.body.user_full_name,
      language_company : req.body.language_company,
  		email: req.body.email,
      country_company : req.body.country_company,
  		pass: req.body.pass,
  		pass_conf: req.body.pass_conf,
      name_cloud_company : req.body.name_cloud_company,
    };

    if (response_signup.pass != response_signup.pass_conf){
      res.render('user/createUser', {
        response : 'True' 
      })
    }
    else{
      var tmp_path = req.file.path;
      var target_path = 'upload/'+ req.file.originalname;
      var src = fs.createReadStream(tmp_path);
      var dest = fs.createWriteStream('public/'+target_path);
      src.pipe(dest);
      src.on('end', function() { res.render('user/createUser',{response : 'True' ,company_logo:company_logo_v}); });
      src.on('error', function(err) { res.render('user/createUser',{response : 'False',company_logo:company_logo_v} );});
      var new_company = company({
        name_company:response_signup.company_name,
        create_date_company : Date.now() ,
        update_date_company : Date.now(),
        logo_company : target_path,
        language_company : response_signup.language_company,
        phone_company : response_signup.company_name,
        email_company : response_signup.email,
        country_company : response_signup.country_company,
        name_cloud_company : response_signup.name_cloud_company,
      });
      new_company.save(function(err){
        if(err){
          console.log('error!');
          console.error(err);
        }
      });
      
      var new_user = Usuario({
        id_companie : new_company._id,
        phone_user : response_signup.company_phone,
        password_user : response_signup.pass,
        id_companies:new_company.id,
        email_user :response_signup.email,
        username_user : response_signup.username,
        name_user: response_signup.userFullName,
        active_user : true,
        update_date_user: Date.now(),
        create_date_user: Date.now()
      });

      new_user.save(function(err){
        if(err){
          console.error(err);
        }
      })
    }
    
    res.render('user/createUser', {
      response : '' ,company_logo:company_logo_v
    })
  };