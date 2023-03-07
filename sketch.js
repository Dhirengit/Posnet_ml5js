let capture;
let posenet;
let noseX, noseY;
let reyeX,reyeY;
let leyeX, leyeY;
let singlePose, skeleton;
let img;
let specs, smoke

function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO)
    capture.hide() 
    
    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses )
    img = loadImage('images/Dhiren.jpg')
    // specs = loadImage('images/specs.jpg')
}

function receivedPoses(poses){
    if(poses.length > 0){
        singlePose = poses[0].pose
        skeleton = poses[0].skeleton

        keypoints = poses[0]

    }
}

function modelLoaded() {
    console.log("model loaded")
}


function draw(){
    image(capture, 0,0,800,600)
    fill(255,0,0)
    // ellipse(reyeX, reyeY, 30, 30)
    
    if (singlePose){
        for (let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 30)
    
        }

        for (let j=0; j<skeleton.length; j++){
            stroke(255,255,255)
            strokeWeight(5)
            line(
                skeleton[j][0].position.x, 
                skeleton[j][0].position.y,
                skeleton[j][1].position.x, 
                skeleton[j][1].position.y
                )
        }

        // image(img, singlePose.nose.x-40, singlePose.nose.y-50, 300, 300)
    }    
    
    // background(200);
    // // 1. point
    // point(300,200)
    // // 2. line
    // line(200,200,300,300)
    // // 3. triangle
    // triangle(100,200,300,400,150,450)
    // // 4. rectangle
    // rect(500,200, 200,100)
    // // 5. circle
    // ellipse(600, 400,100,100)
    
    // fill(132,100,34)
    // stroke(255,0,0,150)
    // strokeWeight(5)
    // ellipse(100, 200,100,100)
    // stroke(0,255,0)
    // ellipse(250, 200,100,100)
    // ellipse(400, 200,100,100)
    // stroke(0,0,255)
    // ellipse(550, 200,100,100)
    // ellipse(700, 200,100,100)
    
    // r = getRandomArbitrary(0,255)
    // g = getRandomArbitrary(0,255)
    // b = getRandomArbitrary(0,255)
    // fill(r,g,b)
    // ellipse(mouseX, mouseY, 50, 50)
    
}

function getRandomArbitrary(min,max){
    return Math.random()* (max - min) + min
}