let img;
let detector;
let video;
let detections;

const Handler = (error, results) => {
    if (error) {
        console.error(error);
    }
    detections = results;
    detector.detect(video, Handler);
}

function preload() {
    detector = ml5.objectDetector('cocossd');
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    detector.detect(video, Handler)
}

function draw() {
    image(video, 0, 0);
    detections.forEach((detection) => { 
        stroke(0, 255, 0);
        strokeWeight(4);
        noFill();
        rect(detection.x, detection.y, detection.width, detection.height);
        noStroke();
        fill(255);
        textSize(24);
        text(detection.label, detection.x+10, detection.y+24);
    })
}