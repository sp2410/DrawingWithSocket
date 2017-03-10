var socket;// = require('socket.io');

function setup() {
	//var button = createButton('reset');
	//button.mousePressed(resetSketch);	
	createCanvas(1600,800);
	resetSketch();
	
}

function resetSketch(){

	background(0);	  
	// background(255);
	socket = io.connect('http://localhost:3000');
	//socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);

}

function newDrawing(data){
 	noStroke(); 
 	//var num =  random(0,255);
 	fill(255,0,100);
 	smooth();
  	ellipse(data.x, data.y, 5,5);

}



function mouseDragged(){
	//console.log('Sending: '+ mouseX, mouseY)

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse',data);

	 noStroke();  
	 fill(255);
	 smooth();
  	 ellipse(mouseX, mouseY, 5,5);
}

function draw() {
 
}


