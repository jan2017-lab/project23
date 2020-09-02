class Box {
constructer(x,y,width,height) {
var options = {
 'restitution' :0.1,
  'friction' :0.9,
  'density' :1.0
}

this.body = bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height

World.add(world,this.body);
}

display() {
var pos = this.body.position;
Push();
translate(pos.x,pos.y);
rectMode(CENTER);
stroke("red")
rect(0,0,this.width,this.height);
pop();
   }

};