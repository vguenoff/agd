const canvas = document.createElement('canvas');
canvas.setAttribute('width', '256');
canvas.setAttribute('height', '256');
canvas.style.border = '1px dashed white';
document.querySelector('#root').appendChild(canvas);
const ctx = canvas.getContext('2d');

export default ctx;
