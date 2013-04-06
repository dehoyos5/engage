;(function(){
//  <script type="text/javascript" src="http://localhost:3001/widget_init.js#text=uniquehello"></script>
  function getScriptUrl() {
    var scripts = document.getElementsByTagName('script'),
      element,
      src;
    for (var i = 0; i < scripts.length; i++) {
      element = scripts[i];
      src = element.getAttribute ?
        element.getAttribute('src') : el.src;

      if (src && src.indexOf('widget_init') > -1) {
        return src;
      }
    }
    return null;
  }
  function getQueryParameters(query) {
    var args   = query.split('&'),
      params = {},
      pair,
      key,
      value;
    function decode(string) {
      return decodeURIComponent(string || "")
        .replace('+', ' ');
    }
    for (var i = 0; i < args.length; i++) {
      pair = args[i].split('=');
      key = decode(pair.shift());
      value = decode(pair ? pair[0] : null);
      params[key] = value;
    }
    return params;
  };

  var url = getScriptUrl()
  var params = getQueryParameters(url.replace(/^.*\#/, ''));

  var body = document.getElementsByTagName('body')[0];
  body.style.margin = '50px 0 0 0';
  var div = document.createElement('div');
//  div.setAttribute('id', 'engage_widget');
  div.setAttribute('style', 'height:50px;width: 100%; background-color: lightpink;font-weight: bold;position: absolute;top: 0;text-align:center;font-size:30px');

  div.innerHTML = params.text;

  body.appendChild(div);
})();









