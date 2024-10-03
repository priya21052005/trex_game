class Cloud {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = -4; // Speed of cloud movement
    }

    update() {
        this.x += this.vel; // Move the cloud left
    }

    display() {
        fill(0, 30); // Light gray color for the cloud
        stroke(50); // Darker border
        ellipse(this.x, this.y, this.w, this.h); // Draw the cloud
    }
}
