/*
 * GET home page.
 */
var nodeExcel = require('excel-export');
var excel = require('node-excel-export');
var sessionHelper = require("sessionHelper.js");

function  specification_match(styles) {
	var specification = {
	  agente_name: { 
	  	type: "string",
	    displayName: 'Agente', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  date: { 
	  	type: "string",
	    displayName: 'Date', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  call_id: { 
	    displayName: 'Call Id', 
	    headerStyle: styles.headerDark,
	    width: 220 
	  },

	  call_center: { 
	    displayName: 'Call center', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  campaign: { 
	    displayName: 'Campaign', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  match: { 
	    displayName: '% Match', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  conversation: { 
	    displayName: 'Conversation', 
	    headerStyle: styles.headerDark,
	    width: 360 
	  },
	}
	return specification;
}

function  specification_keyword(styles) {

	///fecha	Total registros	call center	campaña	palabra1	cantidad	palabra2	cantidad

	var specification = {

	  date: { 
	  	type: "string",
	    displayName: 'Date', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  total: { 
	    displayName: 'Total files', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  call_center: { 
	    displayName: 'Call center', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  campaign: { 
	    displayName: 'Campaign', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  word1: { 
	    displayName: 'Word 1', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  total1: { 
	    displayName: 'total 2', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  word2: { 
	    displayName: 'Word 2', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  total2: { 
	    displayName: 'total 1', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },
	}
	return specification;
}

function  specification_sentiments(styles) {

	var specification = {

	agente_name: { 
	  	type: "string",
	    displayName: 'Agent', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  date: { 
	  	type: "string",
	    displayName: 'Date', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  call_center: { 
	    displayName: 'Call center', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  campaign: { 
	    displayName: 'Campaign', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  conversation: { 
	    displayName: 'Conversation', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  positive: { 
	    displayName: '% Positive',
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  negative: { 
	    displayName: '% Negative',
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  happy: { 
	    displayName: '% Happy', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  grateful: { 
	    displayName: '% Grateful', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  angry: { 
	    displayName: '% Angry', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  sad: { 
	    displayName: '% sad', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },
	}

	return specification;
}

function  specification_bar(styles) {

	var specification = {

	  date: { 
	  	type: "string",
	    displayName: 'Date', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  total: { 
	    displayName: 'Total', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },
	}

	return specification;
}

function  specification_field(styles) {

	var specification = {

	  date: { 
	  	type: "string",
	    displayName: 'Date', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  field: { 
	    displayName: 'Field', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },

	  total: { 
	    displayName: 'Total', 
	    headerStyle: styles.headerDark,
	    width: 80 
	  },
	}

	return specification;
}

//agente	fecha	id_llamada	call center	campaña	palabra	cantidad	conversación 
function  specification_browser(styles) {

	var specification = {

		agente_name: { 
		  	type: "string",
		    displayName: 'Agente', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  date: { 
		  	type: "string",
		    displayName: 'Date', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  call_id: { 
		  	type: "string",
		    displayName: 'Call id', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  call_center: { 
		    displayName: 'Call center', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  campaign: { 
		    displayName: 'Campaign', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  word: { 
		    displayName: 'Word',
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  total: { 
		    displayName: 'total',
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

		  conversation: { 
		    displayName: 'Conversation', 
		    headerStyle: styles.headerDark,
		    width: 80 
		  },

	}

	return specification;
}

exports.summary = function(req, res){
  res.render('summary/summary', { title: '724 Media	',company_logo : req.session.company_logo });
};


exports.index = function(req, res){
  	res.render('index', { title: '724 Media	',company_logo : req.session.company_logo });
};

exports.panel = function(req, res){

	var sessionHelper_instance = new sessionHelper();

	if(sessionHelper_instance.verifySession(req) === false){
		res.redirect('/');
	}else{
	  	res.render('panel', { title: '724 Media	',company_logo : req.session.company_logo});
	}
	

};

var styles = {
	  headerDark: {
	    fill: {
	      fgColor: {
	        rgb: 'FF000000'
	      }
	    },
	    font: {
	      color: {
	        rgb: 'FFFFFFFF'
	      },
	      sz: 12,
	      bold: true
	    }
	  },
	  cellPink: {
	    fill: {
	      fgColor: {
	        rgb: 'FFFFCCFF'
	      }
	    }
	  },
	  cellGreen: {
	    fill: {
	      fgColor: {
	        rgb: 'FF00FF00'
	      }
	    }
	  }
	};

exports.excel_match = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	
	var dataset_match = [
		{agente_name: 'Agent 01 Brenda Simon ', date: '2016-08-31', call_id: "22-08-2016-0000234567-3476", call_center: 'inbound', campaign: 'campaign 1', match: "45%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 02 Audrey Owen ', date: '2016-08-31', call_id: "25-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'campaign 1' , match: "87%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 03 Michelle Peters ', date: '2016-08-31', call_id: "22-09-2016-0000234567-3477", call_center: 'inbound', campaign: 'campaign 1', match: "76%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 04 Helen Black ', date: '2016-08-31', call_id: "25-08-2016-0000234567-3477", call_center: 'inbound', campaign: 'campaign 1' , match: "65%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 05 Jessica Sweet ', date: '2016-08-31', call_id: "22-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'campaign 1', match: "55%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 06 Erik Spencer ', date: '2016-08-31', call_id: "25-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'campaign 1' , match: "40%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 07 Alex Deep', date: '2016-08-31', call_id: "22-08-2016-0000234567-3479", call_center: 'inbound', campaign: 'campaign 1', match: "67%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 08 William Carrington', date: '2016-08-31', call_id: "25-08-2016-0000234567-3479", call_center: 'inbound', campaign: 'campaign 1' , match: "76%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 09 Jacob Smith', date: '2016-08-31', call_id: "22-08-2016-0000234567-3480", call_center: 'inbound', campaign: 'campaign 1', match: "60%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."},
		{agente_name: 'Agent 10 Edward Jonson', date: '2016-08-31', call_id: "25-08-2016-0000234567-3480", call_center: 'inbound', campaign: 'campaign 1' , match: "80%", conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye."}
	];

	var specification = specification_match(styles);	
	var dataset = dataset_match;
	var name_file = 'Agent_Match.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'report-2016-08-31', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel_word = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	

	var dataset_keyword = [
		{date: '2016-08-31', total: "450", call_center: 'Inbound', campaign: 'Credit Card', word1: "excellent", total1: "16", word2: "Card", total2: "20"},
		{date: '2016-08-31', total: "200", call_center: 'Outbound', campaign: 'Credit Card', word1: "account", total1: "28", word2: "Problem", total2: "30"},
		{date: '2016-08-31', total: "260", call_center: 'Inbound', campaign: 'Saving Account', word1: "pay", total1: "45", word2: "Account", total2: "40"},
		{date: '2016-08-31', total: "200", call_center: 'Outbound', campaign: 'Credit Card', word1: "free", total1: "32", word2: "Saving", total2: "18"},
		{date: '2016-08-31', total: "210", call_center: 'Outbound', campaign: 'Saving Account', word1: "sale", total1: "15", word2: "Credit", total2: "15"},
		{date: '2016-08-31', total: "600", call_center: 'Outbound', campaign: 'Credit Card', word1: "Agencies", total1: "35", word2: "Fraud", total2: "20"},
		{date: '2016-08-31', total: "850", call_center: 'Inbound', campaign: 'Credit Card', word1: "User", total1: "25", word2: "Password", total2: "35"},
		{date: '2016-08-31', total: "420", call_center: 'Inbound', campaign: 'Saving Account', word1: "Electronic", total1: "23", word2: "Agent", total2: "25"},
		{date: '2016-08-31', total: "125", call_center: 'Outbound', campaign: 'Credit Card', word1: "angry", total1: "17", word2: "Agent", total2: "42"}
	]

	var specification = specification_keyword(styles);
	var dataset = dataset_keyword;	
	var name_file = 'report_stopwords.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel_sentiments = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	

	var dataset_sentiments = [
		{agente_name: 'Agent 01 Brenda Simon ', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "30%", negative: "70%", happy: "50%",grateful: "50%", angry: "70%", sad: "30%"},
		{agente_name: 'Agent 02 Audrey Owen', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "25%", negative: "75%", happy: "34%", grateful: "66%", angry: "40%", sad: "60%"},
		{agente_name: 'Agent 03 Michelle Peters', date: '2016-08-31', call_center: 'inbound', campaign: 'Saving Account', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "40%", negative: "60%", happy: "45%", grateful: "55%", angry: "50%", sad: "50%"},
		{agente_name: 'Agent 04 Helen Black', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "50%", negative: "50%", happy: "23%", grateful: "77%", angry: "50%", sad: "50%"},
		{agente_name: 'Agent 05 Jessica Sweet', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "60%", negative: "40%", happy: "76%", grateful: "24%", angry: "32%", sad: "68%"},
		{agente_name: 'Agent 06 Lorraine Wall', date: '2016-08-31', call_center: 'inbound', campaign: 'Saving Account', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "45%", negative: "55%", happy: "80%", grateful: "20%", angry: "45%", sad: "55%"},
		{agente_name: 'Agent 07 Alison Hoffman', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "60%", negative: "40%", happy: "85%", grateful: "15%", angry: "50%", sad: "50%"},
		{agente_name: 'Agent 08 Abigail Stevenson', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "35%", negative: "65%", happy: "50%", grateful: "50%", angry: "50%", sad: "50%"},
		{agente_name: 'Agent 09 Rachel Evans', date: '2016-08-31', call_center: 'inbound', campaign: 'Saving Account', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "70%", negative: "30%", happy: "80%", grateful: "20%", angry: "45%", sad: "55%"},
		{agente_name: 'Agent 10 Amanda Jones', date: '2016-08-31', call_center: 'inbound', campaign: 'Credit Card', conversation: "Agent01: Hello, this is Peter speaking. How may I be of help to you today? \n  Client: We spoke yesterday about a Mobile Banking problem. \n Agent01: I will ask you a few questions.. \n Client: Great, I'd love to see this problem resolved as quickly as possible. \n Agent01: What´s the model of your phone? \n  Client: Iphone 6 \n Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: I have no idea, because when I try to log in, the App shows that user is not correct. \n Agent01: Great, I am refreshing your user and password at this moment. \n Client01: Thank you for your help... Goodbye. \n Agent01: Goodbye.", positive: "10%", negative: "90%", happy: "33%", grateful: "67%", angry: "25%", sad: "75%"}
		]
		

	var specification = specification_sentiments(styles);
	var dataset = dataset_sentiments;	
	var name_file = 'report_sentiments.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel_field = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	
	
	var dataset_field = [
		{date: '2016-08-31', field: "Credit Card", total: "5.154"},
		{date: '2016-08-31', field: "Loyalty", total: "689"},
		{date: '2016-08-31', field: "Saving Account", total: "682"},
		{date: '2016-08-31', field: "Mobile Banking", total: "982"},
		{date: '2016-08-31', field: "Insurance", total: "578"},
		{date: '2016-08-31', field: "Non Banking Corresponsal", total: "1.023"},
		{date: '2016-08-31', field: "Banking Agencies", total: "2.659"},
		{date: '2016-08-31', field: "ATM", total: "682"}
	]

	var specification = specification_field(styles);
	var dataset = dataset_field;	
	var name_file = 'report_total.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel_total = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	
	var dataset_bar = [
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"},
		{date: '2016-08-31', total: "5.682"}		
	]

	var specification = specification_bar(styles);
	var dataset = dataset_bar;	
	var name_file = 'report_total.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel_browser = function(req, res){	
	/*REEMPLAZAR POR VALORES REALES*/	

	var dataset_browser = [
		{agente_name: 'Agent 01 Brenda Simon ', date: '2016-08-31', call_id: "22-08-2016-0000234567-3476", call_center: 'inbound', campaign: 'Credit Card', word: "Mobile Banking", total: "1" ,conversation: "Client: We spoke yesterday about a Mobile Banking problem" },
		{agente_name: 'Agent 02 Audrey Owen', date: '2016-08-31', call_id: "25-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'Saving Account', word: "Mobile Banking", total: "2" ,conversation: "Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: My Mobile Banking App is Blocked" },
		{agente_name: 'Agent 03 Michelle Peters ', date: '2016-08-31', call_id: "22-09-2016-0000234567-3477", call_center: 'inbound', campaign: 'Saving Account', word: "Mobile Banking", total: "1" ,conversation: "Client: When I Try to log in to the App, it shows that my user and password are wrong. Please help me because I need my Mobile Banking App" },
		{agente_name: 'Agent 04 Helen Black', date: '2016-08-31', call_id: "25-08-2016-0000234567-3477", call_center: 'inbound', campaign: 'Mobile Banking', word: "Mobile Banking", total: "1" ,conversation: "Client: We spoke yesterday about a Mobile Banking problem" },
		{agente_name: 'Agent 05 Jessica Sweet', date: '2016-08-31', call_id: "22-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'Saving Account', word: "Mobile Banking", total: "2" ,conversation: "Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: My Mobile Banking App is Blocked" },
		{agente_name: 'Agent 06 Lorraine Wall', date: '2016-08-31', call_id: "25-08-2016-0000234567-3478", call_center: 'inbound', campaign: 'Mobile Banking', word: "Mobile Banking", total: "1" ,conversation: "Client: When I Try to log in to the App, it shows that my user and password are wrong. Please help me because I need my Mobile Banking App" },
		{agente_name: 'Agent 07 Alison Hoffman', date: '2016-08-31', call_id: "22-08-2016-0000234567-3479", call_center: 'inbound', campaign: 'Saving Account', word: "Mobile Banking", total: "1" ,conversation: "Client: We spoke yesterday about a Mobile Banking problem" },
		{agente_name: 'Agent 08 Abigail Stevenson', date: '2016-08-31', call_id: "25-08-2016-0000234567-3479", call_center: 'inbound', campaign: 'Saving Account', word: "Mobile Banking", total: "2" ,conversation: "Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: My Mobile Banking App is Blocked" },
		{agente_name: 'Agent 09 Rachel Evans', date: '2016-08-31', call_id: "22-08-2016-0000234567-3480", call_center: 'inbound', campaign: 'Mobile Banking', word: "Mobile Banking", total: "1" ,conversation: "Client: When I Try to log in to the App, it shows that my user and password are wrong. Please help me because I need my Mobile Banking App" },
		{agente_name: 'Agent 10 Amanda Jones', date: '2016-08-31', call_id: "25-08-2016-0000234567-3480", call_center: 'inbound', campaign: 'Mobile Banking', word: "Mobile Banking", total: "2" ,conversation: "Agent01: Great, what's the problem that you have with the Mobile Banking App? \n Client: My Mobile Banking App is Blocked" }	
	]

	var specification = specification_browser(styles);
	var dataset = dataset_browser;	
	var name_file = 'report_browser.xlsx';

	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
}

exports.excel = function(req, res){
	//var response = req.body.excel_var;
	var response = "excel_match"; 	 
	//Here you specify the export structure 

	if (response == 'excel_match') {
		var specification = specification_match(styles);	
		var dataset = dataset_match;
		var name_file = 'Agent_Match.xlsx';
	}	
	if (response == 'excel_keyword') {
		var specification = specification_keyword(styles);
		var dataset = dataset_keyword;	
		var name_file = 'Specific_Word.xlsx';
	}	
	if (response == 'excel_sentiments') {
		var specification = specification_sentiments(styles);
		var dataset = dataset_sentiments;	
		var name_file = 'Sentiments_Report.xlsx';
	}
	if (response == 'excel_bar') {
		var specification = specification_bar(styles);
		var dataset = dataset_bar;	
		var name_file = 'report_total.xlsx';
	}

	if (response == 'excel_browser') {
		var specification = specification_browser(styles);
		var dataset = dataset_browser;	
		var name_file = 'Keywords.xlsx';
	}

	if (response == 'excel_field') {
		var specification = specification_field(styles);
		var dataset = dataset_field;	
		var name_file = 'report_total.xlsx';
	}
	// Create the excel report. 	
	// This function will return Buffer 
	var report = excel.buildExport(
	  [ 
	    {
	      name: 'Sheet 1', 
	      specification: specification, 
	      data: dataset 
	    }
	  ]
	);
	
	// You can then return this straight 
	res.attachment(name_file); // This is sails.js specific (in general you need to set headers) 
	return res.send(report);
};

exports.index_1 = function(req, res){
  res.render('index_1', { title: '724 Media	' });
};

exports.agentes = function(req, res){
  res.render('agents', { title: '724 Media	' });
};

