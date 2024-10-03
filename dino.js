class Dino {
    constructor(x, y, w, h, gravity) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = 0;
        this.acc = gravity;
        this.jumped = false;
    }

    jump() {
        if (!this.jumped) {
            this.vel = -10;
            this.jumped = true;
        }
    }

    collide(obj) {
        let x1 = this.x;
        let x2 = obj.x;
        let y1 = this.y;
        let y2 = obj.y;
        let w1 = this.w;
        let w2 = obj.w;
        let h1 = this.h;
        let h2 = obj.h;

        if (
            x1 + w1 / 2 >= x2 - w2 / 2 &&
            x1 - w1 / 2 <= x2 + w2 / 2 &&
            y1 + h1 / 2 >= y2 - h2 / 2 &&
            y1 - h1 / 2 <= y2 + h2 / 2
        ) {
            return true;
        } else {
            return false;
        }
    }

    update() {
        // If the Dino is above the base, apply gravity
        if (this.y <= baseY - this.h - this.vel) {
            this.y += this.vel;
            this.vel += this.acc;
        } else {
            // Reset jump when on the ground
            this.jumped = false;
        }
    }

    display() {
        fill(20, 220, 20); // Green color for Dino
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
}
