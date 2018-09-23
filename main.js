var c = elid("canvas");
var ctx = c.getContext("2d");
var orig = {
    x: 0,
    y: 0
}

function circle(x,y,rd,startAngle,endAngle,open) {
    ctx.beginPath();
    ctx.arc(x, y, rd, startAngle, endAngle);
    if(open) {
        ctx.stroke();
    } else {
        ctx.fill();
    }
    
}


function line(x1,y1,x2,y2) {
    ctx.moveTo(x1,y1); //start point?
    ctx.lineTo(x2, y2); //draw a line to 200-100
    ctx.stroke();
}
var st = false;


// function draw(st) {
//     console.log("st is ", st);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.translate(1, 1);
//     ctx.save();

//     circle(0, 0, 10, 0, 360, true);
//     circle(0, 0, 15, 0, 360, true);
//     ctx.restore();

//     // window.requestAnimationFrame(draw);

// }

function draw() {
  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas
  
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);
  
    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    // ctx.drawImage(earth, -12, -12);
  
    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    // ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
  
    ctx.restore();
    
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
   
    // ctx.drawImage(sun, 0, 0, 300, 300);
  
    window.requestAnimationFrame(draw);
  }
  
//   init();



function init(ipt) {
    st = ipt;
    console.log("in init, st is ",st);
    // draw(st);
    window.requestAnimationFrame(draw);
}
