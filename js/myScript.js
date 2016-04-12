var myPoint = new Point(25,15);
var point2 = new Point(100,100);
var point3 = new Point(100,25);
var myPath = new Path([myPoint,point2,point3,myPoint]);
var grad = {
    gradient : {
        stops : ["red","yellow"],
        },
    origin : point3,
    destination : point2,
    } 
myPath.style = {strokeColor : 'black', strokeWidth : 2, fillColor : grad};

myProject = new Project();

yourPath = myPath.clone();
myPath.translate(point3);

i = 0;

function onFrame(event) {
    yourPath.rotate(3);
    myPath.rotate(-3);
    myPath.position.x -= i;
    yourPath.position.y += i;

    i++;
    J = 20
    if (i == J) {
        i = -(J-1); 
    }
}
