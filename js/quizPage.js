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
		textStyle(BOLD);
		text(this.question, width/2, (0.5*height)/3);
		textStyle(NORMAL);
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
myQuestions.push( new question("What uni am I currently studying at?", "Cardiff", "Univeristy of Bistol", "UWE", 3) );
myQuestions.push( new question("Where did I live in France?", "Lyon", "Toulon", "Toulouse", 3) );
myQuestions.push( new question("What road do I live on in Bristol?", "Braemar Ave", "Brighton Ave", "Brook Ave", 1) );
myQuestions.push( new question("What was the name of my bike tour?", "Small Dude Cycling Big", "Small Guy Long Ride", "Mini Man Going Far", 2) );

myQuestions.push( new question("What are the first 3 colours of the rainbow?", "Red, Orange, Yellow", "Red, Yellow, Pink", "Red, Yellow, Green", 1) );
myQuestions.push( new question("What is the name of my future album?", "Scrapbook House", "Exposed Flesh", "Correct Rainbow", 1) );
myQuestions.push( new question("What insult did you use on me on the 22nd of April?", "Little Bitch", "Fat Turd", "Knob Head", 1) );
myQuestions.push( new question("What colour are my eyes?", "Poopy Brown", "Whiskey", "Black - Like my soul", 2) );
myQuestions.push( new question("How many kisses did I send you in my first message?", "1", "2", "3", 2) );
myQuestions.push( new question("What do I always call you in Spanish?", "Aburrida", "Guapo", "Bonita", 3) );

myQuestions.push( new question("Music Round! What song do I know all the words to?", "Clocks", "The Day I Died", "Bad Guy", 2) );
myQuestions.push( new question("Music Round! What song am I trying to play?", "Clocks", "Yellow", "Fix You", 1) );

let polySynth;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	noStroke();
	polySynth = new p5.PolySynth();
	userStartAudio();
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
	textSize(100);
	textStyle(BOLD);
	text("A PUB QUIZ", width/2, (1.8*height)/3);
	textStyle(NORMAL);
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
		if(mouseX > (width/2)-400 && mouseX < (width/2)+400 ){
			if (mouseY > (1.2*height)/3-75  && mouseY < (1.2*height)/3+25 ){
				checkAnswer(1);
			}
			if (mouseY > (1.8*height)/3-75  && mouseY < (1.8*height)/3+25 ){
				checkAnswer(2);
			}
			if (mouseY > (2.4*height)/3-75  && mouseY < (2.4*height)/3+25 ){
				checkAnswer(3);
			}
		}
	} else {
		window.location.href = 'https://rossington19.github.io/ADIL/music.html';
	}
}

function checkAnswer(num){
	if(num === myQuestions[qNum].correct){
		correct();
	} else {
		incorrect();
	}
}

function correct(){
	correctAnswer = true;
	polySynth.play('G4', 0.6, 0, 0.2);
	polySynth.play('B5', 0.6, 0, 0.2);
	polySynth.play('D5', 0.6, 0, 0.2);
	setTimeout(() => { 
		qNum++;
		correctAnswer = false;
	}, 1000);
	
}

function incorrect(){
	polySynth.play('G3', 0.6, 0, 0.2);
	polySynth.play('A#3', 0.6, 0, 0.2);
	polySynth.play('D4', 0.6, 0, 0.2);
	incorrectAnswer = true;
	setTimeout(() => { 
		incorrectAnswer = false;
	}, 2000);
}