class Cactus {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = -8; // Speed of cactus movement
    }

    update() {
        this.x += this.vel; // Move the cactus left
    }

    display() {
        fill(0, 150, 0); // Green color for the cactus
        noStroke();
        rect(this.x, this.y, this.w, this.h); // Draw the cactus
    }
}
