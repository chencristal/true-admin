function chart_function(data_1_word,data_2_word) {

  var words = data_1_word;
  var numWords = data_2_word;

 /* var words = ['hello', 'account', 'pay', 'free', 'sale', 'angry', 'cellphone', 'computer', 'sad', 'happy'];
  var numWords = [200, 300, 5, 6, 150, 10, 60, 80, 90, 100];*/

   
  // configure for module loader
  require.config({
      paths: {
          echarts: '../js/build/dist'
      }
  });

  // use
  require(
      [
          'echarts',
          'echarts/chart/force' // require the specific chart type
      ],
      function (ec) {
          // Initialize after dom ready
          var myChart = ec.init(document.getElementById('main')); 
          
          var option = {
            backgroundColor: '#F2F2F2',
            title : {
                x:'right',
                y:'bottom'
            },
            tooltip : {
                trigger: 'item',
                formatter: '{b} : {c}'
            },
            toolbox: {
                show : false,
                feature : {
                    restore : {show: true},
                    magicType: {show: true, type: ['force']},
                    saveAsImage : {show: true}
                }
            },
            legend: {
                x: 'left',
                data:[]
            },
            series : [
                {
                    type:'force',
                    name : "text",
                    ribbonType: true,

                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    color: 'black',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }
                            },
                            nodeStyle : {
                                brushType : 'both',
                                borderColor : '#1382c5',
                                borderWidth : 0
                            },
                            linkStyle:{
                              normal:{
                                type: 'line',
                                width : 5
                              }
                            },
                            flexShrink: {
                                type: 'curve'
                            }
                        },
                        emphasis: {
                            label: {
                                show: false
                            },
                            nodeStyle : {
                              borderColor : 'rgba(19, 130, 197, 0.4)',
                              borderWidth : 5
                            },
                            linkStyle : {}
                        }
                    },
                    useWorker: false,
                    minRadius : 15,
                    maxRadius : 40,
                    gravity: 0,
                    scaling: 1.2,
                    nodes:[
                        {category: 1, name: words[0],value : numWords[0]},
                        {category: 2, name: words[1],value : numWords[1]},
                        {category: 3, name: words[2],value : numWords[2]},
                        {category: 4, name: words[3],value : numWords[3]},
                        {category: 5, name: words[4],value : numWords[4]},
                        {category: 6, name: words[5],value : numWords[5]},
                        {category: 7, name: words[6],value : numWords[6]},
                        {category: 8, name: words[7],value : numWords[7]},
                        {category: 9, name: words[8],value : numWords[8]},
                        {category: 10, name: words[9],value : numWords[9]}

                    ],
                    links : [
                        {source : words[0], target : words[1], weight : 1},
                        {source : words[1], target : words[2], weight : 1},
                        {source : words[1], target : words[3], weight : 1},
                        {source : words[2], target : words[7], weight : 1},
                        {source : words[0], target : words[4], weight : 1},
                        {source : words[4], target : words[6], weight : 1},
                        {source : words[6], target : words[7], weight : 1},
                        {source : words[7], target : words[8], weight : 1},
                        {source : words[8], target : words[9], weight : 1},
                        {source : words[5], target : words[9], weight : 1},
                        {source : words[4], target : words[5], weight : 1},
                        {source : words[3], target : words[0], weight : 1},
                        {source : words[3], target : words[8], weight : 1}

                    ]
                }
            ]
        };
          myChart.setOption(option); 
      }
    );
}
