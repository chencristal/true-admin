var sessionHelper = require("sessionHelper.js");
var bcrypt = require('bcrypt');
var crypto = require('crypto')
var nodemailer = require('nodemailer');

var SALT_WORK_FACTOR = 10;

var User;
var Company;
var Token;
/* ------------ MODELS DB ------------ */

//table users
exports.setModel = function(modelo){
   User = modelo;
};
//tabla compañias
exports.setCompany = function(model){
   Company=model
};

exports.setToken= function(model){
   Token=model;
}

/* ------------FUNCTIONS------------ */
function encrypt(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}


/* ------------EXPORTS------------ */

// index login
exports.loginClient = function(req, res){
   
   var sessionHelper_instance = new sessionHelper();

   if(sessionHelper_instance.verifySession(req) === false){
      res.render('login', {
         response: ''
      })
   }else{

      res.redirect('/panel');
   }

};

// auth login
exports.authClient = function(req, res){ 
   var username = req.body.email;
   var password = req.body.pass;
   //var passEncrypt = /*encrypt(username,password)*/ password;
   //Query in postgres: Validate state and username   
   //state 0 is not register
   User.findOne({ 'username_user': username}).populate({path:'id_companie',select:'logo_company'}).limit(1).then(function (result) {
      if (result == null){
         res.render('login', {
            response: 'Incorrect username'
         })
      }
      else{
         result.comparePassword(password, function(err, isMatch){
            if (err){ 
               throw err;
            }else if(isMatch){
            active_user = result.active_user;
               if(active_user == true){
                  session_data = {
                     user_name: username,
                     id_user: result.id,
                     date_start: 'None',
                     date_end: 'None',
                     campaign: 'None',
                     callcenter: 'None',
                     canal: 'None',
                  }

                  req.session.session_data = session_data;

//                  Company.findOne({'_id':result.id_companies},{"coll_datacompanies.logo_companies":1,"_id":0}).then(function(response){
                     console.log(result.id_companie._id);
                     if(result.id_companies== null){
                        res.render('login',{response:'Error Login'})
                     }else{
                        req.session.company_logo = result.id_companie.logo_company;  
                        req.session.save();
                        console.log(req.session);
                     }
//                  });
                  res.redirect('/panel');
               }
               else{
                  res.render('login', {
                     response: 'Error Login'
                  })
               }
            }else{
               res.render('login', {
                  response: 'Incorrect Password'
               })
            }
         });
         
      }      
   });
};

exports.changePassword = function(req, res){
   var username = req.body.user;
   var old_Password = req.body.oldPass;
   var new_password = req.body.newPass;
   var con_password = req.body.conPass;
   var sessionHelper_instance = new sessionHelper();

   User.findOne({ 'username_user': username}).then(function (result){
      if (result == null){
         res.render('user/NewSigning', {
            response: 'Incorrect username'
         }) //end render
      }//end if 
      else{
         result.comparePassword(old_Password, function(err, isMatch){
            if (isMatch == false){
               res.render('user/NewSigning', {
                  response: 'Incorrect password'
               }) //end render
            }//end if isMatch
            else{
               if(new_password != con_password){
                  res.render('user/NewSigning', {
                     response: 'Confirmation password incorrect'
                  }) //end render
               }
               else{
                  result.password_user = new_password;
                  result.active_user = true;
                  result.update_date_user = Date.now();
                  result.save(function(err, data){
                     if(err) 
                        res.render('user/NewSigning', {
                           response: 'Incorrect process'
                        })
                     else 
                        res.render('login', {
                           response: 'success'
                        })
                  });//end result
                  sessionHelper_instance.deleteSession(req);
                  res.render('login', {
                     response: ''
                  }) //end res
               }//end else               
            }//end else isMatch            
         }); //end comparePassword  
      } //end else       
   });      //end find user
}; // end export 

exports.logout = function(req, res){
   var sessionHelper_instance = new sessionHelper();
   
   sessionHelper_instance.deleteSession(req);
   res.send(true);  
}

exports.newLogin = function(req, res){
   res.render('user/NewSigning', {
      response: ''
   })
}

exports.forgetPassword = function(req, res){
   res.render('user/forgetPassword', {
      response: ''
   });
}

exports.sendPassword = function(req, res){

   var username = req.body.username;

   //query 
   User.findOne({ 'username_user': username}).then(function (result){
      //si no existe el usuario
      if (result == null){
         res.send('no_valid');
      }//end if 
      else{
         var email = result.email_user;
         var token = saveToken(result._id);
         sendEmail(email,token);
      } //end else       
   });//end find user
}

exports.restartPassword = function(req, res){
   res.render('user/restartPassword', {
      response: ''
   });
}

exports.restartPasswordPost = function(req, res){
   var user_id;
   var serverToken;
   var token = req.body.token;
   var new_pass = req.body.new_pass;
   var con_pass = req.body.con_pass;

   Token.findOne({"token":token}).then(function(respon){
      if(respon !== null || respon !== undefined || isNaN(respon)){
         user_id=respon.user_id;
         if(user_id!= null){
            Token.findOne({"user_id":user_id,"valid_token":true}).then(function(response){

               serverToken=response.token;

               if (token == serverToken && new_pass==con_pass){
                  User.findOne({"_id":user_id}).then(function(result){
                     result.password_users=new_pass;
                     result.updatedat_users = Date.now();
                     result.save(function(err){
                        if(err){
                           console.log("err_change");
                           res.send("err_change");
                        }else{
                           response.valid_token=false;
                           response.save(function(err){
                              if(!err){
                                 console.log("password_changed");
                                 res.send('done');
                              }else{
                                 console.log("err  saving  password");
                                 res.send('err_change')
                              }
                           });
                           console.log("password_changed");
                           res.send('done');
                        }
                     })
                  });
                  res.send('change');
               }else{
                  res.send('no_token');
               }
               if(token==null){
                  res.send('no_token');
               }
               if(new_pass!=con_pass){
                  res.send('no_pass');
               }
               if(new_pass== null || con_pass == null){
                  res.send('no_pass');
               }
            });
         }
      }else{
         res.send("no_token");
      }
   });


}


sendEmail = function(email,token){
   var transporter= nodemailer.createTransport({
      service : 'gmail',
      auth : {
         user : 'caguirre@724.media',
         pass : 'Carlos26'
      }
   });
   html='<head><style>h1{font-family: "Open Sans", sans-serif; font-weight: 300; margin: 0; font-size: initial;}h3{font-family: "Open Sans", sans-serif; font-weight: 300; margin: 0; color: #444;}p{font-family: "Open Sans", sans-serif; font-size: 80%; margin: auto;}a{font-family: "Open Sans", sans-serif; font-size: 80%; margin: auto;}#h3title{color:#1D7DE4; text-align:center; margin:30px 0; font-size: x-large;}</style></head><body><div id=main_div class="col-md-12"><center><div id="div_log" class="center-block" style="padding: 30px;"><img src="http://54.213.188.43/img/logo_service.png" class=""> <h3 id="h3title">TrueService password reset</h3><p>To change your password click the link below: </p><a href="url">http://54.213.188.43/restartPassword</a><p>Insert the following token : <b>'+token+'</b></p><p> Do not answer this email. Thanks. </p><br><p><b> CONTACT US </b> </p><p> info@truexperience.co </p></div></center></div></body>"" // html body'
   var mailOptions={
    from: '"TrueService password forgot" <caguirre@724.media>', // sender address
    to: email, // list of receivers
    subject: 'Password Recovery', // Subject line
    //text: 'tocken is 0000', // plain text body
    html: html,
   }

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
   });
};

saveToken = function(user_id){
   var token = crypto.randomBytes(16).toString('hex');
   Token.find({"id_user":user_id,"valid_token":true}).then(function(res){
      for (item in res){
         res[item].valid_token=false;//invalid all the old tokens
         res[item].save();
         console.log(res[item]);
      }
   });
   var newToken=new Token({
      id_user:user_id,
      token_token:token,
      valid_token:true,
      updatedat_token:Date.now(),
      createdat_token:Date.now(),
   });
   newToken.save(function(err){
      if(err){
         console.log(err);
      }else{
         console.log("token saved!");
      }
   });
   return token;
};

validateToken = function(){
};


