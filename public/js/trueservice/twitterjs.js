var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = echarts.init(document.getElementById('myChart2'));
var ctx3 = echarts.init(document.getElementById('myChart3'));
var ctx4 = echarts.init(document.getElementById('myChart4'));
//var ctx2 = document.getElementById("myChart2").getContext("2d");
//var ctx3 = document.getElementById("myChart3").getContext("2d");
//var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx5 = document.getElementById("myChart5").getContext("2d");
var ctx7 = document.getElementById("myChart7").getContext("2d");
var ctx9 = document.getElementById("myChart9").getContext("2d");


// Function countItems 
function countItems(arr, what){
    var count= 0, i;
    while((i= arr.indexOf(what, i))!= -1){
        ++count;
        ++i;
    }
    return count
} //end countItems


//Graphic counts
function counts(dates, countd, count){
    $('#total_bar').text(count);
    var data = {
        labels: dates,
        datasets: [
            {
                label: "Audios",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#0992c7",
                borderColor: "#0992c7",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.9,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 8,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: countd,
                spanGaps: false,
            }
        ]
    };

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
                scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                },
                legend: { 
                    display: false 
                }
        }
    });
}//End Graphic  counts

function charThemes(data){  

    chartOptions = {
        title : {text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "<center>{b}</center> <center>{c}%</center>",
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }           
            /*trigger: 'axis',
            axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }*/
        },
        /**legend: {
            orient : 'vertical',
            x : 'left',
            data:['data1','data2','data3','data4','data5']
        },**/
        toolbox: {
            show : true,
            feature : {
                /**mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {   
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },**/
                restore : {show: true, title : 'Reload'},
                saveAsImage : {show: true, title : 'Save'}
            }
        },
        calculable : true,
        color: ["#023c56","#0992c7","#1dc0e4","#125f77","#8de4ff"],
        series : [
            {
                name:'Categorie',
                type:'pie',
                radius : '60%',
                center: ['50%', '50%'],
                data: data,
                onclick: function(e) { alert('yes!!'); }
            }
        ]
    };
    return chartOptions;
}

//Graphic themes
function themes(wordsArray, percArray, count){

    $('#total_themes').text(count);
    
    /*Themes 1*/
    var data1 = [];
    var arr_theme1 = percArray[0];
    for (key in arr_theme1){
        var dict_array = {value:(arr_theme1[key]).toFixed(2), name:key};
        data1.push(dict_array);
    } 

    /*Themes 2*/
    var data2 = [];
    var arr_theme2 = percArray[1];
    for (key in arr_theme2){
        var dict_array = {value:(arr_theme2[key]).toFixed(2), name:key};
        data2.push(dict_array);
    } 

    /*Themes 3*/
    var data3 = [];
    var arr_theme3 = percArray[2];
    for (key in arr_theme3){
        var dict_array = {value:(arr_theme3[key]).toFixed(2), name:key};
        data3.push(dict_array);
    } 
    
    /* Chart themes */
    myPieChart2 = charThemes(data1);
    ctx2.setOption(myPieChart2);
    //chart theme 2
    myPieChart6 = charThemes(data2);
    ctx3.setOption(myPieChart6);
    //chart theme 3
    myPieChart7 = charThemes(data3);
    ctx4.setOption(myPieChart7);
    
    /* Start action reload */ 
    document.getElementById('reload_themes').onclick = function(){        
        //chart theme 1
        myPieChart2 = charThemes(data1);
        ctx2.setOption(myPieChart2);
        //chart theme 2
        myPieChart3 = charThemes(data2);
        ctx3.setOption(myPieChart3);
        //chart theme 3
        myPieChart4 = charThemes(data3);
        ctx4.setOption(myPieChart4);
    }
    /*End action reload*/

    /*Start Action  option click themes1*/
    ctx2.on('click', function (params) {        
        var item = params.name; //Selected item         
        var dic_theme1 = wordsArray[0];

        var themes1 = []

        for (var key in dic_theme1) {
            if (themes1[key] != undefined){ //Exis key
                value = themes1[key] +dic_theme1[key];
                themes1[key] = value;
            }
            else{ //Exis key
                themes1[key] = dic_theme1[key];
            }
        }

        var ids_theme2 = themes1[item].split(',');


        var dic_theme2 = wordsArray[1];

        var dic_new_theme2 = {};

        var total = 0;

        for (var x in ids_theme2){
            for (var key in dic_theme2){
                if ( typeof(dic_theme2[key]) == 'object'){
                    ids = dic_theme2[key]
                }
                else{
                    ids = dic_theme2[key].split(',')
                } 
                if (ids.indexOf(ids_theme2[x]) > -1){
                    if (dic_new_theme2[key] != undefined){ //Exis key
                        value = dic_new_theme2[key] +1;
                        dic_new_theme2[key] = value;
                        total+=1;
                    }
                    else{ //Exis key
                        dic_new_theme2[key] = 1;
                        total+=1;
                    }
                }
            }
        }

        dataName2 = []
        for (var key in dic_new_theme2){
            dict_array = {value:((dic_new_theme2[key]/total)*100).toFixed(2), name:key};
            dataName2.push(dict_array);
        }

        ctx3.clear();
        myPieChart3 = charThemes(dataName2);
        ctx3.setOption(myPieChart3);        
    });
    //End Action  option click themes1

    //Start Action  option click  themes2
    ctx3.on('click', function (params) {
        var item = params.name; //Selected item 
        
        var dic_theme2 = wordsArray[1];

        var themes1 = []

        for (var key in dic_theme2) {
            if (themes1[key] != undefined){ //Exis key
                value = themes1[key] +dic_theme2[key];
                themes1[key] = value;
            }
            else{ //Exis key
                themes1[key] = dic_theme2[key];
            }
        }

        var ids_theme2 = themes1[item].split(',');

        var dic_theme3 = wordsArray[2];

        var dic_new_theme2 = {};

        var total = 0;

        var ids = '';

        for (var x in ids_theme2){
            for (var key in dic_theme3){
                if ( typeof(dic_theme3[key]) == 'object'){
                    ids = dic_theme3[key]
                }
                else{
                    ids = dic_theme3[key].split(',')
                }                
                if (ids.indexOf(ids_theme2[x]) > -1){
                    if (dic_new_theme2[key] != undefined){ //Exis key
                        value = dic_new_theme2[key] +1;
                        dic_new_theme2[key] = value;
                        total+=1;
                    }
                    else{ //Exis key
                        dic_new_theme2[key] = 1;
                        total+=1;
                    }
                }
            }
        }

        dataName2 = []
        for (var key in dic_new_theme2){
            dict_array = {value:((dic_new_theme2[key]/total)*100).toFixed(2), name:key};
            dataName2.push(dict_array);
        }

        ctx4.clear();
        myPieChart4 = charThemes(dataName2);
        ctx4.setOption(myPieChart4);
    });
    //End Action  option click  themes2

}//End Graphic  themes


function chartSent(label, datas, ctx){

    var data2 = {
        labels: label,
        datasets: [
            {
                data: datas,
                backgroundColor: [
                    "#0992c7",
                    "#1dc0e4"
                ],
                hoverBackgroundColor: [
                    "#125f77",
                    "#36A2EB"         ]
            }]
    };
    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data2,
        options: {
                scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                },
                legend: { 
                        display: false 
                }
        }
    });  
}// end chartSent
    
//Graphic sentiments
function sentiments(pos, neg, count){
    $('#total_sentiments').text(count);  
    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;
    $('#value_pos').text(pos+'%');
    $('#value_neg').text(neg+'%');

    if(happy>love){
        $('#pos1').text(happy+'%');
        $('#pos_tag').text('Happy');
        chartSent(["Happy", "love"], [happy, 100-happy], ctx5);
    }
    else{
        $('#pos1').text(love+'%');
        $('#pos_tag').text('love');
        chartSent(["love", "Happy"], [love, 100-love], ctx5);
    }

    if(angry>sad){
        $('#neg1').text(angry+'%');
        $('#neg_tag').text('Angry'); 
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx7);
    }
    else{
        $('#neg1').text(sad+'%');
        $('#neg_tag').text('Sad');
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx7);
    }    

}//End Graphic sentiments

//Graphic topWord
function topWord(words, countw, count){
    $('#total_Keywords').text(count);    
    var data9 = {
        labels: words,
        datasets: [
            {
                label: "Keywords",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "#0992c7",
                pointBackgroundColor: "#0992c7",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: countw
            }
        ]
    };
    var myRadarChart = new Chart(ctx9, {
        type: "radar",
        data: data9,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

}//End Graphic topWord

chartOptions = {
    title : {text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    /**legend: {
        orient : 'vertical',
        x : 'left',
        data:['data1','data2','data3','data4','data5']
    },**/
    toolbox: {
        show : true,
        feature : {
            /**mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {   
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },**/
            restore : {show: true, title : 'Reload'},
            saveAsImage : {show: true, title : 'Save'}
        }
    },
    calculable : true,
    color: ["#023c56","#0992c7","#1dc0e4","#125f77","#8de4ff"],
    series : [
        {
            name:'series',
            type:'pie',
            radius : '90%',
            center: ['50%', '50%'],
            data:[
                {value:10, name:'1'},
                {value:10, name:'2'},
                {value:25, name:'3'},
                {value:50, name:'4'},
                {value:5, name:'5'}
            ]
        }
    ]
};
