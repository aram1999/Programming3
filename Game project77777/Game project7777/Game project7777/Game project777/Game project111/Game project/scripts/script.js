$(document).ready(function(){
var main=$("<div/>").attr("id","m").appendTo("body");
var menu=$("<img/>").attr("src","images/menu.jpg").appendTo(main);
var p1=$("<div/>").attr("id","p1").appendTo(main);
var p2=$("<div/>").attr("id","p2").appendTo(main);
var p3=$("<div/>").attr("id","p3").appendTo(main);
var pointer=$("<div/>").attr("id","pointer").appendTo(main);
var t=$("<img/>").attr("src","images/tank_yellow.png").attr("id","t1").appendTo(pointer);

$('html').keydown(charMovement);
function charMovement(e){
	if(e.which===40)
	{
		console.log(40);
		$("#pointer").css("top","505px");
			
	}
	if(e.which===38)
	{
		console.log(38);
		$("#pointer").css("top","440px");
		
	}
	if(e.which===13){
		if($("#pointer").css("top","505px")){
					console.log("done");
					$("body").empty();
						var imageDivs=[];
						var firstPhase=["map.png","soundon.jpg","tankform1.png","stone.png","metal.png"];
						
						for(var i=0;i<2;++i){
							imageDivs.push($("<div/>").attr("id","div"+i).append($("<img/>").attr("id","img"+i)).appendTo("body"));
							console.log("in body");
						}
						for(var i in $("img")){
							$("img").eq(i).attr("src","images/"+firstPhase[i]);
							console.log("in divs");
						}
								$("div").css({
									'display':'inline-block','margin-left':'20%'
								});
								var clickSound = $("<audio/>").appendTo("body");
								clickSound[0].src= "sound/[na_sms]_Tanchiki-Battle_City.mp3";
								
								$("div").click(function(){
									//console.log($(this));
								});//clickSound[0].play();
								imageDivs[1].click(function(){
									
						
							if($(this).children("img").attr("src")=="images/soundon.jpg")
							{
							
								$(this).children("img").attr("src","images/soundoff.jpg");
								clickSound[0].pause();
							}
							else
							{
								
								$(this).children("img").attr("src","images/soundon.jpg");
								clickSound[0].play();
							}
							});
								
								/*	for(var i=4;i<5;++i){
										
										imageDivs.push($("<div/>").append($("<img/>").attr("class","img"+i)).appendTo("body"));
										console.log("in body1");
									}
								
								for(var i in $("img")){
									$("img").eq(i).attr("src","images/"+firstPhase[3]);
									console.log("in divs1");
								}*/
							};
	}
	$("html").off("keydown");
	window.stones = new Stones();
	var metal = new Metal();
	var walls = new Walls();
	var enemy1 = new Enemy(1170,100,5,0,"enemy1");
	setInterval(function(){
		enemy1.move();
		enemy1.collision($(".stones"));
		enemy1.collision($(".metal"));
		enemy1.collision($(".walls"));
	},50);
	
	
	var player = new Player(650,750,4,"tank");
	$('html').keyup(player.stop).keydown(player.charMovement);
	
	setInterval(function(){
		player.move1();
		//player.shoot();
		player.collision($(".stones"));
		player.collision($(".metal"));
		player.collision($(".walls"));
		//player.collision();
		
	},50);
	
}
								

});



