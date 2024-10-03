let baseX=0;
let baseH=10;
let baseY=150-baseH;
let trex;
let g=0.5;
let h=30;
let clouds=[];
let cloudW=50;
let cactuses=[];
let cactusW;
let cactusH;

function setup(){
    createCanvas(700, 150);
    trex = new Dino(20, baseY-h, 20, h, g);
    clouds.push(new Cloud(width + cloudW / 2, 30, cloudW, 20));
}

function keyPressed(){
    if(key === ' '){
        trex.jump();
    }
}

function draw(){
    // Draw background with a light blue sky
    background(173, 216, 230);
    
    // Add a centered frame
    fill(255, 255, 255, 150); // Semi-transparent white frame
    stroke(0); // Black border for the frame
    strokeWeight(5); // Border thickness
    rect(50, 10, 600, 130); // Frame dimensions

    // Draw the ground/path
    fill(139, 69, 19); // Brown color for the ground
    noStroke();
    rect(baseX, baseY, width, baseH);

    // Add clouds at intervals
    if(frameCount % round(random(50, 70)) == 0){
        clouds.push(new Cloud(width + cloudW / 2, random(10, 35), cloudW, 20));
    }

    // Add cactuses at intervals
    if(frameCount % 60 == 0){
        cactusW = round(random(5, 15));
        cactusH = round(random(25, 35));
        cactuses.push(new Cactus(width + cloudW / 2, baseY - cactusH, cactusW, cactusH));
    }

    // Update and display the dino
    trex.update();
    trex.display();

    // Update and display the clouds
    for(let c of clouds){
        c.update();
        c.display();
    }

    // Update and display the cactuses, check for collisions
    for(let cact of cactuses){
        cact.update();
        cact.display();
        if(trex.collide(cact)){
            // Game over screen
            background(255, 0, 0, 50); // Red overlay for game over
            fill(255, 0, 0); 
            noStroke();
            textAlign(CENTER, CENTER);
            textSize(32);
            text("G A M E - O V E R !!", width / 2, height / 2);
            noLoop(); // Stop the game loop
        }
    }

    // Display score
    fill(0); // Black color for score
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);
    text(round(frameCount / 8), 650, 20);
}
