let video;
let detector;
let detections = [];

function preload() {
    detector = ml5.objectDetector('cocossd');
}

const Handler = (error, results) => {
    if (error) {
        console.error(error);
    }
    detections = results;
    detector.detect(video, Handler);
}

function setup() {
    createCanvas(1040, 1080);
    video = createCapture(VIDEO);
    video.size(1040, 1080);
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