;(function(){
  $(document).ready(function(){

    $('.url_input_field_button').click(function(){
      var url = $('.url_input_field').val();
      $('.curl').attr('onclick', 'location.href="'+url+'"');
    });

    $('.curl').hover(function(){
      $('.background_img').animate({
        width: '240',
        height: '240'
      }, 500)
    }, function(){
      $('.background_img').animate({
        width: '120',
        height: '120'
      }, 500)
    });

  })

})();

