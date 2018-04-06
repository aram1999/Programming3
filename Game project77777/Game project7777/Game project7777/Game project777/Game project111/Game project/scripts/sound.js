$(document).ready(function(){
var soundDiv= $("<div/>").attr("id","sdiv").appendTo(game);
							
							var sn = $("<img/>").attr("src","images/soundon.jpg").attr("id","sn");
							
							var sf = $("<img/>").attr("src","images/soundoff.jpg").attr("id","sf");
							sn.appendTo(soundDiv);
								var clickSound = $("<audio/>").appendTo("body");
								clickSound[0].src= "sound/click.wav";
								$("div").click(function()
								{
									console.log($(this));
								});
								
								soundDiv.click(function(){
									clickSound[0].play();
									console.log("play");
									if($(this).children("img").attr("src")=="images/soundon.jpg")
									{
										console.log("sn");
										$(this).children("img").attr("src","images/soundoff.jpg");
									}
									else if($(this).children("img").attr("src")=="images/soundoff.jpg")
									{
										console.log("sf");
										$(this).children("img").attr("src","images/soundon.jpg");
									}
								});
		});