
/*   try {
 /* var data_var = <%- JSON.stringify(grafo_tema_general) %>;
  var data_1 = data_var.data1;
  var data_2 = data_var.data2;
  var data_3 = data_var.data3;

  var text_title2 = data_var.title_temaglobal;
  var text_title3 = data_var.title_tema;
  var text_title4 = data_var.title_subtema;

  
  console.log('data:', data_3)
  
  var cont_item2 ='#container5';  
  var cont_item3 ='#container6';  
  var cont_item4 ='#container7'; 
}
catch(err) {
  console.log(err.message);
}*/



//Configuración de color
Highcharts.getOptions().plotOptions.pie.colors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;
    for (i = 0; i < 10; i += 1) {
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

var text_title2 = 'tema1';
var text_title3 = 'tema2';
var text_title4 = 'tema3';

var cont_item2 ='#container5';  
var cont_item3 ='#container6';  
var cont_item4 ='#container7'; 

data_1 = [ { y: 12.82051282051282, name: 'Features' },
    { y: 7.6923076923076925, name: 'Operation' },
    { y: 12.82051282051282, name: 'Problems' },
    { y: 12.82051282051282, name: 'Agencies type' },
    { y: 10.256410256410255, name: 'Available services' },
    { y: 7.6923076923076925, name: 'Location' },
    { y: 12.82051282051282, name: 'Requirements' },
    { y: 5.128205128205128, name: 'Attention Schedule' },
    { y: 12.82051282051282, name: 'Account Closure' },
    { y: 5.128205128205128, name: 'Fraud' },
    { name: 'Proprietary or Undetectable',
      y: 0.2,
      dataLabels: { enabled: false } } ]

data_2 =  [ { y: 9.803921568627452, name: 'Accounts' },
    { y: 5.88235294117647, name: 'Investments' },
    { y: 10.8431372549019605, name: 'Mobile Banking' },
    { y: 1.9607843137254901, name: 'Banking Agencies' },
    { y: 5.88235294117647, name: 'Investments' },
    { y: 9.803921568627452, name: 'Electronic Bank' },
    { y: 14.803921568627452, name: 'Phone Banking' },
    { y: 14.803921568627452, name: 'Credit Cards' },
    { y: 22.803921568627452, name: 'ATM' },
    { name: 'Proprietary or Undetectable',
      y: 0.2,
      dataLabels: { enabled: false } } ]


data_3 = [ { y: 45.33333333333333, name: 'Channels' },  { y: 55.33333333333333, name: 'Products' },  { name: 'Proprietary or Undetectable',    y: 0.2,    dataLabels: { enabled: false } } ]

containerPie(data_3, text_title2,cont_item2,1);
containerPie(data_2, text_title3,cont_item3,2);
containerPie(data_1, text_title4,cont_item4,0);



function containerPie(datos, text_title, cont_item, flag) {
  try {
    /*var data_var = <%- JSON.stringify(grafo_tema_general) %>;
    var data_4 = data_var.data4;
    var data_5 = data_var.data5;
    var data_6 = data_var.data6;
    var data_7 = data_var.data7;  
    var cont_item3 ='#container6';            
    var cont_item4 ='#container7'; */
  }
  catch(err) {
    console.log(err.message);
  }

  $(cont_item).highcharts({
  chart: {
    backgroundColor: "transparent",
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: text_title,
    align: 'center',
    verticalAlign: 'middle',
    y: 40
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0px 1px 2px black'
        }
      },
    startAngle: -90,
    endAngle: 90,
    center: ['50%', '75%']
    }
  },
  series: [{
    type: 'pie',
    name: 'porcentaje',
    innerSize: '50%',
    data:datos,
    point:{
      events:{
        click: function (event) {      
          if (flag == 1){
            //var res = data_5[0];
            var res = ["Channels", "Products"];
            var item = res.indexOf(this.name);
            var datos4 = [ { y: 10.5, name: 'Accounts' },
                { y: 9.5, name: 'Investments' },
                { y: 15.6, name: 'Mobile Banking' },
                { y: 4.4, name: 'Banking Agencies' },
                { y: 50.5, name: 'Credit Cards' },
                { y: 9.5, name: 'ATM' },
                { name: 'Proprietary or Undetectable',
                  y: 0.2,
                  dataLabels: { enabled: false }}];
            var datos5 = [ { y: 20.0, name: 'Accounts' },
                { y: 40.0, name: 'Investments' },
                { name: 'Proprietary or Undetectable',
                  y: 0.2,
                  dataLabels: { enabled: false }}]; 
              //console.log('item',item);
              if (item == 0){
                containerPie(datos4, res[item],cont_item3,2)
              }
              else{
                containerPie(datos5, res[item],cont_item3,2)
              }
            $('#container7').css({'visibility' : 'hidden'});
          }
          if (flag == 2){
            //var res = data_7[0];
            var res = ["Investments", "Accounts", "Mobile Banking", "Credit Cards", "ATM"];
            var item = res.indexOf(this.name);
            var datos4= [ { y: 12.00, name: 'Features' },
              { y: 7.99, name: 'Operation' },
              { y: 12.8, name: 'Problems' },
              { y: 12.8, name: 'Agencies type' },
              { y: 25.82051282051282, name: 'Account Closure' },
              { y: 30.128205128205128, name: 'Fraud' },
              { name: 'Proprietary or Undetectable',
                y: 0.2,
                dataLabels: { enabled: false } } ];
            var datos5 = [ { y: 20.0, name: 'Fraud' },
                { y: 40.0, name: 'Operation' },
                { y: 35.0, name: 'Credit Cards' },
                { y: 5.0, name: 'Phone Banking' },
                { name: 'Proprietary or Undetectable',
                  y: 0.2,
                  dataLabels: { enabled: false }}]; 
            var datos6 = [ { y: 20.0, name: 'Fraud' },
                { y: 80.0, name: 'Credit Cards' },
                { name: 'Proprietary or Undetectable',
                  y: 0.2,
                  dataLabels: { enabled: false }}]; 
            var datos7 = [ { y: 40.0, name: 'Operation' },
                { y: 35.0, name: 'Credit Cards' },
                { y: 25.0, name: 'Phone Banking' },
                { name: 'Proprietary or Undetectable',
                  y: 0.2,
                  dataLabels: { enabled: false }}]; 
            if (item == 0){
              containerPie(datos4, res[item],cont_item4,0)
            }
            else if (item == 1) {
              containerPie(datos6, res[item],cont_item4,0)
            }
            else if (item == 2) {
              containerPie(datos7, res[item],cont_item4,0)
            }
            else{
              containerPie(datos5, res[item],cont_item4,0)
            }
            $('#container7').css({'visibility' : 'visible'});
          }
        }
      }
    }      
  }]
  });
} //Fin function
