var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx6 = document.getElementById("myChart6").getContext("2d");
var ctx8 = document.getElementById("myChart8").getContext("2d");
var ctx10 = document.getElementById("myChart10").getContext("2d");
var ctx12 = document.getElementById("myChart12").getContext("2d");
var ctx14 = document.getElementById("myChart14").getContext("2d");
var ctx16 = document.getElementById("myChart16").getContext("2d");
var ctx18 = document.getElementById("myChart18").getContext("2d");
var ctx20 = document.getElementById("myChart20").getContext("2d");
var ctx22 = document.getElementById("myChart22").getContext("2d");
var ctx24 = document.getElementById("myChart24").getContext("2d");


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

//Graphic topThreeAudio
function topThreeAudio(wordsAgent,  count){
    $('#agentword1').text(wordsAgent[0]);
    $('#agentword2').text(wordsAgent[1]);
    $('#agentword3').text(wordsAgent[2]);
}//End Graphic topThreeAudio

//Graphic topThreeNetwork
function topThreeNetwork(wordsTweet, count){
    $('#tweetword1').text(wordsTweet[0]);
    $('#tweetword2').text(wordsTweet[1]);
    $('#tweetword3').text(wordsTweet[2]);
}//End Graphic topThreeNetwork

//Graphic topThreeEmail
function topThreeEmail(wordsTweet, count){
    if (wordsTweet == undefined){
        console.log('OCULTAR!');
    }else{
        $('#tweetword1').text(wordsTweet[0]);
        $('#tweetword2').text(wordsTweet[1]);
        $('#tweetword3').text(wordsTweet[2]);
    }        
}//End Graphic topThreeEmail

//Graphic topThreeChat
function topThreeChat(wordsTweet, count){
    if (wordsTweet == undefined){
        console.log('OCULTAR!');
    }else{
        $('#tweetword1').text(wordsTweet[0]);
        $('#tweetword2').text(wordsTweet[1]);
        $('#tweetword3').text(wordsTweet[2]);
    }        
}//End Graphic topThreeChat

//Graphic topThreeNotes
function topThreeNotes(wordsTweet, count){
    if (wordsTweet == undefined){
        console.log('OCULTAR!');
    }else{
        $('#tweetword1').text(wordsTweet[0]);
        $('#tweetword2').text(wordsTweet[1]);
        $('#tweetword3').text(wordsTweet[2]);
    }        
}//End Graphic topThreeNotes

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


    /*var happy = Math.round(Math.random()*100);
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
    }   */

}//End Graphic sentiments


//Graphic agentSentiments
function agentSentiments(pos, neg, count){

    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;
    
    if(happy>love){
        
        chartSent(["Happy", "love"], [happy, 100-happy], ctx6);
    }
    else{
        
        chartSent(["love", "Happy"], [love, 100-love], ctx6);
    }

    if(angry>sad){
        
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx8);
    }
    else{
        
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx8);
    }  

}//End Graphic agentSentiments

//Graphic networkSentiments
function networkSentiments(pos, neg, count){

    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;

    if(happy>love){
        
        chartSent(["Happy", "love"], [happy, 100-happy], ctx10);
    }
    else{
        
        chartSent(["love", "Happy"], [love, 100-love], ctx10);
    }

    if(angry>sad){
        
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx12);
    }
    else{
        
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx12);
    }  

}//End Graphic networkSentiments

//Graphic emailSentiments
function emailSentiments(pos, neg, count){

    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;

    if(happy>love){
        
        chartSent(["Happy", "love"], [happy, 100-happy], ctx14);
    }
    else{
        
        chartSent(["love", "Happy"], [love, 100-love], ctx14);
    }

    if(angry>sad){
        
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx16);
    }
    else{
        
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx16);
    }  

}//End Graphic emailSentiments

//Graphic chatSentiments
function chatSentiments(pos, neg, count){

    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;

    if(happy>love){
        
        chartSent(["Happy", "love"], [happy, 100-happy], ctx18);
    }
    else{
        
        chartSent(["love", "Happy"], [love, 100-love], ctx18);
    }

    if(angry>sad){
        
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx20);
    }
    else{
        
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx20);
    } 
    
}//End Graphic chatSentiments

//Graphic notesSentiments
function notesSentiments(pos, neg, count){

    var happy = Math.round(Math.random()*100);
    var love = 100-happy;
    var angry = Math.round(Math.random()*100);
    var sad = 100-angry;

    if(happy>love){
        
        chartSent(["Happy", "love"], [happy, 100-happy], ctx22);
    }
    else{
        
        chartSent(["love", "Happy"], [love, 100-love], ctx22);
    }

    if(angry>sad){
        
        chartSent(["Angry", "Sad"], [angry, 100-angry], ctx24);
    }
    else{
        
        chartSent(["Sad", "Angry"], [sad, 100-sad], ctx24);
    }

}//End Graphic notesSentiments

function total(countext, countweet, count){

    $('#total_match').text(count);
    
    /*
    document.getElementById("div_email").style.display = "block";
    document.getElementById("div_chats").style.display = "block";
    document.getElementById("div_notes").style.display = "block";
    */

    //Audios
    var maxprogress = count;
    var newprogress = countext;
    $('#bar_audios').text(newprogress );
    $('#chart_bar_audios').width(newprogress+'%').attr('aria-valuenow', newprogress+'%');
    //Social network
    var newprogress = countweet;
    $('#bar_social_network').text(newprogress); 
    $('#chart_bar_social_network').width(newprogress+'%').attr('aria-valuenow', newprogress+'%');

    /*END NUEVO*/
}

//function themes (topic) 
function themes(topic_aud, subtopic_aud, topic_twe, subtopic_twe, count){
    // AUDIOS
    //element 1 of topic dictionary
    var key_t = [];
    var key_s = [];
    for(var key in topic_aud) {
        key_t.push(key);
    }
    topic_aud = key_t[0];
    //element 1 of subtopic dictionary
    for(var key in subtopic_aud) {
        key_s.push(key);
    }
    subtopic_aud = key_s[0]; 
    $('#audioTopic').text(topic_aud); 
    $('#audioSubtopic').text(subtopic_aud); 

    // TWITTER
    //element 1 of topic dictionary
    var key_t = [];
    var key_s = [];
    for(var key in topic_twe) {
        key_t.push(key);
    }
    topic_twe = key_t[0];
    //element 1 of subtopic dictionary
    for(var key in subtopic_twe) {
        key_s.push(key);
    }
    subtopic_twe = key_s[0];  
    $('#networkTopic').text(topic_twe); 
    $('#networkSubtopic').text(subtopic_twe);  
}//end themes 