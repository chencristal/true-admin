var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx5 = echarts.init(document.getElementById('myChart6'));
var ctx6 = echarts.init(document.getElementById('myChart7'));
var ctx7 = echarts.init(document.getElementById('myChart8'));
var ctx8 = document.getElementById("myChart9").getContext("2d");

// Function countItems 
function countItems(arr, what){
    var count= 0, i;
    while((i= arr.indexOf(what, i))!= -1){
        ++count;
        ++i;
    }
    return count
} //end countItems


//Graphic topWord

function topWord(words, countw, count, count_data){
    $('#total_Keywords').text(count);   
    $('#myChart').remove();
    $('#chartWraper').append('<canvas id="myChart" ></canvas>');
    ctx=document.getElementById('myChart').getContext("2d"); 

    $('#total_Keywords').text(count);  
    $('#total_files_Keywords').text(count_data);
    $('#total_files_bar').text(count_data);
    $('#total_files_themes').text(count_data);
    $('#total_files_sentiments').text(count_data);

    
    var data = {
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
    var myRadarChart = new Chart(ctx, {
        type: "radar",
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
}//End Graphic topWord

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

    $('#value_pos').text(pos+'%');
    $('#value_neg').text(neg+'%');

    $('#pos1').text(pos+'%');
    $('#pos_tag').text('Positive');

    chartSent(["Positive", "Negative"], [pos, neg], ctx2);

    $('#neg1').text(neg+'%');  
    $('#neg_tag').text('Negative');      
    chartSent(["Positive", "Negative"], [pos, neg], ctx4);

    /* 
    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;
    $('#value_pos').text(pos+'%');
    $('#value_neg').text(neg+'%');

    if(happy>love){
        $('#pos1').text(happy+'%');
        $('#pos_tag').text('Happy');
        chartSent(["Happy", "love"], [happy, 100-happy], ctx2);
    }
    else{
        $('#pos1').text(love+'%');
        $('#pos_tag').text('love');
        chartSent(["love", "Happy"], [love, 100-love], ctx2);
    }

    if(angry>sad){
        $('#neg1').text(angry+'%');  
        $('#neg_tag').text('Angry');      
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx4);
    }
    else{
        $('#neg1').text(sad+'%');
        $('#neg_tag').text('Sad');
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx4);
    } 
    */ 

}//End Graphic sentiments

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
function themes(wordsArray, array_percetage, count){

    $('#total_themes').text(count);
    
    var array_percetage = JSON.parse(array_percetage);
    
    console.log(array_percetage)

    var wordsArray = JSON.parse(wordsArray);
    
    /*Themes 1*/
    var data1 = [];
    themes_1 = array_percetage[0];

    for (var key in themes_1){
        var dict_array = {value:(themes_1[key]*100).toFixed(2), name:key};
        data1.push(dict_array);
    }

    console.log("=============");
    console.log(data1);
    console.log(array_percetage[0]);
    
    /*Themes 2*/

    var data2 = [];
    themes_2 = array_percetage[1];

    for (var key in themes_2){
        var dict_array = {value:(themes_2[key]*100).toFixed(2), name:key};
        data2.push(dict_array);
    }

    /*Themes 3*/

    var data3 = [];
    themes_3 = array_percetage[2];

    for (var key in themes_3){
        var dict_array = {value:(themes_3[key]*100).toFixed(2), name:key};
        data3.push(dict_array);
    }
    
    /* Chart themes */
    myPieChart5 = charThemes(data1);
    ctx5.setOption(myPieChart5);
    //chart theme 2
    myPieChart6 = charThemes(data2);
    ctx6.setOption(myPieChart6);
    //chart theme 3
    myPieChart7 = charThemes(data3);
    ctx7.setOption(myPieChart7);

    /* Start action reload */ 
    document.getElementById('reload_themes').onclick = function(){        
        //chart theme 1
        myPieChart5 = charThemes(data1);
        ctx5.setOption(myPieChart5);
        //chart theme 2
        myPieChart6 = charThemes(data2);
        ctx6.setOption(myPieChart6);
        //chart theme 3
        myPieChart7 = charThemes(data3);
        ctx7.setOption(myPieChart7);
    }
    /*End action reload*/

    /*Start Action  option click themes1*/
    ctx5.on('click', function (params) {        
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

        var ids_theme2 = themes1[item];//.split(',');

        var dic_theme2 = wordsArray[1];

        var dic_new_theme2 = {};

        var total = 0;

        for (var x in ids_theme2){
            for (var key in dic_theme2){
                if ( typeof(dic_theme2[key]) == 'object'){
                    ids = dic_theme2[key]
                }
                else{
                    ids = dic_theme2[key];//.split(',')
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

        ctx6.clear();
        myPieChart6 = charThemes(dataName2);
        ctx6.setOption(myPieChart6);        
    });
    //End Action  option click themes1

    //Start Action  option click  themes2
    ctx6.on('click', function (params) {
        var item = params.name; //Selected item 
        
        var dic_theme2 = wordsArray[1];

        var themes1 = [];

        for (var key in dic_theme2) {
            if (themes1[key] != undefined){ //Exis key
                value = themes1[key] + ',' +dic_theme2[key];
                themes1[key] = value;
            }
            else{ //Exis key
                themes1[key] = dic_theme2[key];
            }
        }



        var ids_theme2 = themes1[(item)]//.trim()].split(',');

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

        ctx7.clear();
        myPieChart7 = charThemes(dataName2);
        ctx7.setOption(myPieChart7);
    });
    //End Action  option click  themes2
}//End Graphic  themes

//Graphic counts
function counts(dates, countd, count){
    $('#total_bar').text(count); 
    $('#myChart9').remove();
    $('#chartWraper9').append('<canvas id="myChart9" style="max-width: 100%; min-height: 340px; height: 500px !important;" class="col-md-12 h_div_line"></canvas>');
    ctx8=document.getElementById('myChart9').getContext("2d"); 
    var data9 = {
        labels: dates,
        datasets: 
        [
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

    var myLineChart = new Chart(ctx8, {
        type: 'line',
        data: data9,
        options: {
            scale: {
                reverse: true,
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