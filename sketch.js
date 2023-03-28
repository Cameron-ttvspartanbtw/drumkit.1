//these are all the variables I have that will display each valu
let buttonHit = false;
let basedrum;
let snaredrum;
let hiHats;
let rideCymbal;
let pedal;
let img;
let button;
let buttonX = 390;
let buttonY = 80;
let buttonW = 80;
let buttonH = 30;

//this function will load all my sounds and the image I have
function preload(){
  soundFormats('mp3', 'ogg');
  //this will load drum sound one
  basedrum = loadSound("mixkit-drum-bass-hit-2294.mp3");
  snaredrum = loadSound("hip-hop-beat-by-arm-saj-1-6867.mp3");
  Hihats = loadSound("mixkit-drum-bass-hit-2294.mp3");
  rideCymbal = loadSound("beat-of-time-128705.mp3");  
  pedal = loadSound("house-kick-single-shot-g-key-751-MDr.mp3");
  img = loadImage('top down view of drums.jpg')
  
 
}

//this will create the canvas
function setup() {
  createCanvas(800, 800);
 
  
}
//this will display the image and the overlay
function draw() {
  image(img, 0, 0)
  if (buttonHit == false) {
    displayOverlay();
  }
   
}
// when you click the mouse the button will disapear and u can play the sounds
function mousePressed() {
  if (mouseX >= buttonX &&
      mouseX <= buttonX + buttonW &&
      mouseY >= buttonY &&
      mouseY <= buttonY + buttonH) {
    buttonHit = true;
  }
}
//this will display all text and fonts and size of the texts
function displayOverlay() {
  //create rect with text and button
  textFont('Georgia')
  fill(65,100,150)
  rect(300,60,270,150);
  textSize(19);
  fill(255,0,0)
  text('Play drums by pressing W A S D or the Spacebar',300,120,250,100);
  textFont('Georgia');
  textSize(18);
  fill(255,100,150);
  button = rect(buttonX,buttonY,buttonW,buttonH);
  fill(0,0,255);
  text('Play',410,95,90,60);
}



//when the w a s d and spacebar have been hit they will play certain sounds
function keyPressed() { 
  //keycode for the spacebar is 32 on college machine
  if (keyCode === 32){ 
    basedrum.play();  
    basedrum.stop(5);  
  }  
   else if (key == 'w') {
    snaredrum.play();  
    snaredrum.stop(7); 
   }
   else if (key == 'a') {
    Hihats.play();  
    Hihats.stop(5); 
   }
   else if (key == 's') {
    rideCymbal.play();  
    rideCymbal.stop(5); 
   }
   else if (key == 'd') {
    pedal.play();
    pedal.stop(5);
   }
   else {
     //catch
   }
}

 

 





  
