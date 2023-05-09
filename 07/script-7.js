//1
const newWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {
    newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
    newWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
    newWindow.close();
}, 6000);
//2
const btn = document.querySelector('.btn');
const paragraph = document.getElementById('text');

function changeCSS() {
    paragraph.style.cssText = 'color: orange; font-size: 20px; font-family: "Comic Sans MS"';
}
btn.addEventListener('click', changeCSS);

