function getGoMatch() {
  var value = document.getElementById("download_match").value;  
  var container = "#cont_match";
  
  if (value == 'select1'){
    window.location = '/excel_match';
  }
  if (value == 'select2'){
    //downloadPNG(container);
  }
  if (value == 'select3'){
    //downloadPDF(container);
  }
}

function getGoKeywords() {
  var value = document.getElementById("download_keyword").value;  
  var container = "#main";
  
  if (value == 'select1'){
    window.location = '/excel_word';
  }
  if (value == 'select2'){
    downloadPNG(container);
  }
  if (value == 'select3'){
    //downloadPDF(container);
  }
}

function getList(){
  $("#list").addClass('pop-up-list');
}

function getGOSentiments(){
  var value = document.getElementById("download_sentiments").value;  
  var container = "#container_sentiment";
  if (value == 'select1'){              
    window.location = '/excel_sentiments';
  }
  if (value == 'select2'){
    //downloadPNG(container);
  }
  if (value == 'select3'){
    //downloadPDF(container);
  }
}

function getGoBrowser(){
  var total_browser = document.getElementById("total_browser").innerHTML;
  if (total_browser > 0){
    window.location = '/excel_browser';
  }
}

function downloadPNG(container) {
  html2canvas($(container), {
      onrendered: function(canvas) {
          theCanvas = canvas;
          document.body.appendChild(canvas);
          Canvas2Image.saveAsPNG(canvas); 
      }
  });
}


function getGoField() {
  var value = document.getElementById("download_field").value;  
  var container = "#container_fields1";
  if (value == 'select1'){              
    window.location = '/excel_field';
  }
  if (value == 'select2'){
    //downloadPNG(container);
  }
  if (value == 'select3'){
    //downloadPDF(container);
  }
}