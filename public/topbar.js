(function(){

  var body = document.getElementsByTagName('body')[0];
  body.style.margin = '50px 0 0 0';
  var div = document.createElement('div');
  div.setAttribute('style', 'height:50px;width: 100%; background-color: lightblue;font-weight: bold;position: absolute;top: 0;text-align:center;font-size:30px');
  div.innerHTML = 'Hello Christian';
  body.appendChild(div);
//widget code: <script type="text/javascript" src="http://localhost:3001/topbar.js"></script>
})();
