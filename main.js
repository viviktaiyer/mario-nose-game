img="";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
    poseNet= ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('model loaded');
	
}
function draw() {
	game()
}
function gotResult(results){
	if(results.length>0){
		
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     console.log("noseX = " + noseX +" noseY = " + noseY);

	}
}

function preload(){
mario_gameover=loadSound('gameover.wav');
mario_gameover=loadSound('jump.wav');
mario_gameover=loadSound('kick.wav');
mario_gameover=loadSound('coin.wav');
mario_gameover=loadSound('mariodie.wav');
world_start=loadSound('world_start.wav');
setSprites();
MarioAnimation();

}
function gotPoses(){
if(results.length>0){
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	
}
}


