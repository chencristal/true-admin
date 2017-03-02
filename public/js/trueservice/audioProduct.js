/* -------------Star Function Start------------- */
loadCallcenter();
loadCategories();
loadLogo();
mainFunction();


$("#title_panel").append("<span>Audios / Products and Services</span>");
$("ul#sunmenu-sidebar-1").css("display","block");
$("li#audios_products").css("font-weight","600");
$("title").append("TrueService | Products");
/* Function for popUp Agent Report */
$(document).on('click', '.item-agente-ok', function(e){
  $(".datos-agente").addClass('pop-up-agente');
});       

$(document).on('click', '.item-agente-bad', function(e){
  $(".datos-agente").addClass('pop-up-agente');
});

$("body").click( function(e){
    if(e.target.id == "cerrar_agentes")
    {
      $(".datos-agente").addClass('oculto');
      $(".datos-agente").removeClass('pop-up-agente');
    }
  }
);

$(document).on('click', '.match', function(e){
    $("#list").addClass('pop-up-list');
});

$("body").click( function(e){
    if(e.target.id == "cerrar_listado")
    {
      $("#list").addClass('oculto');
      $("#list").removeClass('pop-up-list');
    }
  }
);

$(document).ready(function(){
});

/* -------------- SECTION OF VARIABLES   -------------- */

// Definition the variables
var words;
var countw;
var countm;
var words_resp = new Array();
var count_resp = new Array();
var ids_category = new Array();
var loads=0;


/* -------------- SECTION OF FUNCTIONS  I -------------- */

/* Function to load the selected date */
function input_date(startDate,endDate){
  var startDate = new Date(startDate).toISOString().slice(0,10);
  var endDate = new Date(endDate).toISOString().slice(0,10);  

  var startDate = startDate.split('-')
  var endDate = endDate.split('-')
  var day_start = startDate[2].split('T')[0];
  var day_end = endDate[2].split('T')[0];

  $('#month_start').val(startDate[1]);
  $('#day_start').val(day_start);
  $('#year_start').val(startDate[0]);

  $('#month_end').val(endDate[1]);
  $('#day_end').val(day_end);
  $('#year_end').val(endDate[0]);
} //end input_date

/* Function that return date format */
function returnDate(){
  //Variables of front // start date
  var day_start = document.getElementById("day_start").value;
  var month_start = document.getElementById("month_start").value;
  var year_start = document.getElementById("year_start").value;
  //Variables of front // end date
  var day_end = document.getElementById("day_end").value;
  var month_end = document.getElementById("month_end").value;
  var year_end = document.getElementById("year_end").value;

  if (day_start == "" &&  day_end == ""){
    return undefined;
  }
  else{
    var date_start = new Date(year_start, month_start-1,day_start);
    var date_end = new Date(year_end, month_end-1, day_end);
    //create date Object
    var date = new Object();
    date.date_start = date_start;
    date.date_end = date_end;
    return date;
  }  
}//end returnDate

function loadSelectedCallcenter(callcenterId,campaignsId){
  if(loads===0){
    if(callcenterId !== undefined){
      var callcenterText=$('option[value="'+callcenterId+'"]').text();
      $(' span:contains("'+callcenterText+'")').click();
    } 
    if(campaignsId !== undefined){
      setTimeout(function(){
        for(var i=0;i<campaignsId.length;i++){
          campaignText=$('option[value="'+campaignsId[i]+'"]').text();
          $(' span:contains("'+campaignText+'")').click();
        }
      },100);
    }
    loads++;
  }
}


/* -------------- SECTION OF FUNCTIONS II -------------- */
/* Function that captures date, campaign and callcenter information of the button event */

function btn_action(){   
  //Variables of front
  $('.true-loader').css('display','block');

  var day_start = document.getElementById("day_start").value;
  var day_end = document.getElementById("day_end").value;
  var select_callcenter = document.getElementById("select_callcenter").value;
  var select_campaign = document.getElementById("select_campaign").value;
  //Validate empty fields
  if (day_start != "" &&  day_end != "" && select_callcenter!= "" && select_campaign != ""){
    mainFunction();
  }        
  else{
    alert("Please select a fields in the select options.");
  }
}//end btn_action

function mainFunction(){  
  var data = returnDate();

  var date_start = undefined;
  var date_end = undefined;

  if (data != undefined){
    date_start = data.date_start;
    date_end = data.date_end;
  }

  var ids_callcenter = $( "#select_callcenter " ).val() || [];
  var ids_campaign = $( "#select_campaign " ).val() || [];

  //validate complete fields:
  if (day_start == "" &  day_end == ""){
    alert("Please select dates for start and end.");
  }
  else if(date_start!= undefined &  date_end!=undefined & date_start > date_end ){
    alert("End date is less than the start date.");
  }
  else { // Search data 
    $.post('/dataProduct/', {start: date_start, end: date_end, callcenter:ids_callcenter, campaign: ids_campaign}).done(function(response){
      if (response != undefined){
        
        if(response.message == 101){
          alert("No data in the date range.");
        }
        if(response.message == 102){
          alert("No data in the date range.");
        }
        else{    

          var startDate = (response.startDate);
          var endDate = (response.endDate);

          if (startDate != undefined) {
            input_date(startDate, endDate);
          }      
          if(response.callcenter!== undefined && response.campaign!== undefined){
            loadSelectedCallcenter(response.callcenter, response.campaign);
          }else{
            loads++;
          }
          
          dbWords(); 
          words = response.words;
          countw = response.countw;
          countm = response.count_match;

          var count_data = response.total_data;

          var json_perc = JSON.stringify(response.percentages);
          var json_perc = JSON.parse(json_perc);

          console.log(json_perc);

          var json_themes = JSON.stringify(response.themes);
          var json_themes = JSON.parse(json_themes);

          topWord( words, countw, countm, count_data); 
          sentiments((response.pos).toFixed(2), (response.neg).toFixed(2), countm);
          themes(json_themes, json_perc, countm);
          counts(response.dates, response.count_dates, countm);

          document.getElementById("container_sentiment").style.display = "block";
          document.getElementById("container_network").style.display = "block";
          //document.getElementById("container_browser").style.display = "block";
          //document.getElementById("container_match").style.display = "block";
          document.getElementById("container_fields1").style.visibility = "visible";
          document.getElementById("container_bar").style.display = "block";
        } 
      }//end if 
      else{
        return('error');
      }//end else
    }).always(function(){
        $('.true-loader').css('display','none');
    });//end jquery    
  }  //end else 
}  //end mainFunction

//Función For search word in MongoDB
function searchWords(){
  date = returnDate();
  var date_start = date.date_start;
  var date_end = date.date_end;
  var ids_callcenter = $( "#select_callcenter " ).val() || [];
  var ids_campaign = $( "#select_campaign " ).val() || [];

  //word search
  var words = document.getElementById("input_browser").value;
  // get response search
  $.post('/searchProduct/', {start: date_start, end: date_end, words: words, callcenter:ids_callcenter, campaign: ids_campaign}).done(function(response){
    if (response != undefined){
      if(response.msj_error == true){
        alert("No data Search Agent");
      }
      else{
        if(response.number == 0){
          alert("No results");
        }
        $('#total_browser').text(response.number);          
      } 
    }//end if 
    else{
      return('error');
    }//end else
  });//end jquery
} //end searchWords


// Function return values of categories from databases mongo
function dbWords(){ 
  date = returnDate();
  var date_start = date.date_start;
  var date_end = date.date_end;
  var ids_callcenter = $( "#select_callcenter " ).val() || [];
  var ids_campaign = $( "#select_campaign " ).val() || [];

  $.post('/selectProduct/', {start: date_start, end: date_end, callcenter:ids_callcenter, campaign: ids_campaign, idscat: ids_category}).done(function(response){
  //$.post('/selectProduct/', {idscat: ids_category}).done(function(response){
    if (response != undefined){
      if(response.msj_error == true){
        alert("No data Select Product.");
      }
      else{
        var words = response.words;
        var counts = response.count;
        var ids = response.ids;
        var arr = ids;
        arr = arr.filter (function (value, index, array) { 
          return array.indexOf (value) == index;
        });        
        for (var x in arr){
          words_resp[arr[x].toString()] =  new Array();
          count_resp[arr[x].toString()] =  new Array();
        }
        for (var x in ids){
          if(ids[x] in words_resp){
            var array = words_resp[ids[x].toString()];
            array = array.push(words[x]);
          }
        }
        for (var x in ids){
          if(ids[x] in count_resp){
            var array_ = count_resp[ids[x].toString()];
            array_ = array_.push(counts[x]);
          }
        }
      }//end else
    }//end if 
    else{
      return('error');
    }//end else
  });//end jquery
} //end dbWords

// Fucntion 
function selectWords(sel){ 
  var value = sel.value;   
  if (value == 'general'){
    topWord( words, countw, countm);
  }
  else{       
    topWord( words_resp[value.toString()] , count_resp[value.toString()], countm);     
  } //end else
} //end selectWords


//Function load select CallCenters
function loadCallcenter(){
  $.post('/loadCallcenter', function(response) {
    if (response.names != undefined && response.values != undefined){
      var id = new Array();
      for (var x in response.names){
        id.push(response.values[x]);  
        $('#select_callcenter').append($('<option>', { 
          value: response.values[x],
          text : response.names[x]
        })); 
         $(".selectpicker").each(function(){$(this).selectpicker('refresh')});       
      } //end for
    }//end if               
  });//end jquery
} //end loadCallcenter

//Function load logo client
function loadLogo(){
  $.post('/loadLogo/', function(response) {  
    if(response.msj_error == true){
      alert("No data Search Agent.");
    }
    else{
      var dir_logo = response.dir_logo;
    }          
  });//end jquery
}  //end loadLogo

//Function load select Campaigns
function loadCampaign(id,callback){  
  $.post('/loadCampaign', {CallCenters: id}).done(function(response) {    
    if (response.names != undefined && response.id != undefined){
      $('#select_campaign').children("option").each(function(){
        $(this).remove();
      });
      for (var x in response.names){
        $('#select_campaign').append($('<option>', { 
          value: response.id[x],
          text : response.names[x]
        }));        
      } //end for
      $(".selectpicker").each(function(){$(this).selectpicker('refresh')});
    }//end if             
  });//end jquery
  callback ? callback() : false;
}  //end loadCampaign


//Function load select Campaigns
function loadCategories(){
  $('#categoriesW').append($('<option>', { 
    value: 'general',
    text : 'all'
  }));
  $.post('/loadCategories/', function(response) {
    if (response.names != undefined && response.ids != undefined){
      for (var x in response.names){
        ids_category.push(response.ids[x]);
        $('#categoriesW').append($('<option>', { 
          value: response.ids[x],
          text : response.names[x]
        }));        
      } //end for
    }//end if               
  });//end jquery
}  //end loadCategories

function alert(data){
  $("#alert_").css("display","block");
  $("#alert_").append("<p>"+data+"</p>");
  setTimeout(function() {
    $("#alert_").css("display","none");
    $("#alert_ > p").remove();
  }, 4000);
}

/*Event change select callcenter -- change campaigns show*/
document.getElementById("select_callcenter").onchange = function(){
  var result = [];
  var id = $(this).attr("id");
  $(".btn-group.bootstrap-select").each(function(){
    var nombre = $(this).children("button").attr("data-id");
    if(id == nombre){
      $(this).children("div").children("ul").children("li").each(function(){
        if($(this).hasClass("selected")){
          result.push($(this).attr("data-original-index"));
        }//end if
      });// end each li
      var ids_callcenter = [];
      for (var a = 0; a < result.length; a++){
        var index = parseInt(result[a]);      
        ids_callcenter.push($(this).children("select").children()[index]["value"]);
      }
      loadCampaign(ids_callcenter,function(){
      });
    }//end if
  });//end each .btn-group.bootstrap-select
} //end event

