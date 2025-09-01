
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(37, 34, 33)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
let centerX = 960 //canvas 800x800
let centerY = 540 //canvas 800x800


csizeA = map(vocal, 0, 100, 50, 400)
csizeB = map(drum, 0, 100, 50, 400)
csizeC = map(bass, 0, 100, 50, 400)
csizeD = map(other, 0, 100, 50, 400)


fill(249, 248, 245);
ellipse(centerX, centerY /2, csizeA);


fill(194, 193, 65)
ellipse(centerX * 1.5, centerY, csizeB);

fill(225, 137, 69)
ellipse(centerX , centerY * 1.5, csizeC);


fill(184, 54, 42)
ellipse(centerX *0.5 , centerY , csizeD);

// display "words"
fill(255)
textAlign(CENTER);
textSize(50);
text(words, centerX, centerY);

}
