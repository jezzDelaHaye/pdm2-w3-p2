const LEFT_LOWERCASE = 'a';
const RIGHT_LOWERCASE = 'd';
const UP_LOWERCASE = 'w';
const DOWN_LOWERCASE = 's';

function setup() 
{
    createCanvas(0, 0);
}

function draw() {}


function keyPressed() 
{
    switch (key) 
    {
        case LEFT_LOWERCASE:
            console.log("move left");
            break;
        case RIGHT_LOWERCASE :
            console.log("move right");
            break;
        case DOWN_LOWERCASE:
            console.log("move down");
            break;
        case UP_LOWERCASE:
            console.log("move up");
            break;
        default:
            console.log("dont move!")
    }
}