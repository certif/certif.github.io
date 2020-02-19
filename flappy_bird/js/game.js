const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gapHeight = 90;
const gapWidth = 90;
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

let fly = new Audio();
let score_audio = new Audio();

fly.src = "assets/audio/fly.mp3";
score_audio.src = "assets/audio/score.mp3";

let xPos = 10;
let yPos = 150;
let grav = 1.5;

let score = 0;

document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 25;
  fly.play();
}

pipe[0] = {
  x: canvas.width,
  y: 0
}

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gapHeight);
  
    pipe[i].x -= 1;

    if(pipe[i].x == gapWidth) {
      pipe.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }

    if (xPos + bird.width >= pipe[i].x
      && xPos <= pipe[i].x + pipeUp.width
      && (yPos <= pipe[i].y + pipeUp.height 
      || yPos + bird.height >= pipe[i].y + pipeUp.height + gapHeight)
      || yPos + bird.height >= canvas.height - fg.height) 
    {
      location.reload(); 
    }
    
    if (pipe[i].x == 5) {
      score += 1;
      score_audio.play();
    }
  }

  ctx.drawImage(fg, 0, canvas.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);

  
  
  yPos += grav;

  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Score: " + score, 10, canvas.height - 20);

  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;