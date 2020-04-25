var count = 0;
var hide = 1;

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
		text("Welcome Esther To...", width/2, (0.9*height)/3);
	}
	if(count > 60){
		textSize(100);
		fill(255,255,255, hide*(count-60)*20);
		text("A Date in Lockdown", width/2, (1.4*height)/3);
	}
	if(count > 90){
		textSize(50);
		fill(255,255,255, hide*(count-90)*20);
		text("We have a lot to do so get ready...", width/2, (1.9*height)/3);
	}
	
	if(count > 90 && hide > 0){
		hide -= 0.02;
	}

	if(count > 150){
		textSize(100);
		fill(255,255,255, (count-150)*20);
		text("Please open your gift", width/2, (1.4*height)/3);
	}

	if(count > 150){
		textSize(40);
		fill(255,255,255, (count-150)*20);
		text("Click here to move on", width/2, (2.3*height)/3);
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
		window.location.href = 'https://rossington19.github.io/ADIL/quiz.html';
	}
}