# Tasks

0. Setup

A. local setup
    * install 
    * install VS Code and install these extensions
    * Live Server
    * p5.vscode
    * Select the index.html file
    * Press "Go Live" in the bottom right of the VS Code window
    * Go to the browser
    * Press F12 to open the developer window of the browser
        (optional: Use the window controls in the developer window to dock it at the right of the window)

B. use web editor 
    * go to https://editor.p5js.org/
    * Signup and login to be able to save
    * 

In a separate browser-window open the p5.js reference: https://p5js.org/reference/ - to be able to lookup functions for the following:

1. Go to sketch.js and edit the code in the draw() function so that:

a.

* the background is black
* draw a white circle in the middle of the canvas (the game window) (hint: use the function ellipse(x, y, w, h) to draw circles)

b. 

* change it so the circle is drawn where the mouse-cursor is (hint: get the x and y of the mouse position from built-in  variables `mouseX` and `mouseY`)

c. 

* make the game canvas 800 by 800

d. 

* change it so that a circle is drawn when the mouse is pressed (hint: figure out if the mouse is pressed with the help of a builtin variable and and if() command - `if(mouseIsPressed) { ... }`)

e.

* remove any other circles, and instead draw a ball - a smaller circle (say with a width of something like 24) in the middle and bottom of the game canvas (hint: The width and height of the game canvas are available as built-in variables `width` and `height`.)

2. Create a moving ball 

a.

* instead of setting the x and y of the ball directly where you draw the circle, do the following:
* create two variables ballX and ballY at the top of sketch (hint: use `let bla` to create a variable with name bla)
* set the value of the variables in setup() (hint: use `bla = 60` to set the variable bla to 60, or use `bla = foo` to set the variable bla to the value of the variable foo)

b.

* create two variables speedX and speedY at the top of sketch
* set the values to some fairly small values in setup()
* in the draw() function, update ballX by adding speedX and ballY by adding speedY (hint: update a variable to a new value by using `bla = bla + foo`)

Watch your little ball move!

c. 

* update the values of speedX and speedY so the ball doesn't move out of the game canvas too fast

3. make the ball bounce off the borders of the game canvas

a.

* if ballX is below 0, then you need to reverse the x speed (hint: test if a variable has a value below 0 by using `if( bla < 0)`.) (hint: we have the speed in speedX; you can reverse the direction of the ball in the x-direction by setting `speedX = -speedX`)

* if ballY is below 0 - do the same for the y speed
* if ballX is above the width (remember width is a built-in variable), reverse the x speed
* if ballY is above the height, reverse the y speed

b. (harder)

* Look at when the ball hits the borders. Notice that the ball overlaps a bit with the border when we reverse it. Can you figure out why?
* Can you figure out a way to fix it, so that the ball reverses direction exactly when it hits the border? (hint: you can divide a value by using slash, `bla/2` )

4. make a paddle at the bottom  

* make the ball start somewhere the top of the game canvas instead

* create variables paddleX and paddleY and set them to the (x,y) position at the middle bottom of the screen (where the ball started before)

* draw a rectangle at paddleX and paddleY (hint: use the function rect(x,y,w,h) to draw rectangles)