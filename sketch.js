function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Draw parallel lines + polka dots:

  stroke(120, 111, 166);
  strokeWeight(5);
  for (let posX = 0; posX < 25; posX++) {
    line(posX * 10, 0, posX * 10, 248);
  }

  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 10; posY++) {
      circle(posX * 25, posY * 25, 10);
    }
  }

  // Draw polka dots:
  noStroke();
  fill(255, 204, 204);

  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 10; posY++) {
      if (posX % 2 === 0) {
        circle(posX * 25 + 260, posY * 25, 15);
      } else {
        circle(posX * 25 + width / 2, posY * 25 + 10, 10);
      }
    }
  }

  // Draw checkered squares:

  stroke(120, 111, 166);
  strokeWeight(2);

  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 5; posY++) {
      if (posX % 2 == 0) {
        square(posX * 24, posY * 55 + 250, 25);
      } else {
        square(posX * 24, posY * 55 + 250 + 10, 25);
      }
    }
  }
  // Draw parallel diagonal lines:
  strokeWeight(5);
  stroke(120, 111, 166);
  for (let i = 0; i < 10; i++) {
    line(width / 2, height - i * 27, width / 2 + i * 27, height);
    line(width, height / 2 + i * 24, width / 2 + i * 24, height);
  }
  strokeWeight(5);
  stroke(120, 111, 166);
  triangle(267, 251, 480, 251, 372, 356);

  // Draw borders:
  strokeWeight(5);
  stroke(241, 242, 246);
  line(width, 0, width, height);
  line(width, height, 0, height);
  line(0, height, 0, 0);
  line(0, 0, width, 0);
}
