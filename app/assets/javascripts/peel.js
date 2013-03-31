var smartredfox = new Object();

//Where do you want the link to go to
smartredfox.link_url = escape('http://www.google.com');

//Should the link open in a new window
smartredfox.newWindow = true;

//What images do you want to show
smartredfox.small_image = '/img/small.png'; //must be 75px x 75px
smartredfox.big_image = '/img/large.png'; //must be 500px x 500px

//Leave all the rest alone
smartredfox.small_path = '/img/small.swf';
smartredfox.big_path = '/img/large.swf';

smartredfox.small_params = smartredfox.small_path + '?ico=' + smartredfox.small_image;
smartredfox.big_params = smartredfox.big_path + '?big=' + smartredfox.big_image + '&ad_url=' + smartredfox.link_url + '&newWindow=' + smartredfox.newWindow;

function sizeup987(){$('#jcornerBig').css('top','0px');$('#jcornerSmall').css('top','-1000px');}
function sizedown987(){$('#jcornerSmall').css('top','0px');$('#jcornerBig').css('top','-1000px');}
$(document).ready(function(){$('body').prepend('<div id="jcornerBig" style="position:absolute;width:650px;height:650px;z-index:9999;right:0px;top:0px;"><object style="outline:none;" type="application/x-shockwave-flash" data="'+ smartredfox.big_params +'" id="jcornerBigObject" width="650" height="650"><param name="allowScriptAccess" value="always"/><param name="movie" value="'+ smartredfox.big_params +'"/><param name="FlashVars" value="'+ smartredfox.big_params +'"/><param name="wmode" value="transparent"/></object></div>');
$('body').prepend('<div id="jcornerSmall" style="position:absolute;width:100px;height:100px;z-index:9999;right:0px;top:0px;"><object type="application/x-shockwave-flash" data="'+ smartredfox.small_params +'" id="jcornerSmallObject" width="100" height="100"><param name="FlashVars" value="?ico='+ smartredfox.small_params +'"/><param name="allowScriptAccess" value="always"/><param name="movie" value="'+ smartredfox.small_params +'"/><param name="wmode" value="transparent" /></object></div>');
setTimeout("$('#jcornerBig').css('top','-1000px');",1000);});