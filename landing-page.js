const drawing = document.getElementById('myCanvas');
const cxt = drawing.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 100);
ctx.lineTo(200, 50);
ctx.lineTo(100, 100);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, 7);
cxt.stroke();