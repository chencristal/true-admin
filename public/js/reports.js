/**
 * Created by carlosrenato on 01-19-17.
 */
$(function() {

    // Helper for dev purpose
    function setDefaultValues () {
        $('#aux-date-start').val('2017-01-10');
        $('#aux-date-end').val('2017-01-31');
    }

    // $('#llamadas-dia-chart>div').each(function(i, el) {
    //     $(el).css({'overflow-x': 'scroll', width: $(el).width + 2000});
    // });

     $('#btn-generate-reports').on('click', function(e) {
        e.preventDefault();
        $('#reports-container').show();
        $('#reports-container').css('display', 'block');
         var ini = $('#aux-date-start').val();
         var fin = $('#aux-date-end').val();
         var callcenters = ($("#select_callcenter").val() != null) ? $("#select_callcenter").val() : '' ;
         var campaigns = ($("#select_campaign").val() != null) ? $("#select_campaign").val() : '' ;
         if (ini == "" || fin == "" || callcenters == "" || campaigns == "") {
             alert('Please select a fields in the select options.');
         } else {
             $.ajax({
                 method: 'post',
                 url: 'reports/data',
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
                         //-- Charts for total of callings
                         var count = 0;
                         $.each(Object.values(resp.data.total), function(i, el) {
                            if (el != 0) count+=el;
                         });
                         llamadasPorDia.setOption({
                             // grid: {width: '250%'},
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
                                     data : Object.keys(resp.data.total),
                                     position : 'left'
                                 }
                             ],
                             yAxis : [
                                 {
                                     type : 'value'
                                 }
                             ],
                             series : [{
                                 name:'llamadas',
                                 type:'bar',
                                 data:Object.values(resp.data.total)
                             }]
                         });
                         //-- Charts for duration of callings
                         count = 0;
                         $.each(Object.values(resp.data.duration), function(i, el) {
                             if (el != 0) count+=el;
                         });
                         duracionPorLlamadas.setOption({
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
                                     data : Object.keys(resp.data.duration),
                                     position : 'left'
                                 }
                             ],
                             series : [{
                                 name:'llamadas',
                                 type:'bar',
                                 data:Object.values(resp.data.duration)
                             }]
                         });
                         //-- Charts for schedules of callings
                         count = 0;
                         $.each(Object.values(resp.data.schedules), function(i, el) {
                             if (el != 0) count+=el;
                         });
                         llamadasHorarios.setOption({
                             tooltip : {
                                 trigger: 'axis',
                                 formatter: function (params) {
                                     var val = params[0].value;
                                     var percent = (val / count * 100).toFixed(2);
                                     return params[0].name + '<br/>'
                                         + params[0].seriesName + ' : ' + val + ' (' + percent +'%)<br/>'
                                 }
                             },
                             series : [{
                                 name:'horarios',
                                 type:'bar',
                                 data: (resp.data.schedules)
                             }]
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
                                     position : 'right'
                                 }
                             ],
                             series : [{
                                 name:'ip',
                                 type:'bar',
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
                                 row.css('font-weight', 800);
                             }
                             $('#totales-usuario-table tbody').append(row);
                         });
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
                         });
                     }
                 }
             })
         }
     });

    var total_llamadas = {
        title : {
            text: 'Frecuencia Llamadas por Día',
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
                saveAsImage : {show: true},
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
            text: 'Duracion de llamadas en minutos',
            subtext: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            },
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        animation : false,
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['Minutos']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'minutos',
                type:'bar',
                data:[0],
            }
        ]
    };

    var total_horarios = {
        title : {
            text: 'Llamadas por Horarios',
            subtext: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            },
            formatter: ""
        },
        animation : false,
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['<-8AM', '8AM-10AM', '10AM-12PM', '12PM-2PM', '2PM-4PM', '4PM-6PM', '6PM->']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'horarios',
                type:'bar',
                data:[0,0,0,0,0,0,0]
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
            show : true,
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
        xAxis : [
            {
                type : 'category',
                data : ['Ip']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'ip',
                type:'bar',
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
                saveAsImage : {show: true}
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


    var llamadasPorDia = echarts.init(document.getElementById('llamadas-dia-chart'));
    llamadasPorDia.setOption(total_llamadas);

    var duracionPorLlamadas = echarts.init(document.getElementById('llamadas-minutos'));
    duracionPorLlamadas.setOption(total_duracion);

    var llamadasHorarios = echarts.init(document.getElementById('llamadas-horarios'));
    llamadasHorarios.setOption(total_horarios);

    var llamadasUsuarios = echarts.init(document.getElementById('llamadas-usuarios'));
    llamadasUsuarios.setOption(total_usuarios);

    var llamadasPorcentajesCont= echarts.init(document.getElementById('llamadas-porcentajes'));
    llamadasPorcentajesCont.setOption(llamadasPorcentajes);
    // Auxiliar way to hide
    $('#reports-container').hide();
});