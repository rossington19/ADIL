var count = 0;
var hide = 1;
var hide2 = 1;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	noStroke();
}

function draw() {
	// background(55);
	count++;
	backgroundColor(count);
	textAlign(CENTER);
	if(count > 30){
		textSize(70);
		fill(255,255,255, hide*(count-30)*20);
		text("What a wonderful date", width/2, (0.9*height)/3);
	}
	if(count > 60){
		textSize(70);
		fill(255,255,255, hide*(count-60)*20);
		text("Now there is only one thing to do", width/2, (1.2*height)/3);
	}
	if(count > 90){
		textSize(150);
		fill(255,255,255, hide*(count-90)*20);
		text("Netflix and Chill...", width/2, (1.9*height)/3);
	}
	
	if(count > 100 && hide > 0){
		hide -= 0.04;
	}
	if(count > 160 && hide2 > 0){
		hide2 -= 0.04;
	}

	if(count > 130){
		textSize(70);
		fill(255,255,255, hide2*(count-130)*20);
		text("So yeah... I was going to buy Netflix", width/2, (1.0*height)/3);
		text("But then someone was a twat and beat me to it", width/2, (1.4*height)/3);
	}

	if(count > 150){
		textSize(20);
		fill(255,255,255, hide2*(count-150)*20);
		text("Twat", width/2, (2.3*height)/3);
	}
	


	if(count > 190){
		textSize(120);
		fill(255,255,255, (count-190)*20);
		text("Thank you for being amazing", width/2, (1.4*height)/3);
	}
}


function backgroundColor(count){
	var size = 10;
	var xNum = width/size;
	var yNum = height/size;
	// var myValue = millis()%5;
	myR = map(sin(count/23),-1,1,0.5,1);
	myG = map(cos(count/25),-1,1,0.5,1);
	myB = map(sin(count/30),-1,1,0.5,1);
	for(var x = 0; x < xNum; x++){
		for(var y = 0; y < yNum; y++){
			var r = map(x, 0, xNum, 160, 240);
			var g = map(y, 0, yNum, 120, 180);
			var b = map(x+y, 0, xNum+yNum, 200, 130);
			fill(r*myR, g*myG, b*myB);
			rect(x*size, y*size, size, size);
		}
	}
}

function mousePressed(){
	if (count > 150){
		count += 86;
		// window.location.href = 'https://www.netflix.com/gb/login';
	}
}