$(function(){
    function loadCallcenter(){
        $.post('loadCallCenter', function(response) {//request lista callcenters
            if (response.names != undefined && response.values != undefined){
                var id = new Array();
                for (var x in response.names){
                    id.push(response.values[x]);
                    $('#select_callcenter').append($('<option>', { //llena lista de callcenter
                        value: response.values[x],
                        text : response.names[x]
                    }));
                    $(".selectpicker").each(function(){$(this).selectpicker('refresh')});
                } //end for
            }//end if
        });//end jquery
    } //end loadCallcenter

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
                for (var a = 0; a < result.length; a++){ //busca 'values' de  callcenters  seleccionados
                    var index = parseInt(result[a]);
                    ids_callcenter.push($(this).children("select").children()[index]["value"]);
                }
                loadCampaign(ids_callcenter,function(campaignId) { //carga id's de campañas relacionada llamando a la funcion loadCampaign
                    if(campaignId !== 'None' && campaignId == undefined){
                        setTimeout(function(){
                            for(var i=0;i<campaignId.length;i++){
                                campaignText=$('option[value="'+campaignId[i]+'"]').text();
                                $('span:contains("'+campaignText+'")').click();
                            }
                        },1000);
                    }
                });
            }//end if
        });//end each .btn-group.bootstrap-select
    } //end event

    function loadCampaign(id,callback){
        $.post('/loadCampaign', {CallCenters: id}).done(function(response) {   //request para datos de camapañas asociadas a  callcenter id
            var campaignIds = response.id;
            if (response.names != undefined && response.id != undefined){
                $('#select_campaign').children("option").each(function(){//limpia selector de campañas
                    $(this).remove();
                });
                for (var x in response.names){ //llena selector de campañas
                    $('#select_campaign').append($('<option>', {
                        value: response.id[x],
                        text : response.names[x]
                    }));
                } //end for
                $(".selectpicker").each(function(){$(this).selectpicker('refresh')});
            }//end if
            callback ? callback(campaignIds) : false;
        });//end jquery

    }  //end loadCampaign
        loadCallcenter();
});