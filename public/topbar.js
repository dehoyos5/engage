
;(function(){

  function getScriptUrl() {
    var scripts = document.getElementsByTagName('script'),
      element,
      src;
    debugger;
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
  var div = document.createElement('div');
  div.setAttribute('style', 'height:50px;width: 100%; background-color: lightpink;font-weight: bold;position: absolute;top: 0;text-align:center;font-size:30px');

  var script_anchor = document.getElementById('engage_anchor') || false;


  if( !script_anchor){ alert('fuck you!');return; }
  var widget_meta = script_anchor.getAttribute('engage');
  div.innerHTML = "<h1>" + widget_meta + "<h1>";




  body.appendChild(div);
//widget code: <script type="text/javascript" src="http://localhost:3001/topbar.js"></script><div id="engage_anchor" engage="what up"></div>
})();









