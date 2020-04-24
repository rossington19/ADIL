class question {
	constructor(q, a1, a2, a3, cor){
		this.question = q;
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.correct = cor;
	}

	draw(){
		textSize(60);
		text(this.question, width/2, (0.5*height)/3);
		textSize(70);
		rectMode(CENTER);
		push();
			noFill();
			stroke(255);
			strokeWeight(10);
			rect(width/2, (1.2*height)/3-25, 800, 100, 20);
			rect(width/2, (1.8*height)/3-25, 800, 100, 20);
			rect(width/2, (2.4*height)/3-25, 800, 100, 20);
		pop();
		fill(255);
		text(this.a1, width/2, (1.2*height)/3);
		text(this.a2, width/2, (1.8*height)/3);
		text(this.a3, width/2, (2.4*height)/3);
	}

	

}

qNum = -1;
var myQuestions = new Array();
var correctAnswer = false;
var incorrectAnswer = false;
myQuestions.push( new question("What is the name of my car?", "Barty", "Berty", "Benny", 2) );
myQuestions.push( new question("What is the name of my future album?", "Scrapbook House", "Exposed Flesh", "Correct Rainbow", 1) );
myQuestions.push( new question("What road do I live on in Bristol?", "Braemar Ave", "Brighton Ave", "Brook Ave", 1) );
myQuestions.push( new question("What uni am I currently studying at?", "Cardiff", "Univeristy of Bistol", "UWE", 3) );
myQuestions.push( new question("What was the name of my bike tour?", "Small Dude Cycling Big", "Small Guy Long Ride", "Mini Man Going Far", 2) );
myQuestions.push( new question("Where did I live in France?", "Lyon", "Toulon", "Toulouse", 3) );
myQuestions.push( new question("Music Round! What song am I trying to play?", "Clocks", "Yellow", "Fix You", 1) );
myQuestions.push( new question("Music Round! What song do I know all the words to?", "Clocks", "The Day I Died", "Bad Guy", 2) );


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	noStroke();
}

function draw() {
	textAlign(CENTER);
	background(255,160,160);
	if (qNum === -1){
		q0();
	} else if (qNum < myQuestions.length) {
		myQuestions[qNum].draw();
	} else {
		finalPage();
	}

	push();
	if(correctAnswer){
		fill(100,230,100);
		strokeWeight(10);
		stroke(55);		
		rectMode(CENTER);
		rect(width/2,height/2, 600, 200, 20);
		noStroke();
		fill(255);
		textSize(120);
		text("Correct!", width/2,height/2+40);
	}
	if(incorrectAnswer){
		fill(230,100,100);
		strokeWeight(10);
		stroke(55);		
		rectMode(CENTER);
		rect(width/2,height/2, 800, 300, 20);
		noStroke();
		fill(255);
		textSize(120);
		text("Incorrect!", width/2,height/2-15);
		textSize(50);
		text("Maybe I should have swiped left", width/2,height/2+75);
	}
	pop();
}

function q0(){
	textSize(70);
	fill(255);
	text("Now we have cocktails", width/2, (0.9*height)/3);
	text("the first stop on our date is", width/2, (1.2*height)/3);
	textSize(90);
	text("A PUB QUIZ", width/2, (1.8*height)/3);
}


function finalPage(){
	textSize(70);
	fill(255);
	text("Well done for beating the quiz!", width/2, (0.9*height)/3);
	text("The next stop on our date is...", width/2, (1.2*height)/3);
	textSize(90);
	text("\"Live\" music!"  , width/2, (1.8*height)/3);
}

function mousePressed(){
	if(qNum === -1){
		qNum = 0;
	} else if (qNum < myQuestions.length) {
		var answer;
		if(mouseX > (width/2)-400 && mouseX < (width/2)+400 ){
			if (mouseY > (1.2*height)/3-75  && mouseY < (1.2*height)/3+25 ){
				answer = 1;
			}
			if (mouseY > (1.8*height)/3-75  && mouseY < (1.8*height)/3+25 ){
				answer = 2;
			}
			if (mouseY > (2.4*height)/3-75  && mouseY < (2.4*height)/3+25 ){
				answer = 3;
			}
		}
		if(answer === myQuestions[qNum].correct){
			correct();
		} else {
			incorrect();
		}
	} else {
		window.location.href = 'https://rossington19.github.io/ADIL/music.html';
	}

}

function correct(){
	correctAnswer = true;
	setTimeout(() => { 
		qNum++;
		correctAnswer = false;
	}, 1000);
	
}

function incorrect(){
	incorrectAnswer = true;
	setTimeout(() => { 
		incorrectAnswer = false;
	}, 2000);
}