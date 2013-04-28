
;(function(){

  function getScriptUrl() {
    var scripts = document.getElementsByTagName('script'),
      element,
      src;
    for (var i = 0; i < scripts.length; i++) {
      element = scripts[i];
      src = element.getAttribute ?
        element.getAttribute('src') : el.src;

      if (src && src.indexOf('topbar') > -1) {
        return src;
      }
    }
    return null;
  }

  getScriptUrl()


  var body = document.getElementsByTagName('body')[0];
  body.style.margin = '50px 0 0 0';

  var script_anchor = document.getElementById('engage_anchor') || false;
  if( !script_anchor){ alert('cant find element!');return; }

  var widget_color = script_anchor.getAttribute('widget_color');
  var widget_url = script_anchor.getAttribute('widget_url');

  var div = document.createElement('div');
  div.setAttribute('style', 'height:50px;width: 100%; background-color: #'+widget_color+';font-weight: bold;position: absolute;top: 0;text-align:center;font-size:30px;cursor:pointer;');
  div.setAttribute('onclick', 'window.open("'+widget_url+'")');


  var widget_meta = script_anchor.getAttribute('widget_text');
  div.innerHTML = "<div style='height:50px;line-height: 50px;'>" + widget_meta + "</div>";




  body.appendChild(div);
//widget code: <div id="engage_anchor" engage="what up"></div><script type="text/javascript" src="http://localhost:3001/topbar.js"></script>
})();









