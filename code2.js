function getclicks(){

	$("#1").click(()=>{
		viewstats("1",DATA.items[0].id.kind.replace("youtube#",""));
	});
	$("#2").click(()=>{
		viewstats("2",DATA.items[1].id.kind.replace("youtube#",""));
	});
	$("#3").click(()=>{
		viewstats("3",DATA.items[2].id.kind.replace("youtube#",""));
	});
	$("#4").click(()=>{
		viewstats("4",DATA.items[3].id.kind.replace("youtube#",""));
	});
	$("#5").click(()=>{
		viewstats("5",DATA.items[4].id.kind.replace("youtube#",""));
	});
	$("#6").click(()=>{
		viewstats("6",DATA.items[5].id.kind.replace("youtube#",""));
	});
	$("#7").click(()=>{
		viewstats("7",DATA.items[6].id.kind.replace("youtube#",""));
	});
	$("#8").click(()=>{
		viewstats("8",DATA.items[7].id.kind.replace("youtube#",""));
	});
	$("#9").click(()=>{
		viewstats("9",DATA.items[8].id.kind.replace("youtube#",""));
	});
	$("#10").click(()=>{
		viewstats("10",DATA.items[9].id.kind.replace("youtube#",""));
	});
	$("#11").click(()=>{
		viewstats("11",DATA.items[10].id.kind.replace("youtube#",""));
	});
	$("#12").click(()=>{
		viewstats("12",DATA.items[11].id.kind.replace("youtube#",""));
	});
	$("#13").click(()=>{
		viewstats("13",DATA.items[12].id.kind.replace("youtube#",""));
	});
	$("#14").click(()=>{
		viewstats("14",DATA.items[13].id.kind.replace("youtube#",""));
	});
	$("#15").click(()=>{
		viewstats("15",DATA.items[14].id.kind.replace("youtube#",""));
	});




}


function viewstats(id,type){
	if(type=='video'){
		$.get(videoinitial+ids[id-1]+laststring,function(videodata){
			$(".LIVEVIDEOSTATS").show();
			showvideolive(videodata,id);
			document.getElementById("licon").style.display="block";
			document.getElementById("disicon").style.display="block";
			
			// VIDEO=setInterval(()=>{$.get(videoinitial+ids[id-1]+laststring,function(videodata){showvideolive(videodata,id);});
			// },100);
		});
	}
	else if(type=='channel'){
		$.get(channelinitial+ids[id-1]+laststring,function(channeldata){
			$(".LIVECHANNELSTATS").show();
			showchannellive(channeldata,id);
			// VIDEO=setInterval(()=>{$.get(channelinitial+ids[id-1]+laststring,function(channeldata){showchannellive(channeldata,id);});
			// },100);



		});

	}
	else if(type=='playlist'){
		window.alert("Playlists are yet to be supported...");
	}
}






function showvideolive(vdata,id){
document.getElementById("id_videothumbnail").setAttribute("src",vdata.items[0].snippet.thumbnails.medium.url);
document.getElementById("viewcount").innerHTML=numberWithCommas(vdata.items[0].statistics.viewCount)+" views";
document.getElementById("id_videotitle").innerHTML=vdata.items[0].snippet.title;
document.getElementById("likes").innerHTML=numberWithCommas(vdata.items[0].statistics.likeCount);
document.getElementById("dislikes").innerHTML=numberWithCommas(vdata.items[0].statistics.dislikeCount);
document.getElementById("comments").innerHTML="Comments "+numberWithCommas(vdata.items[0].statistics.commentCount);

if(document.getElementsByClassName("LIVEVIDEOSTATS")[0].style.display==""){
	$.get(videoinitial+ids[id-1]+laststring,function(vdata){showvideolive(vdata,id);});
}
else{
	return;
}

}

var g=0;
function showchannellive(cdata,id){
	g++;
document.getElementById("id_channelthumbnail").setAttribute("src",cdata.items[0].snippet.thumbnails.medium.url);
document.getElementById("channelname").innerHTML=cdata.items[0].snippet.title;
document.getElementById("subscribers").innerHTML=numberWithCommas(cdata.items[0].statistics.subscriberCount);
document.getElementById("tviews").innerHTML="Total Views "+numberWithCommas(cdata.items[0].statistics.viewCount);
document.getElementById("uploads").innerHTML="Total Uploads "+numberWithCommas(cdata.items[0].statistics.videoCount);
//document.getElementById("debug").innerHTML=g;
if(document.getElementsByClassName("LIVECHANNELSTATS")[0].style.display==""){
	$.get(channelinitial+ids[id-1]+laststring,function(cdata){showchannellive(cdata,id);});
}
else{
	return;
}

}
function change(){
document.getElementsByTagName("body")
}