// The JSDoc on the next line enables auto completion
/** @type {Player} */
let thePlayer;

function setup() 
{
    createCanvas(800, 600);
    thePlayer = new Player();
}

function draw() 
{
    background(255);
    switch(thePlayer.state)
    {
        case 0:
            drawStart()
            break;
        case 1:
            thePlayer.draw();
            thePlayer.move();
            console.log(thePlayer.checkState())
            break;
        case 2:
            drawWin();
            break;
        case 3:
            drawDied();
            break;      
    }
}

function keyPressed() 
{
    switch(keyCode) 
    {
        case LEFT_ARROW:
            thePlayer.setXSpeed(-5);
            break;
        case RIGHT_ARROW:
            thePlayer.setXSpeed(5);
            break;
        case DOWN_ARROW:
            thePlayer.setYSpeed(5)
            break;
        case UP_ARROW:
            thePlayer.setYSpeed(-5)
            break;
        case ENTER:
            switch(thePlayer.state)
            {
                case 0:
                    thePlayer.updateState(thePlayer.alive)
                    break;
                case 2:
                    break;
                case 3:
                    console.log('restart')
                    thePlayer.updateState(thePlayer.alive)
                    break;
            }
            break;
    }
}


function keyReleased() 
{
    switch(keyCode) 
    {
        case LEFT_ARROW:
        case RIGHT_ARROW:
            thePlayer.setXSpeed(0);
            break;
        case UP_ARROW:
        case DOWN_ARROW:
            thePlayer.setYSpeed(0)
            break;
    }
}


/**
 * Draw the background of the scene
 */
function drawSceneBackground() 
{
    stroke(255, 0, 0);
    noFill();
    rect(100, 100, 600, 400);
    fill(255, 0, 0);
    textSize(32);
}


/**
 * Draw the start scene
 */
function drawStart() 
{
    drawSceneBackground();
    text("Start game", 150, 150);
    textSize(20);
    text("Play well to win", 150, 200);
    text("Press Enter to start", 150, 300);
}


/**
 * Draw the game over scene - win condition
 */
function drawWin() 
{
    drawSceneBackground();
    text("You win!", 150, 150);
    text("Press Enter to play again", 150, 350);
}


/**
 * Draw the game over scene - lose condition
 */
function drawDied() 
{
    drawSceneBackground();
    text("You died :(", 150, 150);
    text("Press Enter to play again", 150, 350);
}