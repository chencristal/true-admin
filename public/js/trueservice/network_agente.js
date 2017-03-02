function getSeleccion(sel) {

  data_1_word = ['Excellent', 'Good', 'Thanks', 'Perfect', 'Congratulations', 'kindness', 'courteous' , 'Thank you', 'Good', 'respectful'];
  data_2_word = [random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num()];
  chart_function(data_1_word,data_2_word);              

  var value = sel.value;  
  if (value == 'select2'){
    data_1_word = ['Excellent', 'Good', 'Thanks', 'Perfect', 'Congratulations', 'kindness', 'courteous' , 'Thank you', 'Good', 'respectful'];
  data_2_word = [random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num()];
    chart_function(data_1_word,data_2_word);              
  }
  if (value == 'select3'){
    data_1_word = ['Bad', 'Terrible', 'Horrible', 'Angry', 'Discontented', 'Appalling', 'Claim' , 'Trouble', 'Complain', 'Appalling'];
    data_2_word = [random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num()];
    chart_function(data_1_word,data_2_word);              
  }
  if (value == 'select4'){
    data_1_word = ['Evil', 'Error',' Upset', 'Dismissal', 'Resignation',' Hurt', 'Expensive', 'Broken', 'Full', 'Return'];
    data_2_word = [random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num()];
    chart_function(data_1_word,data_2_word);   
  } 
  if (value == 'select5'){
    data_1_word = ['Electronic Bank', 'Accounts',' Phone Banking', 'ATM', 'Credit Cards',' Credits', 'Mobile Banking', 'Banking Agencies', 'Agencies', 'Banking'];
    data_2_word = [random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num(),random_num()];
    chart_function(data_1_word,data_2_word);   
  } 
}