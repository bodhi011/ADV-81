var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 50;

ctx.beginPath();
ctx.arc(centerX - radius, centerY, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(centerX + radius, centerY, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(centerX + radius * 2.5, centerY, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(centerX - radius * 2.5, centerY, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(centerX - radius * 1.25, centerY + radius * 1.25, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(centerX + radius * 1.25, centerY + radius * 1.25, radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
ctx.stroke();