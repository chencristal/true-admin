// function paint agent name

var audios;

function listAgent(names, id_list, match, date_start, date_end) {  
  console.log(names);
  var ul = document.getElementById(id_list);
  ul.innerHTML = "";
  for (var x in names) {
    var li = document.createElement("list");  
    li.setAttribute("id", "list")
    li.setAttribute("class", "item-agente-bad list-group-item list-group-item-action")
    li.setAttribute("data-ip", names[x])
    li.appendChild(document.createTextNode(names[x]));
    ul.appendChild(li)
  }

  $(".listadoagentes > #list").click(function(){
    var dataip = $(this).attr("data-ip");
    console.log('dataip', dataip);
    $.post('/matchAgent/', {name_agent: dataip, match_agent: match, start: date_start, end: date_end}).done(function(response){
      if (response != undefined){  
        console.log(response)      
        if(response.message == 101){
          alert("101");
        }
        if(response.message == 102){
          alert("102");
        }
        else{         
          info = response.info;      
          if (info == undefined){
            alert("102");
          }
          var match =[];
          var date = [];
          var text_ob = [];
          var call_id = [] ;
          var canal = [];
          var objectInfo = '';
          for (var x in info){        
            objectInfo =  info[x];
            match.push(objectInfo.match);
            date.push(objectInfo.date);
            text_ob.push(objectInfo.text_res.text);
            call_id.push(objectInfo.call_id);
            canal.push(objectInfo.text_res.canal);
          }
          audios = response.trans;
          listDetail(dataip,call_id,date,match,text_ob,canal);
        } 
      }//end if 
      else{
        return('error');
      }//end else
    });//end jquery

  });     
}

function matchPopUp(names_agent, match, date_start, date_end){
  //var ids audioagente.html
  var id_pos = 'listadoagentes';
  var listado_llamadas = 'listado_llamadas'; 
  listAgent(names_agent,id_pos, match, date_start, date_end);
}

function getList(){
  $("#list").addClass('pop-up-list');
}


function listDetail(name_agent, call_id,date,match,text, canal){
  $('#name_agent').text(name_agent);
  $('#listado-afa').empty();
  $('#container_audio_text').empty();
  for (var x in call_id) {
    if (x==0) {
      var li='<tr><td class="borde-radius-style-top" onclick="audiosAgen('+x+');">'+call_id[x]+'</td>'
            +'<td onclick="audiosAgen('+x+');">'+date[x]+'</td>'
            +'<td onclick="audiosAgen('+x+');">'+match[x]+' % '+'</td></tr>';
    }
    else {
      var li='<tr><td onclick="audiosAgen('+x+');">'+call_id[x]+'</td>'
                  +'<td onclick="audiosAgen('+x+');">'+date[x]+'</td>'
                  +'<td onclick="audiosAgen('+x+');">'+match[x]+' % '+'</td></tr>';
    }
    //var li = '<li class="id-agente"><input type="checkbox" value=name>'+ call_id[x] +'</li>';
    $('#container_audio_text').append('<div id="verX'+x+'" class="noVerText" style="display:none;"><h1 id ="text_call">  ' + canal[x] + ' </h1>' + '<h1 id ="text_call">  ' + text[x] + ' </h1></div> ');
    $('#listado-afa').append(li);
    
  }
}

function audiosAgen(x){
  $('.noVerText').hide('shol');
  $('#verX'+x).show('shol');
  $('#container_audio').show('shol');
  var dir = '/var/www/html/secure/trueandicall/'+audios[x];
  var tag = '<audio id="audio" src="' + dir +'" controls class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></audio>' ;
  $('#container_audio_play').html(tag);
}
function closeAudios(){
 $('#container_audio').hide('shol'); 
}
/*
*/
/*Call*/

