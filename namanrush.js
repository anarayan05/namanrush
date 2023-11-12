//naman images in progress
//just delete image code if not good



var canvas = document.getElementById("gamecanvas");
var start = document.getElementById("start")
var ammo = document.getElementById("ammo");
var highscore = document.getElementById("highscore");
var d = canvas.getContext("2d");
var naman = document.getElementById("naman");
var collisionfact = 0;
var hit = 0;
var runs = 0;
var circlenum = 0;
var lives = document.getElementById("lives");
var bullet = 150;
var shooters = [];
var circlearray = [];
var addcircles = [];
var phasefactor = 0;
var lucknum;
var guessnum;
var shdir;
var opps = [];
canvas.width = window.innerWidth;
canvas.height = 425;


//the way to create a new circle object


//finish bullets make it not kill opps, make pass through map
function oppshooters(){
    var randint = Math.floor(Math.random()*circlearray.length)
    for(var i = 0;i<circlearray.length;i++){
        if(i==randint && collisionfact != 3){
            opps.push(new Circle(circlearray[i].cx,circlearray[i].cy,5,5,"black",Math.floor(Math.random()*4)+1))
        }
    }
}

function randdir(){
	var randy = Math.floor(Math.random()*3)+1
	var randint = Math.floor(Math.random()*circlearray.length)
	for(var i = 0;i<circlearray.length;i++){
		if(i == randint){
        	circlearray[i].dir = randy
		}
	}
}

function Circle(cx, cy, cradius, cd,color,dir){
    this.cx = cx;
    this.cy = cy;
    this.cradius = cradius;
    this.cd = cd;
    this.dir = dir;
    this.color = color;
    
    this.draw = function(){
        d.beginPath()
        d.arc(this.cx,this.cy,this.cradius,0,Math.PI*2,false)
        d.fillStyle = this.color
        d.fill()
    }
    this.draw()
        
}



//creation of 15 'obstacle' circles, randomized stats

function startgame(phase){
    switch(phase){
        case 0:
            document.removeEventListener("keydown",fullstart);
            for(var i=0;i<10;i++){   // circlearray[0]
                var cx;
                var cy;
                var cd = (Math.random()*3)+1;
                var cradius = Math.random()*40+10; 
                var color = "blue" ;
                var dir = (Math.floor(Math.random()*4)+1);


                if(dir == 1){
                    cx = (Math.random()*5)-10;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 2){
                    cx = (Math.random()*5)+canvas.width;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 3){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)-10;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 4){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)+425;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                circlenum++
            }
			changedir = setInterval(randdir,1500)
            break;
        case 1:
            document.removeEventListener("keydown",fullstart);
            for(var i=0;i<10;i++){   // circlearray[0]
                var cx;
                var cy;
                var cd = Math.random()*5;
                var cradius = Math.random()*40+10; 
                var color = "purple";
                var dir = (Math.floor(Math.random()*4)+1);
                if(dir == 1){
                    cx = (Math.random()*5)-10;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 2){
                    cx = (Math.random()*5)+canvas.width;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 3){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)-10;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 4){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)+425;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                circlenum++
            }
            break;
        //in this phase the other circles will shoot
        case 2:
            document.removeEventListener("keydown",fullstart);
            for(var i=0;i<10;i++){   // circlearray[0]
                var cx;
                var cy;
                var cd = Math.random()*5;
                var cradius = Math.random()*40+10; 
                var color = "black" ;
                var dir = (Math.floor(Math.random()*4)+1);
                // circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                if(dir == 1){
                    cx = (Math.random()*5)-10;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 2){
                    cx = (Math.random()*5)+canvas.width;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                else if(dir == 3){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)-10;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                else if(dir == 4){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)+425;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                circlenum++
            }
            oppshot = setInterval(oppshooters,1000);
            break;
        case 3:
            document.removeEventListener("keydown",fullstart);
            for(var i=0;i<15;i++){   // circlearray[0]
                var cx;
                var cy;
                var cd = 5
                var cradius = Math.random()*20+10; 
                var color = "purple" ;
                var dir = (Math.floor(Math.random()*4)+1);
                if(dir == 1){
                    cx = (Math.random()*5)-10;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                }
                else if(dir == 2){
                    cx = (Math.random()*5)+canvas.width;
                    cy = (Math.random()*325)+50
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                else if(dir == 3){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)-10;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                else if(dir == 4){
                    cx = Math.random()*canvas.width;
                    cy = (Math.random()*5)+425;
                    circlearray.push(new Circle(cx,cy,cradius,cd,color,dir));
                    lucknum = Math.random()*10;
                }
                circlenum++
            }
            oppshot = setInterval(oppshooters,1000);
            break;
    }
    
}


//
user_circle = new Circle(600,200,30,3,"green",0)
d.drawImage(naman,600,200)
//

//functions for circles to move, and make proper animation

function offset(my_circle){
    d.beginPath();
    d.arc(my_circle.cx,my_circle.cy,my_circle.cradius,0,Math.PI*2,false);
    d.fillStyle = my_circle.color;
    d.fill();
}
function clearcircle(my_circle){
    d.beginPath();
    d.arc(my_circle.cx,my_circle.cy,my_circle.cradius+1,0,Math.PI*2,false);
    d.fillStyle = "white";
    d.fill();
}



function rightmove(my_circle){
    
    my_circle.cx+=my_circle.cd;
    if(my_circle.cradius != 5){
        if(my_circle.cx>canvas.width-my_circle.cradius){
            my_circle.dir = 2
            
        }
    }
    offset(my_circle);

} 
function leftmove(my_circle){

    
    my_circle.cx-=my_circle.cd
    if(my_circle.cradius != 5){
        if(my_circle.cx<0+ my_circle.cradius){
            my_circle.dir = 1;
        }
    }
    offset(my_circle);
} 

function upmove(my_circle){
    
    my_circle.cy+=my_circle.cd
    if(my_circle.cradius != 5){
        if(my_circle.cy>canvas.height-my_circle.cradius){
            my_circle.dir = 4;
        }
    }
    offset(my_circle);
}

function downmove(my_circle){
    
    my_circle.cy-=my_circle.cd
    if(my_circle.cradius != 5){
        if(my_circle.cy<0+my_circle.cradius){
            my_circle.dir = 3;
        }
    }
    offset(my_circle);
}

//functions for bullets to move

function movegame(){

    for(var i=0;i<circlearray.length;i++){
        drawgame(circlearray[i]);
        collision(circlearray[i])
    }
    if(hit == circlenum){
        clearbullets(opps.length-1,shooters.length-1)
        circlenum = 0;
        phasefactor++
        user_circle.dir = 0;
        clearcircle(user_circle);
        user_circle.cx = 600;
        user_circle.cy = 200;
        document.removeEventListener('keydown',controller)
        document.removeEventListener('keydown',shcontroller)
        document.addEventListener("keydown",fullstart);
        start.style.opacity = 1;
        start.innerHTML = "Press Space to Advance";
    }
    if(phasefactor<3){
        drawgame(user_circle)
    }
    else if(phasefactor==3){
        drawgame(user_circle)
        start.innerHTML = "Phase 4: Final Battle"
    }
    else{
        clearInterval(oppshot)
        endgame(opps.length-1,shooters.length-1, "YOU WON! Press Space to Restart")
    }
}
//get all bullets moving

function activateshot(){
    for(var i=0;i<shooters.length;i++){
        drawgame(shooters[i])
        bulletcoll(shooters[i])
    }
}
function activateopps(){
    for(var i = 0;i<opps.length;i++){
        drawgame(opps[i])
        oppcoll(opps[i])
    }
}
//circle gets shot and disappears

function bulletcoll(bulletcircle){
    for(var a = 0; a<circlearray.length;a++)
    {
        var difx = bulletcircle.cx - circlearray[a].cx
        var dify = bulletcircle.cy - circlearray[a].cy
        var distance = Math.sqrt(difx * difx + dify * dify)
        var crsum = bulletcircle.cradius + circlearray[a].cradius;
        if(distance < crsum && bulletcircle.color != "white"){
            hit++;
			p = shooters.indexOf(bulletcircle)
            clearcircle(circlearray[a])
            delete circlearray[a];
            circlearray.splice(a,1);
            clearcircle(bulletcircle);
			delete shooters[p];
			shooters.splice(p,1)
        }
    }

}

//when opp hits user circle

function oppcoll(bulletcircle){
    var difx = bulletcircle.cx - user_circle.cx
        var dify = bulletcircle.cy - user_circle.cy
        var distance = Math.sqrt(difx * difx + dify * dify)
        var crsum = bulletcircle.cradius + user_circle.cradius;
        if(distance < crsum && bulletcircle.color != "white"){
            collisionfact++
            oppdir(bulletcircle)
            bulletcircle.color = "white";
        }
}

//oppositedir
function oppdir(obj){
    switch(obj.dir){
        case 0:
            obj.dir = 0;
        break;
        
        case 1:
            obj.dir = 2;
        break;

        case 2:
            obj.dir = 1;
        break;

        case 3:
            obj.dir = 4;
        break;

        case 4:
            obj.dir = 3;
        break;
    }
}

//make circles bounce after collision, do color change

function collision(my_circle){
    var difx = my_circle.cx - user_circle.cx
    var dify = my_circle.cy - user_circle.cy
    var distance = Math.sqrt(difx * difx + dify * dify)
    var crsum = my_circle.cradius + user_circle.cradius;
    if(distance < crsum){
        collisionfact++
        if(user_circle.dir == 1){
            my_circle.dir = 1;
            user_circle.dir = 2;
        }
        else if(user_circle.dir == 2){
            my_circle.dir = 2;
            user_circle.dir = 1;
        }
        else if(user_circle.dir == 3){
            my_circle.dir = 3;
            user_circle.dir = 4;
        }
        else if(user_circle.dir == 0){
            my_circle.dir = my_circle.dir;
            user_circle.dir = my_circle.dir;
        }
        else{
            my_circle.dir = 4;
            user_circle.dir = 3;
        }
    }
    else{
        collisionfact += 0;
    }
    switch(collisionfact){
        case 0:
            lives.innerHTML = "Lives: 3";
            break;
        case 1:
            lives.innerHTML = "Lives: 2";
            break;
        case 2:
            lives.innerHTML = "Lives: 1";
            break;
        case 3:
            endgame(opps.length-1,shooters.length-1,"Game Over, Press Space to Restart");
            break;
    }
    
}

//clearing bullets between phases

function clearbullets(oppnum,shnum){
    while(oppnum>0){
        clearcircle(opps[oppnum])
        delete opps[oppnum]
        oppnum = oppnum-1
    }
    opps = []
    while(shnum>0){
        clearcircle(shooters[shnum]);
        delete shooters[shnum];
        shnum = shnum-1
    }
    shooters = []
}

//endgame (stopping everything)

function endgame(oppnum, shnum, message){
    lives.innerHTML = "Lives: 0";
    start.innerHTML = message; 
    start.style.opacity = "1"
    document.addEventListener('keydown',fullstart)
    clearInterval(setgame);
    clearInterval(asint);
    clearInterval(aoint);
	clearInterval(changedir);
    if(phasefactor == 2 || phasefactor ==3){
        clearInterval(oppshot)
    }
	phasefactor = 0
    document.removeEventListener('keydown',controller)
    document.removeEventListener('keydown',shcontroller)
    clearbullets(oppnum,shnum);
}

//circles to move

function drawgame(my_circle) {

    switch(my_circle.dir) {
        case 0:
            offset(my_circle);
            break;
        case 1:
            clearcircle(my_circle);
            rightmove(my_circle);
            break;
        case 2:
            clearcircle(my_circle);
            leftmove(my_circle);
            
            break;
        case 3:
            clearcircle(my_circle);
            upmove(my_circle);
            
            break;
        case 4:
            clearcircle(my_circle);
            downmove(my_circle);
            break;
    }

}

//get bullets to move around without bouncing

//all controls for movement



function controller(e){
    switch(e.keyCode){
        case 32:
            user_circle.dir = 0;
            break;
        case 39: //right arrow
            user_circle.dir = 1;
            break;
        case 37: //left arrow
            user_circle.dir = 2;
            break;
        case 38: //up arrow
            user_circle.dir = 4;
            break;
        case 40:  //down arrow
            user_circle.dir = 3;
            break;
    }
};


//when bullets run out (game over)
function empty(){
    if(bullet == 0){
        document.removeEventListener('keydown',shcontroller);
        endgame(opps.length, shooters.length,"Game Over, Press Space to Restart");
    }
    ammo.innerHTML = "Bullets: " + bullet;
}


//all controls for shooting
function shcontroller(e){
    switch(e.keyCode){
        case 87: //W
            bullet--
            empty();
            shooters.push(new Circle(user_circle.cx,user_circle.cy,5,3,"red",4));
            break;
        case 65: //A
            bullet--
            empty();
            shooters.push(new Circle(user_circle.cx,user_circle.cy,5,3,"red",2));
            break;
        case 83: //S
            bullet--
            empty();
            shooters.push(new Circle(user_circle.cx,user_circle.cy,5,3,"red",3));
            break;
        case 68: //D
            bullet--
            empty();
            shooters.push(new Circle(user_circle.cx,user_circle.cy,5,3,"red",1));
            break;
    }
}

//Try to add spacebar to prompt game VV: DONE, silly mistake btw

document.addEventListener("keydown",fullstart);

//startgame
function fullstart(e){
    if(e.keyCode==32){
        if(start.style.opacity = 1 && start.innerHTML == "Press Space to Start"){
            start.style.opacity = 0;
            lives.style.opacity = "1"
            ammo.style.opacity = "1"
            document.addEventListener('keydown', controller);
            document.addEventListener('keydown',shcontroller)
            startgame(phasefactor);
            //setting movement for circles
            setgame = setInterval(movegame,30);
            //checking for bullets and setting movement
            asint = setInterval(activateshot,5);
            aoint = setInterval(activateopps,5);
        }
        else if(start.style.opacity = 1 && start.innerHTML == "Press Space to Advance"){
            start.style.opacity = 0;
            document.addEventListener('keydown', controller);
            document.addEventListener('keydown',shcontroller);
            startgame(phasefactor);
            hit = 0;
            for(var i=0;i<circlearray.length;i++){
                drawgame(circlearray[i]);
                collision(circlearray[i]);
            }
        }
        else if(start.style.opacity = 1 && start.innerHTML == "Phase 4: Final Battle"){
            start.style.opacity = 0;
            document.addEventListener('keydown', controller);
            if(bullet>0){
                document.addEventListener('keydown',shcontroller)
            }
            clearInterval(oppshot)
            startgame(phasefactor);
            hit = 0;
            for(var i=0;i<circlearray.length;i++){
                drawgame(circlearray[i]);
                collision(circlearray[i]);
            }
        }
        else if(start.style.opacity = 1 && start.innerHTML == "Game Over, Press Space to Restart" || start.innerHTML == "YOU WON! Press Space to Restart"){
            circlenum = 0;
            bullet = 150;
            ammo.innerHTML = "Bullets: " + bullet;
            lives.innerHTML
            collisionfact = 0;
            hit=0
            start.style.opacity = "1";
            document.removeEventListener('keydown',controller)
            document.removeEventListener('keydown',shcontroller)
            clearcircle(user_circle);
            user_circle = new Circle(600,200,30,3,"green",0)
		//clearing circles after game over, not worth it to make function
            for(var i=0;i<circlearray.length;i++){
                clearcircle(circlearray[i])
                delete circlearray[i];
            }
            circlearray = []
            start.innerHTML = "Press Space to Start"
        }
    }

}
