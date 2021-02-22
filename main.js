function preload(){
    
}
 function setup() {
 f=createCanvas(400, 400);
     f.position(200,280);
     g=createCapture(VIDEO);
     g.hide();
    
}
function draw() {
    image(g,80,100,200,200);
    fill(200,0,0);
    stroke(200,0,0);
    circle(40,40,60);
     circle(40,350,60)
    circle(300,40,60);
    circle(300,350,60);
    fill(0,200,0);
    stroke(0,200,0);
    rect(70,30,200,20);
    rect(70,340,200,20);
     rect(30,70,20,250);
     rect(290,70,20,250);
}
function take_snapshot(){
    save('studentpic.png');
}