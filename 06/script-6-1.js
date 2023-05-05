//***
const clock = document.querySelector('.clock');
function time() {
    let date = new Date();
    console.log(date);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let number = date.getDay();
    let month = date.getMonth() + 1;
    if (month === 1) {
        month = 'January';
    } else if (month === 2) {
        month = 'February';
    } else if (month === 3) {
        month = 'March';
    } else if (month === 4) {
        month = 'April';
    } else if (month === 5) {
        month = 'May';
    } else if (month === 6) {
        month = 'June';
    } else if (month === 7) {
        month = 'July';
    } else if (month === 8) {
        month = 'August';
    } else if (month === 9) {
        month = 'September';
    } else if (month === 10) {
        month = 'October';
    } else if (month === 11) {
        month = 'November';
    } else if (month === 12) {
        month = 'December';
    }
    clock.innerHTML = `<p class = "day-month"> ${month} ${number}</p>
    ${hours}:${minutes}:${seconds}`;
}
setInterval(time, 1000);