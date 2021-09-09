function setup() 
{
    canvas = createCanvas(400, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 380);
  }
  
  function modelLoaded() 
  {
    console.log("Model Loaded")
  }
  
  function start()
  {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object-name").value;
  }
 
  function draw()
  {
      image(video, 0, 0, 400, 380);
  }