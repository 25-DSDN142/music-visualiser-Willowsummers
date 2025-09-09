let angle = 0;
let bouncers = []; 
let ballsInitialized = false; 
let minSpeed = 1.5;  // minimum speed
let maxSpeed = 3;    // maximum speed

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

 if ((seconds >= 95 && seconds <= 120) || seconds >= 153) {
    r = map(vocal, 0, 100, 10, r * 2);
    g = map(vocal, 0, 100, 10, g * 2);
    b = map(vocal, 0, 100, 10, b * 2);
  }
  background(r, g, b);

// === BRIDGE + FINAL CHORUS: bouncing balls (background, vocal + bass reactive) ===
if (seconds >= 121 && seconds <= 210) {
  if (!ballsInitialized) {
    for (let i = 0; i < 25; i++) {
      let angle = random(TWO_PI);
      let speed = random(minSpeed, maxSpeed);
      bouncers.push({
        x: random(width),
        y: random(height),
        dx: cos(angle) * speed,
        dy: sin(angle) * speed,
        baseSize: random(30, 80) // store base size for pulsing
      });
    }
    ballsInitialized = true;
  }

  fill(255, 180); // semi-transparent white for background
  noStroke();

  for (let b of bouncers) {
    // vocal-reactive speed
    let speedFactor = map(vocal, 0, 100, 0.5, 3);
    b.x += b.dx * speedFactor;
    b.y += b.dy * speedFactor;

    // bounce off edges
    if (b.x < 0 || b.x > width) b.dx *= -1;
    if (b.y < 0 || b.y > height) b.dy *= -1;

    // bass-reactive pulsing
    let pulse = map(bass, 0, 100, 0.5, 1.5); // scale size from 50% to 150% of base
    ellipse(b.x, b.y, b.baseSize * pulse);
  }
}



  // Map circle sizes 
  let csizeA = map(vocal, 0, 100, 50, 430);
  let csizeB = map(drum, 0, 100, 50, 430);
  let csizeC = map(bass, 0, 100, 50, 430);
  let csizeD = map(other, 0, 100, 50, 430);

  // === MAIN VISUALS (always drawn over bouncing balls) ===
  push();
  translate(centerX, centerY);

  // Rotation: start at second chorus 
 if ((seconds >= 95 && seconds <= 120) || seconds >= 153) {
    rotate(angle);
    angle += 0.72;
  }

  // Draw circles 
  DrawVocal(csizeA);
  DrawDrum(csizeB);
  DrawBass(csizeC);
  DrawOther(csizeD);

  // Glow rings: start at first chorus, continue through second chorus
  if ((seconds >= 41 && seconds <= 120) || seconds >= 153) { 
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

//Text settings 
textFont('Trebuchet MS');
textAlign(CENTER);
textSize(80);

// shadow layer
fill(0, 150);  
text(words, centerX + 3, centerY + 3);

// main text
fill(255);
text(words, centerX, centerY);
}


// Circle drawing functions 
function DrawVocal(size) {
  noStroke();
  fill(249, 248, 245); ellipse(0, -320, size);
  fill(229, 228, 225); ellipse(0, -320, size * 0.75);
  fill(209, 208, 205); ellipse(0, -320, size * 0.5);
  fill(189, 188, 185); ellipse(0, -320, size * 0.25);
}

function DrawDrum(size) {
  noStroke();
  fill(194, 193, 65); ellipse(350, 0, size);
  fill(174, 173, 45); ellipse(350, 0, size * 0.75);
  fill(154, 153, 25); ellipse(350, 0, size * 0.5);
  fill(134, 133, 5); ellipse(350, 0, size * 0.25);
}

function DrawBass(size) {
  noStroke();
  fill(225, 137, 69); ellipse(0, 320, size);
  fill(205, 117, 49); ellipse(0, 320, size * 0.75);
  fill(185, 97, 29); ellipse(0, 320, size * 0.5);
  fill(165, 77, 9); ellipse(0, 320, size * 0.25);
}

function DrawOther(size) {
  noStroke();
  fill(184, 54, 42); ellipse(-350, 0, size);
  fill(164, 34, 22); ellipse(-350, 0, size * 0.75);
  fill(144, 14, 2); ellipse(-350, 0, size * 0.5);
  fill(124, 0, 0); ellipse(-350, 0, size * 0.25);
}


