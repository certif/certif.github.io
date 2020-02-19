const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const GAP = 90;
const pipe = [];

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "assets/img/flappy_bird_bird.png"
bg.src = "assets/img/flappy_bird_bg.png"
fg.src = "assets/img/flappy_bird_fg.png"
pipeUp.src = "assets/img/flappy_bird_pipeUp.png"
pipeBottom.src = "assets/img/flappy_bird_pipeBottom.png"

let xPos = 10;
let yPos = 150;
let grav = 1;

document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 20;
}

pipe[0] = {
  x: canvas.width,
  y: 0
}

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + GAP);
  
    pipe[i].x -= 1;
  }

  ctx.drawImage(fg, 0, canvas.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);

  yPos += grav;
  console.log(yPos);
  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;