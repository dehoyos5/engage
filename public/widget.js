(function(){
  if(document.getElementById('healthTapJSlink')){
    (elem=document.getElementById('healthTapJSlink')).parentNode.removeChild(elem);
  }
  if(document.getElementById('HtInboudLinks')){
    (elem=document.getElementById('HtInboudLinks')).parentNode.removeChild(elem);
  }
  var script_anchor = document.getElementById('engage_anchor') || false;

  if( !script_anchor){ return; }

  var widget_meta = eval('(' + script_anchor.getAttribute('widget_meta') + ')');

  var iframe = document.createElement('iframe');

  iframe.setAttribute('id', 'engage_curly');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('border', '0');
  iframe.setAttribute('style', 'border:none;')
  iframe.setAttribute('height', widget_meta.height+'px');
  iframe.setAttribute('width', widget_meta.width+'px');
  iframe.setAttribute('widget_meta', script_anchor.getAttribute('widget_meta'));

  var iframe_src = script_anchor.getAttribute('src').replace(/\.js$/, '');

  if(widget_meta.content) iframe_src += '/'+widget_meta.content;
  if(widget_meta.content_id) iframe_src += '/'+widget_meta.content_id;
  iframe_src += '?';
  var i = 0;
  for(m in widget_meta){
    if(i>0) iframe_src += '&';
    iframe_src += m+'='+widget_meta[m]
    i++;
  }
  iframe_src += '&parent_url='+window.location.href;

  iframe.setAttribute('src', iframe_src);

  script_anchor.parentNode.insertBefore(iframe, script_anchor);
  script_anchor.setAttribute('id', '');


})();
