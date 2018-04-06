function Stones() {
    for (a = 0; a < 118; ++a) {
        this.stoneDivs = [];
        this.stoneDivs.push($("<div/>").css({
            "width": "49px",
            "height": "24px"
        }).attr("id", "stones" + a).attr("class", "stones").css({
                                                                    "background-image": "url('images/stone.png')",
                                                                    "background-size": "cover"})
        .appendTo("#div0"));
        //var stone = $("<img/>").attr("src", "images/stone.png").css({
            //"width": "49px",
            //"height": "24px"
        //}).appendTo(this.stoneDivs);

    }
}

function Metal() {
    for (b = 0; b < 4; ++b) {
        this.metalDivs = [];
        this.metalDivs.push($("<div/>").css({
            "width": "49px",
            "height": "24px"
        }).attr("id", "metal" + b).attr("class", "metal").css({
                                                                    "background-image": "url('images/metal.png')",
                                                                    "background-size": "cover"})
        .appendTo("#div0"));
        ///var metal = $("<img/>").attr("src", "images/metal.png").css({
           // "width": "49px",
           // "height": "24px"
       // }).appendTo(this.metalDivs);

    }
}

function Walls() {
    for (c = 0; c < 4; ++c) {
        this.gameWalls = [];
        this.gameWalls.push($("<div/>").attr("id", "walls" + c).attr("class", "walls").appendTo("#div0"));

    }


}

function Player(l, t, k, name) {
    var that = this;
    this.health = 3;
    this.posl= l;
	this.post=t;
    this.div = $("<div/>").attr("id", name).appendTo("body");
    this.div.css({
        "position": "absolute",
        "left": "" + this.posl + "px",
        "top": "" + this.post + "px",
		"height":"38px",
	"width":"38px",
	"background": 'url("images/tankform1.png") 100% 100% no-repeat',
	"background-image": 'url("images/tankform1.png")',
	"background-size": "cover"
    });

    this.currentDir;
    this.directions = {};
    this.speedU = 4;
	this.speedD = 4;
	this.speedL = 4;
	this.speedR = 4;
	this.shoot;
    this.bullet = $("<div/>").attr("class", "bullet").css({
    "width": "5px",
    "height": "10px",
    "background-image": 'url("images/shooting.png")',
    "background-size": "219px 202px",
    "background-position": "88px 170px"
});

    this.up= true;
    this.down= true;
    this.left=true;
    this.right=true;


    
	
    this.reborn = function() {


    };
    this.charMovement = function(event) {
    //    console.log(that);
       
        that.currentDir = event.which;
        that.directions[event.which] = true;
        //console.log(that.directions)

    };
   this.stop = function(event) {
        delete that.directions[event.which];
        //console.log(that.directions)
    };
    this.move1 = function() {
        //console.log(this);
        for (var i in that.directions) {
           // console.log(that);
            if (that.div.position().left > 0 && i == 37 && that.speedL==4) {
                that.speedR = 4;
                that.speedU = 4;
                that.speedD = 4;
                that.div.css("left", (that.div.position().left - that.speedL) + "px");
				that.div.css("background-image", 'url("images/tankform1left.png")');
				//that.directions=37;
            }
            if (that.div.position().left < ($("#div0").width() - that.div.width()) && i == 39 && that.speedR==4) {
                that.speedU = 4;
                that.speedD = 4;
                that.speedL = 4;

                that.div.css("left", (that.div.position().left + that.speedR) + "px");
				that.div.css("background-image", 'url("images/tankform1right.png")');
                //that.directions=39;
            }
            if (that.div.position().top > 0 && i == 38 && that.speedU == 4) {
                that.speedR = 4;
                that.speedD = 4;
                that.speedL = 4;
                that.div.css("top", (that.div.position().top - that.speedU) + "px");
				that.div.css("background-image", 'url("images/tankform1.png")');
                //that.directions=38;
            }
            if (that.div.position().top < ($("#div0").width() - that.div.height()) && i == 40 && that.speedD == 4) {
                that.speedR = 4;
                that.speedU = 4;
                that.speedL = 4;
                that.div.css("top", (that.div.position().top + that.speedD) + "px");
				that.div.css("background-image", 'url("images/tankform1back.png")');
                //that.directions=40;
            }
        }
    };
this.collision = function(arr) {
        //console.log(arr);
    	for(var i = 0; i < arr.length; i++){

            //console.log(arr.eq(0).position().left);


        		that.STONE_HOR_CENTER = arr.eq(i).position().left + arr.eq(i).width()/2;
    	        that.STONE_VER_CENTER = arr.eq(i).position().top + arr.eq(i).height()/2; 
        		that.TANK_HOR_CENTER = that.div.position().left + that.div.width()/2;
    	        that.TANK_VER_CENTER = that.div.position().top + that.div.height()/2;
    			
    			that.WIDTH_DIFFERENCE = arr.eq(i).width()/2 + that.div.width()/2;
    			that.HEIGHT_DIFFERENCE = arr.eq(i).height()/2 + that.div.height()/2;
    			
    			that.STONE_X= arr.eq(i).position().left;
    			that.STONE_Y= arr.eq(i).position().top;
    			that.TANK_X= that.div.position().left;
    	        that.TANK_Y = that.div.position().top;
    			
    	        that.STONE_HEIGHT = arr.eq(i).height();
    	        that.TANK_HEIGHT = that.div.height();
    	        that.STONE_WIDTH = arr.eq(i).width();
    	        that.TANK_WIDTH = that.div.width();
				
                //console.log(that.directions);
                //console.log(that.currentDir);

				if (Math.abs(that.TANK_HOR_CENTER - that.STONE_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&  
                    Math.abs(that.TANK_VER_CENTER - that.STONE_VER_CENTER) <= that.HEIGHT_DIFFERENCE) 
                {/*
    				
    				console.log(that.TANK_HOR_CENTER - that.STONE_HOR_CENTER)
    				console.log(that.WIDTH_DIFFERENCE);
    				console.log(that.TANK_VER_CENTER - that.STONE_VER_CENTER)
    				console.log(that.HEIGHT_DIFFERENCE);
				*/console.log("Done!")
                            if(that.currentDir==37){
                                    that.speedL = 0;

                                    

                                    // that.up= true;
                                    // that.down= true;
                                    // that.left=false;
                                    // that.right=true;
                                    that.div.css("left",arr.eq(i).position().left + arr.eq(i).width() + 1);
                                    //break;
                            }
                            

                            else if(that.currentDir==39){//right3
                                    that.speedR = 0;
                                    //console.log("right",that.speedU,that.speedD,that.speedL,that.speedR);
                                    that.div.css("left",arr.eq(i).position().left - that.div.width() - 1);

                                    // that.up= true;
                                    // that.down= true;
                                    // that.left=true;
                                    // that.right=false;
                                    //break;

                            }
                            

                            else if(that.currentDir==38){//top2
                                    that.speedU = 0;
                                    that.div.css("top",arr.eq(i).position().top + arr.eq(i).height() + 1);
                                    //console.log("top",that.speedU,that.speedD,that.speedL,that.speedR);
                                    

                                    // that.up= true;
                                    // that.down= true;
                                    // that.left=false;
                                    // that.right=true;
                                   // break;
                            }
                            

                            else if(that.currentDir==40){//bottom4
                                    that.speedD = 0;
                                    that.div.css("bottom",arr.eq(i).position().top - that.div.height() - 1);
                                    //console.log("top",that.speedU,that.speedD,that.speedL,that.speedR);
                                    

                                    // that.up= true;
                                    // that.down= false;
                                    // that.left=true;
                                    // that.right=true;
                                   //break;
                            }
                            
                           

				
                    } 
                    }
                 };
				 /*this.shoot= function(){
				that.shoot = event.which;
				if(this.shoot==17){
					that.bullet.appendTo("body");
						if(that.currentDir==37){
							
						
						}
						else if(that.currentDir==39){
						
						
						}
						else if(that.currentDir==38){
							
						
						}
						else if(that.currentDir==40){
						
						
						}
				}
		
	};*/
}

			
    	
        
   


function Enemy(l, t, k , n, idname) {
    var that = this;
    this.health = 1;
    this.currentDirEn="down";
    this.posl = l;
    this.post = t;
    this.k = k;
    this.n = n;
    this.map = ("#div0");
    this.d = $("<div/>").attr("id", idname).attr("class", "enemies").appendTo(this.map);
    this.stones = $(".stones");
    this.dc = $(".enemies");
    this.metal = $(".metal");
    this.walls = $(".walls");
    ;

    this.move = function() {

        that.post += that.k;
        that.posl += that.n;

        that.d.css({
            "position": "absolute",
            "left": "" + that.posl + "px",
            "top": "" + (that.post - 10) + "px"
        });
      
    };
    this.collision = function(arr) {
        
        for(var i = 0; i < arr.length; i++){

            


                that.STONE_HOR_CENTER = arr.eq(i).position().left + arr.eq(i).width()/2;
                that.STONE_VER_CENTER = arr.eq(i).position().top + arr.eq(i).height()/2; 
                that.EN_HOR_CENTER = that.d.position().left + that.d.width()/2;
                that.EN_VER_CENTER = that.d.position().top + that.d.height()/2;
                
                that.WIDTH_DIFFERENCE = arr.eq(i).width()/2 + that.d.width()/2;
                that.HEIGHT_DIFFERENCE = arr.eq(i).height()/2 + that.d.height()/2;
                
                that.STONE_X= arr.eq(i).position().left;
                that.STONE_Y= arr.eq(i).position().top;
                that.EN_X= that.d.position().left;
                that.EN_Y = that.d.position().top;
                
                that.STONE_HEIGHT = arr.eq(i).height();
                that.EN_HEIGHT = that.d.height();
                that.STONE_WIDTH = arr.eq(i).width();
                that.EN_WIDTH = that.d.width();
                
                
				
				
				
                if (Math.abs(that.EN_HOR_CENTER - that.STONE_HOR_CENTER) <= that.WIDTH_DIFFERENCE +10 &&  
                    Math.abs(that.EN_VER_CENTER - that.STONE_VER_CENTER) <= that.HEIGHT_DIFFERENCE +10 ) 
                {
                    console.log("Done!")
                    
						
					
                
                            if(that.currentDirEn=="left"){
                                
                                that.n=0;
                                that.k=5;
                                //that.post += that.k;
                                //that.posl += that.n;
                                console.log("Gooood");
                                    that.d.css({
                                                    "background-image": 'url("images/enemyback.png")'
                                                });
                                   // break;
								   if (Math.abs(that.EN_HOR_CENTER - that.STONE_HOR_CENTER) <= that.WIDTH_DIFFERENCE +10 &&  
													Math.abs(that.EN_VER_CENTER - that.STONE_VER_CENTER) <= that.HEIGHT_DIFFERENCE +10) 
													{
														console.log(that.d.position().down);that.currentDirEn="down";
													}
                            }
                            

                            else if(that.currentDirEn=="right"){//right3
                                
                                that.n=0;
                                that.k=5;
                                //that.post += that.k;
                                //that.posl += that.n;
                                    that.d.css({
                                                     "background-image": 'url("images/enemyback.png")'
                                                });
                                    //break;
									if (Math.abs(that.EN_HOR_CENTER - that.STONE_HOR_CENTER) <= that.WIDTH_DIFFERENCE +6 &&  
													Math.abs(that.EN_VER_CENTER - that.STONE_VER_CENTER) <= that.HEIGHT_DIFFERENCE +6) 
													{
														console.log(that.d.position().down);that.currentDirEn="down";
													}
                                    

                            }
                            

                            else if(that.currentDirEn=="up"){//top2
                               
                                    that.d.css({
                                                    "position": "absolute",
                                                    "left": "" + that.posl + "px",
                                                    "top": "" + that.post + "px"
                                                });
                            }
                            

                            else if(that.currentDirEn=="down"){//bottom4
                                
                                that.n=-5;
                                that.k=0;
                                //that.post += that.k;
                                //that.posl -= that.n;
                                
														that.d.css({
																 //"position": "absolute",
																//"left": "" + that.posl + "px",
															   "top": "" + (that.post - 10) + "px",
																"background-image": 'url("images/enemyleft.png")'
															});
												if (Math.abs(that.EN_HOR_CENTER - that.STONE_HOR_CENTER) <= that.WIDTH_DIFFERENCE +5 &&  
													Math.abs(that.EN_VER_CENTER - that.STONE_VER_CENTER) <= that.HEIGHT_DIFFERENCE +5) 
													{
																
														console.log(that.d.position().left);that.currentDirEn="left";
													}
                                
                            }
                            
                           

                /**/
                    } 
                    
					}
                 };
				/* this.ChCurDir=function(){
					if
				 
				 };*/

}
