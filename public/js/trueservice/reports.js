/**
 * Created by carlosrenato on 01-19-17.
 */
//$('#reports-container').hide();
//mainFunction();

var llamadasPorDia;
var duracionPorLlamadas;
var llamadasHorarios;
var llamadasUsuarios;
var llamadasPorcentajesCont;

initcharts();

function btn_action(){   
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
    $('.true-loader').css('display','none');
  }
}

    function mainFunction() {
         
         var ini = $('#aux-date-start').val();
         var fin = $('#aux-date-end').val();
         var callcenters = ($("#select_callcenter").val() != null) ? $("#select_callcenter").val() : '' ;
         var campaigns = ($("#select_campaign").val() != null) ? $("#select_campaign").val() : '' ;
         if (ini == "" || fin == "" || callcenters == "" || campaigns == "") {
             alert('Please select a fields in the select options.');
         } else {
             $.ajax({
                 method: 'post',
                 url: '/reports',
                 data: {
                     ini: ini,
                     fin: fin,
                     cc: callcenters,
                     cp: campaigns
                 },
                 success: function(resp) {
                     if (!resp.success)
                        alert(resp.msg);
                     else {
                        $('#reports-container').show();
                        $('#reports-container').css('display', 'block');
                         //-- Charts for total of callings
                         $('#llamadas-dia-chart').children().remove();
                         var total_llamadas = {
                            title : {
                                text: 'Llamadas por Fecha',
                                subtext: ''
                            },
                            // grid: {
                            //     width: '300%'
                            // },
                            tooltip : {
                                trigger: 'axis'
                            },
                            toolbox: {
                                show : true,
                                feature : {
                                    // mark : {show: true},
                                    // dataView : {show: false, readOnly: false},
                                    // magicType : {show: true, type: ['line', 'bar']},
                                    // restore : {show: false},
                                    saveAsImage : {show: false},
                                }
                            },
                            animation : true,
                            calculable : true,
                            xAxis : [
                                {
                                    type : 'category',
                                    data : ['Dias']
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            series : [
                                {
                                    name:'llamadas',
                                    type:'bar',
                                    data:[0]
                                }
                            ]
                        };
                        llamadasPorDia = echarts.init(document.getElementById('llamadas-dia-chart'));
                        llamadasPorDia.setOption(total_llamadas);
                         var count = 0;
                         var ndata = Object.values(resp.data.total);
                         var keysCount = Object.keys(ndata[0]);
                         ndata = {};
                         for (var kc in keysCount) {
                            var name = $("#select_campaign").find('option[value=' + keysCount[kc] + ']').text();
                            ndata[keysCount[kc]] = {
                                 name: name,
                                 type:'bar',
                                 data:[]
                             };
                         }
                         $.each(Object.values(resp.data.total), function(i, el) {
                              $.each(el, function(idx, valu) {
                                ndata[idx].data.push(valu);
                              });
                             if (el != 0) count+=el;
                         });
                         console.log(ndata);
                         llamadasPorDia.setOption({
                             // grid: {width: '250%'},
                             tooltip : {
                                 trigger: 'axis',
                                 formatter: function (params) {
                                     var str = params[0].name + '<br/>';
                                     for (var kc in keysCount) {
                                         var val = params[kc].value;
                                         var percent = (val / count * 100).toFixed(2);
                                         str += (params[kc].seriesName +
                                                ' : ' + val + ' (' + percent +'%)<br/>');
                                     }
                                     return str;
                                 }
                             },
                             xAxis : [
                                 {
                                     type : 'category',
                                     data : Object.keys(resp.data.total),
                                     position : 'left'
                                 }
                             ],
                             yAxis : [
                                 {
                                     type : 'value'
                                 }
                             ],
                             series : Object.values(ndata)
                         });
                         ndata={};
                         //-- Charts for duration of callings
                         var calldurArr=[];
                         $.each(Object.keys(resp.data.duration),function(i,key){
                             if(key!=='0'){
                            calldurArr.push(key);
                             }
                         });
                         var calldurobj={};
                         var calldurarr2=[];
                         $.each(calldurArr,function(i,key){
                            calldurarr2[i]={name:key,value:resp.data.duration[key]};
                            calldurobj[key]=resp.data.duration[key];
                         })

                         duracionPorLlamadas.setOption({
                             series : [{
                                 name:'llamadas',
                                 type:'pie',
                                 radius: ['50%','70%'],
                                 itemStyle:{
                                     normal:{
                                         label:{
                                             show:false
                                         },
                                         labelLine:{
                                             show:false
                                         }
                                     },
                                    emphasis : {
                                        label : {
                                            show : true,
                                            position : 'center',
                                            formatter: "minutos \n {b}",
                                            textStyle : {
                                                fontSize : '30',
                                                fontWeight : 'bold'
                                            }
                                        }
                                    }
                                 },
                                 data:calldurarr2,
                             }]
                         });
                         //-- Charts for schedules of callings
                         var horariosllamadas=[{name:'<-8AM'}, {name:'8AM-10AM'}, {name:'10AM-12PM'}, {name:'12PM-2PM'}, {name:'2PM-4PM'}, {name:'4PM-6PM'}, {name:'6PM->'}];
                         var legendhorarios={}
                         $.each(Object.values(resp.data.schedules), function(i, el) {
                            horariosllamadas[i]={name:horariosllamadas[i]['name'],value:el};
                            legendhorarios[horariosllamadas[i]['name']]=el;
                         });
                         llamadasHorarios.setOption({
                             series : [{
                                 name:'interval',
                                 type:'pie',
                                 radius : ['50%','70%'],            
                                 itemStyle : {
                                    normal : {
                                        label : {
                                            show : false
                                        },
                                        labelLine : {
                                            show : false
                                        }
                                    },
                                    emphasis : {
                                        label : {
                                            show : true,
                                            position : 'center',
                                            textStyle : {
                                                fontSize : '30',
                                                fontWeight : 'bold'
                                            }
                                        }
                                    }
                                },
                                 data: horariosllamadas
                             }],                             
                         });
                         //-- Charts for callings by users
                         count = 0;
                         $.each(Object.values(resp.data.users), function(i, el) {
                             if (el != 0) count+=el;
                         });
                         llamadasUsuarios.setOption({
                             tooltip : {
                                 trigger: 'axis',
                                 formatter: function (params) {
                                     var val = params[0].value;
                                     var percent = (val / count * 100).toFixed(2);
                                     return params[0].name + '<br/>'
                                         + params[0].seriesName + ' : ' + val + ' (' + percent +'%)<br/>'
                                 }
                             },
                             xAxis : [
                                 {
                                     type : 'category',
                                     data : Object.keys(resp.data.users),
                                     show : false,
                                     position : 'right'
                                 }
                             ],
                             series : [{
                                 name:'ip',
                                 type:'bar',
                                itemStyle:{
                                    normal:{
                                        color: '#1DC0E4'
                                    },
                                    label:{
                                        show: true,
                                        position: 'top',
                                    },
                                },
                                 data:Object.values(resp.data.users)
                             }]
                         });
                         //-- General Table of stats by users
                         var llamadasMinutosPorUsuario = [];
                         $('#totales-usuario-table tbody tr').remove();
                         $.each(resp.data.users_table, function(i, el) {
                             if (el.hasOwnProperty('total_minutes') && !el.hasOwnProperty('is_total')) {
                                 llamadasMinutosPorUsuario.push({
                                    name: i, value: el.total_minutes
                                 });
                             }
                             var row = $('<tr/>');
                             row.append($('<td/>').html(i));
                             row.append($('<td/>').html(el.total_calls));
                             row.append($('<td/>').html(el.avg_calls));
                             row.append($('<td/>').html(el.total_minutes));
                             row.append($('<td/>').html(el.avg_minutes));
                             if (el.hasOwnProperty('is_total')) {
                                 row.css('display', 'none');
                            $('#totales-usuario-table').paging({

                            limit: 5,
                            rowDisplayStyle: 'block',
                            activePage: 0,
                            });

                             }
                             $('#totales-usuario-table tbody').append(row);
                         });
                         /*
                         llamadasPorcentajesCont.setOption({
                             series : [
                                 {
                                     name:'minutos',
                                     type:'pie',
                                     radius : '55%',
                                     center: ['50%', '60%'],
                                     data: llamadasMinutosPorUsuario
                                 }
                             ],
                             legend: {
                                 data:Object.keys(resp.data.users)
                             }
                         });*/
                     }

                 }
             }).fail(function(){
                console.log('error');
             }).always(function(){
                  $('.true-loader').css('display','none');
             })
         }
    };

function initcharts(){
    var total_llamadas = {
        title : {
            text: 'Llamadas por Fecha',
            subtext: ''
        },
        // grid: {
        //     width: '300%'
        // },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true},
                // dataView : {show: false, readOnly: false},
                // magicType : {show: true, type: ['line', 'bar']},
                // restore : {show: false},
                saveAsImage : {show: false},
            }
        },
        animation : true,
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['Dias']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'llamadas',
                type:'bar',
                data:[0]
            }
        ]
    };

    var total_duracion = {
        title : {
            text: 'Duración de llamadas en minutos',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },       
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: false}
            }
        },
        calculable : true,
        series : [
            {
                name:'Minutos',
                type:'pie',
                radius : ['50%','70%'],
                itemStyle : {
                normal : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        show : true
                    }
                },
            },
            data:[
                {value: 2, name:'5'},
            ],
            }
        ]
    };

    var total_horarios = {
        title : {
            text: 'Llamadas por horario',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: false}
            }
        },
        calculable : true,
        series : [
            {
                name:'Minutos',
                type:'pie',
                radius : ['50%','70%'],
                itemStyle : {
                normal : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        show : true
                    }
                },
            },
            data:[
                {value: 2, name:'5'},
            ],
            }
        ]
    };

    var total_usuarios = {
        title : {
            text: 'Llamadas por Usuarios',
            subtext: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            },
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        animation : false,
        calculable : true,
        grid:{
            borderWidth:0,        
            y: 80,
            y2: 60
        },
        xAxis : [
            {
                type : 'category',
                show:false,
                data : ['Ip']
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : false
            }
        ],
        series : [
            {
                name:'ip',
                type:'bar',
                itemStyle:{
                    normal:{
                        color: '#1DC0E4',
                        label:{
                            show: true,
                            position: 'top',
                            formatter: '\n{c}'
                        },
                    },
                },
                data:[0],
            }
        ]
    };

    var llamadasPorcentajes = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['5']
        },
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: false}
            }
        },
        calculable : true,
        series : [
            {
                name:'Minutos',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value: 2, name:'5'},
                ]
            }
        ]
    };


    llamadasPorDia = echarts.init(document.getElementById('llamadas-dia-chart'));
    llamadasPorDia.setOption(total_llamadas);
    duracionPorLlamadas = echarts.init(document.getElementById('llamadas-minutos'));
    duracionPorLlamadas.setOption(total_duracion);

    llamadasHorarios = echarts.init(document.getElementById('llamadas-horarios'));
    llamadasHorarios.setOption(total_horarios);

    llamadasUsuarios = echarts.init(document.getElementById('llamadas-usuarios'));
    llamadasUsuarios.setOption(total_usuarios);
/*
    llamadasPorcentajesCont= echarts.init(document.getElementById('llamadas-porcentajes'));
    llamadasPorcentajesCont.setOption(llamadasPorcentajes);
*/
    // Auxiliar way to hide
    $('#reports-container').hide();
};