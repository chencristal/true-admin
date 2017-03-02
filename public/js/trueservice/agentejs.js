//var chart audioagente.html
var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx6 = document.getElementById("myChart6").getContext("2d");

$("#myChart6").click( 
    function(evt){
        getList();
    }
);  

//Graphic Match
function matchNumber(percentage, count, count_transc){
    $('#count_match').text(percentage+'%');
    $('#total_match').text(count);
    $('#total_files').text(count_transc);
    $('#total_files_keywords').text(count_transc);
    $('#total_files_sentiments').text(count_transc);
    
    var data6 = {
        labels: [
            "Similitude",
            "Non-Similitude"
        ],
        datasets: [
            {
                data: [percentage, (100-percentage)],
                backgroundColor: [
                    "#0992c7",
                    "#1dc0e4"
                ],
                hoverBackgroundColor: [
                    "#125f77",
                    "#36A2EB"
                ]
            }]
    };
    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx6, {
        type: 'doughnut',
        data: data6,
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
} //End Graphic Match

//Graphic topWord
function topWord(words, countw, count){
    $('#total_Keywords').text(count);    
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
//reinicia el canvas para no guardar puntos anteriores
    $('#myChart').remove();
    $('#chartWraper').append('<canvas id="myChart" style="min-width: 100%; min-height: 230px;" ></canvas>');
    ctx=document.getElementById('myChart').getContext("2d");
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

    /* EMOCIONES
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

