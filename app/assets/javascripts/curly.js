;(function(){
  $(document).ready(function(){
    $('.url_input_field_button').click(function(){
      var url = $('.url_input_field').val();
      $('.curl').attr('onclick', 'location.href="'+url+'"');
    });
  })

})();

