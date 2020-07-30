
const {IsKeyDown, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP, InitWindow, SetTargetFPS, WindowShouldClose, BeginDrawing, EndDrawing, CloseWindow, DrawCircle, BLACK, ClearBackground, RED} = require('raylib')
 
const screenWidth = 1920
const screenHeight = 1080
InitWindow(screenWidth, screenHeight, "Super Cool Round Circle Game")
let ballPositionX = screenWidth/2 
let ballPositionY = screenHeight/2
SetTargetFPS(60)
 
while (!WindowShouldClose()) {
   if (IsKeyDown(KEY_RIGHT)) ballPositionX += 2
   if (IsKeyDown(KEY_LEFT)) ballPositionX -= 2
   if (IsKeyDown(KEY_UP)) ballPositionY -= 2
   if (IsKeyDown(KEY_DOWN)) ballPositionY += 2

   BeginDrawing()
   ClearBackground(RED);
   DrawCircle(ballPositionX, ballPositionY, 50, BLACK)
   EndDrawing()
}
CloseWindow()        // Close window and OpenGL context



/*

r.BeginDrawing();
    r.ClearBackground(r.PINK)
    r.DrawText("Congrats! You created your first window!", 190, 200, 20, r.LIGHTGRAY)
    r.DrawText("poo", 100, 100, 20, r.BLUE)

 */ 