import ctx from '../helpers/context';

export default () => {
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round'; // round / square / butt
  ctx.beginPath();
  ctx.moveTo(64, 64);
  ctx.lineTo(150, 60);
  ctx.lineTo(128, 128);
  // ctx.closePath();
  ctx.stroke();
};

