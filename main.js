img="";
status = "";
objects = [];
 function preload() {
     
 }
function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status doesn't want to detect your item(s) but still spending time to do.";

}

function draw() {
    image(video,0,0,380,380);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        console.log("sadly inside the IF:(");
        console.log(objects);
        objectDetector.detect(video,gotResult);
      for (i = 0; i < objects.length; i++)  {
        console.log("sadly the for loop is here:(");
          document.getElementById("status").innerHTML = "Status: Sadly Object was detected after so much energy!:(";
          document.getElementById("num_of_objects").innerHTML = "Sadly the number of objects were detected after so much energy. # "+ objects.length;
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x +20,objects[i].y+20);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x,objects[i].y, objects[i].height);

      }

    }
    
}

function modelLoaded(){
    console.log("Model is loaded sadly:(");
    status = true;
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}