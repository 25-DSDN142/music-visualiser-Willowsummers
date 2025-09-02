let angle = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(37, 34, 33);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  let centerX = 960; //canvas 800x800
  let centerY = 540; //canvas 800x800
  let seconds = (counter / 60);

  csizeA = map(vocal, 0, 100, 50, 400);
  csizeB = map(drum, 0, 100, 50, 400);
  csizeC = map(bass, 0, 100, 50, 400);
  csizeD = map(other, 0, 100, 50, 400);

  push();
  translate(centerX, centerY);

  // rotate ONLY during FIRST chorus
  if (seconds >= 41 && seconds <= 66) {
    rotate(angle);
    angle += 0.72 //Finish in the same position as start
  }

  // draw circles (always visible)
  DrawVocal(csizeA);
  DrawDrum(csizeB);
  DrawBass(csizeC);
  DrawOther(csizeD);

  pop();

  // display "words"
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text(words, centerX, centerY);
}

//41 seconds chorus starts

//66 deconds chorus ends. 


function DrawVocal() {
  fill(249, 248, 245);
  ellipse(0, -320, csizeA);
}

function DrawDrum() {
  fill(194, 193, 65);
  ellipse(320, 0, csizeB);
}

function DrawBass() {
  fill(225, 137, 69);
  ellipse(0, 320, csizeC);
}

function DrawOther() {
  fill(184, 54, 42);
  ellipse(-320, 0, csizeD);
}
