 new Pikaday({ 
  field: document.getElementById('aux-date-start'),
    trigger: document.getElementById('datepicker-button-start'),
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
      onSelect: function() {
          var dateA = this.getMoment().format('L')
          var arrayA = dateA.split('/');
          $('#month_start').val(arrayA[0]);
          $('#day_start').val(arrayA[1]);
          $('#year_start').val(arrayA[2]);
      },
    yearRange: [2010,2020]
});

new Pikaday({ 
  field: document.getElementById('aux-date-end'),
    trigger: document.getElementById('datepicker-button-end'),
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
          var dateA = this.getMoment().format('L')
          var arrayA = dateA.split('/');
          $('#month_end').val(arrayA[0]);
          $('#day_end').val(arrayA[1]);
          $('#year_end').val(arrayA[2]);
      },
    yearRange: [2010,2020]
});
