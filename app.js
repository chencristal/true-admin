/**
* Archivo principal
*/

var bootstrap = require("express-bootstrap-service");
var Highcharts = require('highcharts');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var users = require('./routes/user');
var http = require('http');
var path = require('path');
var pg = require('pg');
var Sequelize = require('sequelize');
var mongoose = require('mongoose');
mongoose.set("debug", false);
var sesiones = require('./routes/sesiones');
var load_start = require('./routes/loadStart');
var cookieParser = require('cookie-parser');

var crypto = require('crypto');
var Async = require('async');
var bcrypt = require('bcrypt');
//var busboy = require('busboy');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest:'public/upload/'});

var app = express();
app.use(cookieParser());
app.use(express.session({secret: 'qwertQWERTY'}));

// all environments
app.set('port', process.env.PORT || 3100);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'jade');
app.use(bootstrap.serve);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({secret: 'abcd1234'}));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(busboy());


if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//variables globales
var SALT_WORK_FACTOR = 10;


//Conexión a la base de datos Mongo

mongoose.connect('mongodb://localhost/trueservice_testdb', function(error){
  if(error) {
    throw error;
  }else{
    console.log('Conectado a MongoDB');
  }
});

//esquema de conversación de llamada

//esquema de compañia (cliente)
var company_schema = mongoose.Schema({
  name_company: { type: String, required: true },
  name_cloud_company: { type: String, required: true },
  logo_company: { type: String, required: true },
  phone_company:{ type:String, required: true },
  language_company:{ type: String, required: true },
  email_company: { type:String, required: true },
  country_company: { type: String, required: true },
  callcenter_conversations: [{
    name_callcenter: { type: String, required: true },  
    campaign_callcenter_conversations :[{
      language_campaign : { type: String, required: true },
      name_campaign: { type: String, required: true },
      description_campaign: { type: String, required: true },
      script_campaign_callcenter_conversations: [{
        text_script: { type: String, required: true },
        words_script: { type: String, required: true },
        words_stem_scripts: { type: String, required: true },
        create_date_script: { type: Date, required: true },
        update_date_script: { type: Date, required: true },
      }],
      create_date_campaign: { type: Date, required: true },
      update_date_campaign: { type: Date, required: true },
    }],
    create_date_callcenter: { type: Date, required: true },
    update_date_callcenter: { type: Date, required: true },
  }],
  create_date_company: { type: Date, required: true },
  update_date_company: { type: Date, required: true },
});

//esquema de redes sociales


//esquema de usuarios
var user_schema = mongoose.Schema({
  id_companie: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_companies', required : true },
  name_user: { type: String, required: true },
  username_user: { type: String, required: true },
  photo_user: { type: String, required: false },
  phone_user:{ type:String, required: true },
  password_user:{ type: String, required: true },
  email_user: { type:String, required: true },
  active_user: {type: Boolean, required: true },
  field_user: { type:String, required: false },
  rol_users: [{
    name_rol: { type: String, required: true },
    permission_roles: [{
      name_permission_rol: { type: String, required: true },
      description_permission_rol: { type: String, required: true },
    }],
    create_date_rol: { type: Date, required: true },
    update_date_rol: { type: Date, required: true },
  }],
  create_date_user: { type: Date, required: true },
  update_date_user: { type: Date, required: true },
});

//esquema de tokens para recuperar contraseña
var token_schema = mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_users' },
  token_token: { type:String, required: true },
  valid_token: {type: Boolean, required: true },
  create_date_token: { type: Date, required: true },
  update_date_token: { type: Date, required: true },
});

//esquema de logs
var log_schema = mongoose.Schema({  
  from_log: { type:String, required: true },
  to_log: { type:String, required: true },
  description_log: { type:String, required: true },
  type_logs: [{
    name_type_log: { type: String, required: true },
    description_type_log: { type: String, required: true },
  }],
  create_date_log: { type: Date, required: true },
  update_date_log: { type: Date, required: true },
});

//esquema de categorias del top de palabras
var category_schema = mongoose.Schema({
  id_companie: { type: mongoose.Schema.Types.ObjectId, ref: 'coll_companies' },
  name_category: { type: String, required: true },
  create_date_category: { type: Date, required: true },
  update_date_category: { type: Date, required: true },
});
//esquema para guardar contraseña de usuario
user_schema.pre('save', function(next){
    var user = this;
      
    if (!user.isModified('password_user')){
      return next();  
    } 
 
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
 
        bcrypt.hash(user.password_user, salt, function(err, hash){
            if(err) return next(err);
 
            user.password_user = hash;
            next();
        });
    });
});

//esquema y metodo para comparar contraseña de usuario
user_schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password_user, function(err, isMatch) {   
        if (err) {
          return cb(err);
        }
        cb(null, isMatch);
    });
};


//definición de modelos


var company_model = mongoose.model('coll_companies', company_schema);
var user_model = mongoose.model('coll_users', user_schema);
var token_model = mongoose.model('coll_tokens', token_schema);
var log_model = mongoose.model('coll_logs', log_schema);
var category_model = mongoose.model('coll_categories', category_schema);



sesiones.setModel(user_model);
sesiones.setCompany(company_model);
sesiones.setToken(token_model);

load_start.setCompany(company_model);
load_start.setUser(user_model);
load_start.setCategory(category_model);

users.setCompany(company_model);
users.setModel(user_model);

//routes
app.get('/',sesiones.loginClient);
app.post('/',sesiones.authClient);

app.get('/login',sesiones.loginClient);
app.post('/login',sesiones.authClient);

app.get('/logout', sesiones.logout)
app.post('/logout', sesiones.logout)

app.post('/loadLogo',load_start.loadLogo);
app.post('/loadCategories',load_start.loadCategories);
app.post('/loadCallcenter',load_start.loadCallCenter);
app.post('/loadCampaign',load_start.loadCampaign);



app.get('/newLogin', sesiones.newLogin);
app.post('/newLogin', sesiones.changePassword);

app.get('/forgetPassword', sesiones.forgetPassword);
app.post('/forgetPassword', sesiones.sendPassword);

app.get('/restartPassword', sesiones.restartPassword);
app.post('/restartPassword', sesiones.restartPasswordPost);

app.get('/PivB8JDIvk2piO3nTrue724service', user.signup);
app.post('/PivB8JDIvk2piO3nTrue724service',upload.single('logo_file'), user.signup_post);


app.get('/panel',routes.panel);
app.post('/panel',routes.panel);





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
// Schemas

