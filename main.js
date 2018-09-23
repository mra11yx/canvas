var c = elid("canvas");
var ctx = c.getContext("2d");
var orig = {
    x: 0,
    y: 0
}

function line(x1,y1,x2,y2) {
    ctx.moveTo(x1,y1); //start point?
    ctx.lineTo(x2, y2); //draw a line to 200-100
    ctx.stroke();
}


//circle
function circle(x,y,rd,startAngle,endAngle,open) {
    ctx.beginPath();
    ctx.arc(x, y, rd, startAngle, endAngle);
    if(open) {
        ctx.stroke();
    } else {
        ctx.fill();
    }
    
}
