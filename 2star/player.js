class Player 
{
    #x;
    #y;
    #xSpeed = 0;
    #ySpeed = 0;
    #alive ;
    #dead ;
    #win;
    #state;



    /**
     * Creates a new Player in the centre of the canvas.
     */
    constructor() 
    {
        this.#alive = 0;
        this.#dead = 1;
        this.#win = 2;
        this.#state = this.#alive; 
        this.reset();
    }


    /**
     * Resets the Player position to the starting point.
     */
    reset() {
        this.#x = width / 2;
        this.#y = height / 2;
    }


    /**
     * Move the player
     */
    move() 
    {
        this.#x += this.#xSpeed;
        this.#y += this.#ySpeed;
        if (this.#x < 0 || this.#y < 0 || this.#x > 800 || this.#y > 600) 
        {
            this.#state = this.#dead;
            console.log("You died :(");
        } 
        else if (this.#x > width) 
        {
            this.#state = this.#win;
            console.log("You win!");
        }
    }


    /**
     * Change the player's speed
     * @param {number} newSpeed 
     */
    setXSpeed(newSpeed) 
    {
        this.#xSpeed = newSpeed;
    }
    setYSpeed(newSpeed)
    {
        this.#ySpeed = newSpeed
    }


    /**
     * Draw the player
     */
    draw() 
    {
        fill(255, 0, 0);
        square(this.#x, this.#y, 50);
    }

    checkState()
    {
        return(this.#state);
    }

    updateState(state)
    {
        this.#state = state;
    }
}