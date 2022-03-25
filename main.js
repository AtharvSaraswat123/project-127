harry_potter="";
peter_pan="";
function preload(){
    harry_potter=loadSong("Harry potter.mp3");
    peter_pan=loadSong("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    canvas=image(video,0,0,600,500);
}