fontSize = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}
function modelLoaded(){
    console.log("PoseNet is Complete!");
}
function gotPose(result){
    if (result.length > 0){
        console.log(result);
        fontSize = Math.floor(result[0].pose.leftWrist.x - result[0].pose.rightWrist.x);
   }
}
function draw(){
   background("#F50000");
   text("Hi there",0,0 );
   textSize(fontSize);
}