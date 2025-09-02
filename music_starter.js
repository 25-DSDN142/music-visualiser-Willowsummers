let angle = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
let seconds = (counter / 60);

  // default background colour
  let r = 37, g = 34, b = 33;

  // change background colour during first chorus
  if (seconds >= 41 && seconds <= 66) {
    r = map(vocal, 0, 100, 10, r *2);
    g = map(vocal, 0, 100, 10, g *2);
    b = map(vocal, 0, 100, 10, b *2);
  }
  background(r, g, b);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  let centerX = 960; //canvas 800x800
  let centerY = 540; //canvas 800x800
  
  csizeA = map(vocal, 0, 100, 50, 430);
  csizeB = map(drum, 0, 100, 50, 430);
  csizeC = map(bass, 0, 100, 50, 430);
  csizeD = map(other, 0, 100, 50, 430);

r = map(other, 0, 100, 37, 0);
g = map(other, 0, 100, 34, 0);
b = map(other, 0, 100, 33, 0);

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


function DrawVocal() {
      noStroke()
   fill(249, 248, 245);
ellipse(0, -320, csizeA);
   fill(229, 228, 225)
ellipse(0, -320, csizeA *0.75);
   fill(209, 208, 205)
ellipse(0, -320, csizeA *0.5);
   fill(189, 188, 185)
ellipse(0, -320, csizeA * 0.25);
}

function DrawDrum() {
      noStroke()
  fill(194, 193, 65);
ellipse(350, 0, csizeB);
   fill(174, 173, 45)
ellipse(350, 0, csizeB *0.75);
   fill(154, 153, 25)
ellipse(350, 0, csizeB *0.5);
   fill(134, 133, 5)
ellipse(350, 0, csizeB *0.25);
}

function DrawBass() {
      noStroke()
   fill(225, 137, 69);
ellipse(0, 320, csizeC);
   fill(205, 117, 49);
ellipse(0, 320, csizeC *0.75);
   fill(185, 97, 29);
ellipse(0, 320, csizeC *0.5);
   fill(165, 77, 9);
ellipse(0, 320, csizeC *0.25);
}

function DrawOther() {
      noStroke()
   fill(184, 54, 42);
ellipse(-350, 0, csizeD);
   fill(164, 34, 22);
ellipse(-350, 0, csizeD *0.75);
   fill(144, 14, 2);
ellipse(-350, 0, csizeD *0.5);
   fill(124, 0, 0);
ellipse(-350, 0, csizeD *0.25);
}
