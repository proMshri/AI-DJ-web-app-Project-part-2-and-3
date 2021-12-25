var song="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.position(600,100);
    posenetVar=ml5.poseNet(video,playSound);
    posenetVar.on('pose',showDot);
}

function preload() {
    song=loadSound("sound.mp3");
}

function draw() {
    image(video,0,0,600,400);
    video.hide();
}

function music() {
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function playSound() {
    console.log("model is loaded.");
}

function showDot(results) {
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
    }
}