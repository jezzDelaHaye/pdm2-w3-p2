class Player {
    #x;
    #y;
    #xSpeed = 0;


    /**
     * Creates a new Player in the centre of the canvas.
     */
    constructor() {
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
    move() {
        this.#x += this.#xSpeed;
        if (this.#x < 0) {
            console.log("You died :(");
        } else if (this.#x > width) {
            console.log("You win!");
        }
    }


    /**
     * Change the player's speed
     * @param {number} newSpeed 
     */
    setXSpeed(newSpeed) {
        this.#xSpeed = newSpeed;
    }


    /**
     * Draw the player
     */
    draw() {
        fill(255, 0, 0);
        square(this.#x, this.#y, 50);
    }
}