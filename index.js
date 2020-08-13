// FUNCTIONS
const {
  InitWindow,
  SetTargetFPS,
  WindowShouldClose,
  IsKeyDown,
  BeginDrawing,
  EndDrawing,
  CloseWindow,
  ClearBackground,
  DrawCircle
} = require("raylib")

// INPUT CONSTANTS
const { KEY_DOWN, KEY_LEFT, KEY_UP, KEY_RIGHT } = require("raylib")

// COLOR CONSTANTS
const { RED, MAROON, BLACK, WHITE } = require("raylib")

// GAME LOCAL CONSTANTS
// screen settings
const screenWidth = 1200
const screenHeight = 1000
const frameRate = 60
const bgColor = WHITE
// ball settings
let ballPositionX = screenWidth / 2
let ballPositionY = screenHeight / 2
const ballSize = 50
const ballSpeed = 10
let ballColorArray = [RED, BLACK, MAROON]
let ballColor = ballColorArray[getRandomNum(0, 2)]
// fun settings :)
let frameCounter = 0
const randomizerRate = 5 // this is seconds

// INITIALIZATION OF GAME
InitWindow(screenWidth, screenHeight, "Super Cool Round Circle Game")
SetTargetFPS(60) // Set our game to run at 60 frames-per-second

// MAIN GAME LOOP - THIS FIRES 60 TIMES PER SECOND
// Detect window close button or ESC key
while (!WindowShouldClose()) {
  calculatePerimeter()
  if (IsKeyDown(KEY_RIGHT) && ballPositionX < screenWidth - ballSize)
    ballPositionX += ballSpeed
  if (IsKeyDown(KEY_LEFT) && ballPositionX > ballSize)
    ballPositionX -= ballSpeed
  if (IsKeyDown(KEY_UP) && ballPositionY > ballSize) {
    ballPositionY -= ballSpeed
    console.log(ballPositionY)
  }
  if (IsKeyDown(KEY_DOWN) && ballPositionY < screenHeight - ballSize)
    ballPositionY += ballSpeed

  if (frameCounter++ % (frameRate * randomizerRate) == 0) {
    ballPositionY = getRandomNum(ballSize, screenHeight - ballSize)
    ballPositionX = getRandomNum(ballSize, screenWidth - ballSize)
    ballColor = ballColorArray[getRandomNum(0, 2)]
  }
  //---------------------------------------------------------------
  // Draw
  //---------------------------------------------------------------
  BeginDrawing()
  ClearBackground(bgColor)
  DrawCircle(ballPositionX, ballPositionY, ballSize, ballColor)
  EndDrawing()
}
CloseWindow() // Close window and OpenGL context

function calculatePerimeter() {
  //console.log(getRandomNum(-1, 3))
}

function getRandomNum(floor, ceil) {
  const min = Math.ceil(ceil + 1)
  const max = Math.floor(floor - 1)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
