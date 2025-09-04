let angle = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  let seconds = counter / 60;
  let centerX = 960;
  let centerY = 540;

  // Background 
  let r = 37, g = 34, b = 33;
  if (seconds >= 41 && seconds <= 66) {
    r = map(vocal, 0, 100, 10, r * 2);
    g = map(vocal, 0, 100, 10, g * 2);
    b = map(vocal, 0, 100, 10, b * 2);
  }
  background(r, g, b);

  textFont('Verdana');
  rectMode(CENTER);
  textSize(24);

  // Map circle sizes 
  let csizeA = map(vocal, 0, 100, 50, 430);
  let csizeB = map(drum, 0, 100, 50, 430);
  let csizeC = map(bass, 0, 100, 50, 430);
  let csizeD = map(other, 0, 100, 50, 430);

 push();
translate(centerX, centerY);

// Rotation: start at second chorus 
if (seconds >= 95 && seconds <= 120) {
  rotate(angle);
  angle += 0.72;
}

// Draw circles 
DrawVocal(csizeA);
DrawDrum(csizeB);
DrawBass(csizeC);
DrawOther(csizeD);

// Glow rings: start at first chorus, continue through second chorus
if (seconds >= 41 && seconds <= 121) { 
  for (let i = 1; i <= 6; i++) {
    noFill();
    stroke(255, 255, 255, 50 / i);
    strokeWeight(3);
    ellipse(0, -320, csizeA + i * 30);   // Vocal
    ellipse(350, 0, csizeB + i * 30);    // Drum
    ellipse(0, 320, csizeC + i * 30);    // Bass
    ellipse(-350, 0, csizeD + i * 30);   // Other
  }
}

pop();


  // Display words 
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text(words, centerX, centerY);
}

// Circle drawing functions 
function DrawVocal(size) {
  noStroke();
  fill(249, 248, 245); 
ellipse(0, -320, size);
  fill(229, 228, 225); 
ellipse(0, -320, size * 0.75);
  fill(209, 208, 205); 
ellipse(0, -320, size * 0.5);
  fill(189, 188, 185); 
ellipse(0, -320, size * 0.25);
}

function DrawDrum(size) {
  noStroke();
  fill(194, 193, 65); 
ellipse(350, 0, size);
  fill(174, 173, 45); 
ellipse(350, 0, size * 0.75);
  fill(154, 153, 25); 
ellipse(350, 0, size * 0.5);
  fill(134, 133, 5); 
ellipse(350, 0, size * 0.25);
}

function DrawBass(size) {
  noStroke();
  fill(225, 137, 69);
ellipse(0, 320, size);
  fill(205, 117, 49); 
ellipse(0, 320, size * 0.75);
  fill(185, 97, 29); 
ellipse(0, 320, size * 0.5);
  fill(165, 77, 9); 
ellipse(0, 320, size * 0.25);
}

function DrawOther(size) {
  noStroke();
  fill(184, 54, 42); 
ellipse(-350, 0, size);
  fill(164, 34, 22); 
ellipse(-350, 0, size * 0.75);
  fill(144, 14, 2); 
ellipse(-350, 0, size * 0.5);
  fill(124, 0, 0); 
ellipse(-350, 0, size * 0.25);
}


