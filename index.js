const {
  IsKeyDown,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_W,
  KEY_A,
  KEY_S,
  KEY_D,
  InitWindow,
  WHITE,
  SetTargetFPS,
  WindowShouldClose,
  BeginDrawing,
  EndDrawing,
  CloseWindow,
  DrawCircle,
  BLACK,
  ClearBackground,
  RED,
  BLUE,
  GREEN,
} = require("raylib");
const frameRate = 60;
const screenWidth = 500;
const screenHeight = 500;
const ballSize = 50;
const ballSpeed = 10;

InitWindow(screenWidth, screenHeight, "Super Cool Round Circle Game");
let ballPositionX = screenWidth / 2;
let ballPositionY = screenHeight / 2;
SetTargetFPS(frameRate);
const bgColor = WHITE;
const colorArr = [BLUE, GREEN, RED, BLACK];
let ballColor = colorArr[getRandomNum(0, 3)];

const randomizerRate = 5;
let frameCounter = 0;

while (!WindowShouldClose())
{
  //myFunction(ballPositionX, ballPositionY)
  if (
    (IsKeyDown(KEY_RIGHT) || IsKeyDown(KEY_D)) &&
    ballPositionX < screenWidth - ballSize
  )
    ballPositionX += ballSpeed;
  if ((IsKeyDown(KEY_LEFT) || IsKeyDown(KEY_A)) && ballPositionX > ballSize)
    ballPositionX -= ballSpeed;
  if ((IsKeyDown(KEY_UP) || IsKeyDown(KEY_W)) && ballPositionY > ballSize)
  {
    ballPositionY -= ballSpeed;
  }
  if (
    (IsKeyDown(KEY_DOWN) || IsKeyDown(KEY_S)) &&
    ballPositionY < screenHeight - ballSize
  )
    ballPositionY += ballSpeed;

  if (frameCounter++ % (frameRate * randomizerRate) == 0)
  {
    ballColor = colorArr[getRandomNum(0, 3)];
    ballPositionY = getRandomNum(ballSize, screenHeight - ballSize);
    ballPositionX = getRandomNum(ballSize, screenWidth - ballSize);
    frameCounter = 1;
  }

  BeginDrawing();
  ClearBackground(bgColor);
  DrawCircle(ballPositionX, ballPositionY, ballSize, ballColor);
  EndDrawing();
}
CloseWindow(); // Close window and OpenGL context

function myFunction(ballPositionX, ballPositionY)
{
  //console.log("x: "+ ballPositionX)
  //console.log("y: "+ ballPositionY)
  let randomNum = getRandomNum(0, 10);
  console.log(randomNum);
}

function getRandomNum(floor, ceil)
{
  const max = Math.ceil(ceil + 1);
  const min = Math.floor(floor - 1);
  return Math.floor(Math.random() * (min - max + 1)) + max;
}
