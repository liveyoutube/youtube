var initialstring;
var laststring;
var auth;
var DATA;
$("document").ready(function(){
	$(".LIVEVIDEOSTATS").hide();
	$(".LIVECHANNELSTATS").hide();
	$("#cut").click(()=>{$(".LIVEVIDEOSTATS").hide();cleardata()});
	$("#cutchannel").click(()=>{$(".LIVECHANNELSTATS").hide();cleardata()});

 initialstring="https://www.googleapis.com/youtube/v3/search?part=snippet&&maxResults=15&q=";
 laststring="&key=AIzaSyC4zJwg96JC6YEYr9OQkmveR4ELgnqsZ5A";
 auth="https://www.googleapis.com/youtube/v3/video?part=statistics"
$("#sbtn").click(()=>{
	cleardata();
	getdata();
	document.getElementById("resultpage").style.display="block";
});

	function getdata(){
	$.get(initialstring+document.getElementById("string").value.replace(/ /g,"+")+laststring,function(data){
	for(var i=1;i<=15;i++){
			document.getElementById(i+".1").setAttribute("src",data.items[i-1].snippet.thumbnails.medium.url);
			document.getElementById(i+".2").innerHTML=data.items[i-1].snippet.title;
			//document.getElementById(i+".3").innerHTML=data.items[i-1].id.kind.replace("youtube#","");
			var type=data.items[i-1].id.kind.replace("youtube#","");
			$(".pageinfo").hide();

	}
	});
}


window.addEventListener("keypress",function(event){if(event.key=='Enter'){getdata();cleardata();	document.getElementById("resultpage").style.display="block";
}});










});



















var ids=[];
function addIDS(){
	$.get(initialstring+document.getElementById("string").value.replace(/ /g,"+")+laststring,(gyan)=>{
		DATA=gyan;
		for(var z=0;z<gyan.items.length;z++){
			if(gyan.items[z].id.kind.replace("youtube#","")=='video'){
				ids.push(gyan.items[z].id.videoId);
			}else{
				ids.push(gyan.items[z].id.channelId);

			}
		}
	getclicks();
	});
}



var VIDEO;
var CHANNEL;
var videoinitial="https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=";
var channelinitial="https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="


function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}



function cleardata(){
	ids=[];
	
	addIDS();


}