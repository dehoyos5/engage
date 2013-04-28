;(function(){
  $(document).ready(function(){

    $('.generate_widget').click(function(e){
      var url = $('.url_input_field').val();
      var color = $('.html_color').val();
      var text = $('.widget_text').val();

      $('.widget_code').css('display', 'block').val('<div id="engage_anchor" widget_text="'+text+'" widget_color="'+color+'" widget_url="'+url+'"></div><script type="text/javascript" src="http://localhost:3001/topbar.js"></script>');


    })

  })

})();

