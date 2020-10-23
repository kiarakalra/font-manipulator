noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;
function setup() 
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded() 
{
    console.log("modelLoaded");
}
function draw() 
{
    background('#58e8dc');
    document.getElementById("square_side").innerHTML="the size of the font is="+difference+"px";
    textSize(difference);
    fill("yellow");
    stroke("green");
    text('Kiara',50,400);
}
function gotPoses(results) 
{
    if (results.length>0)
     {
       console.log(results); 
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("nosex="+noseX+"nosey="+noseY);
       leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       difference=floor(leftWristX-rightWristX);
       console.log("leftWrist="+leftWristX+"rightWrist="+rightWristX); 
    }
}