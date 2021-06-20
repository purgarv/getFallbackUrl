var s = window.location.href + ".json";
var text = httpGet(s);
var a = JSON.parse(text);

var link = a[0].data.children[0].data.secure_media.reddit_video.fallback_url;

navigator.clipboard.writeText(link);


function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
