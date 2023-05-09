//3
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const container = document.querySelector('.container');
const link = document.querySelector('.link');
btn1.onclick = () => {
    container.style.backgroundColor = 'blue';
};
btn2.ondblclick = () => {
    container.style.backgroundColor = 'pink';
};
btn3.onmousedown = () => {
    container.style.backgroundColor = 'brown';
};
btn3.onmouseup = () => {
    container.style.backgroundColor = 'white';
};
link.onmouseover = () => {
    container.style.backgroundColor = 'yellow';
};
link.onmouseout = () => {
    container.style.backgroundColor = 'white';
};