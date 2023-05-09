//5
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
button.onclick = () => {
    message.innerHTML = 'I was pressed!';
}
button.onmouseover = () => {
    message.innerHTML = 'Mouse on me!';
}
button.onmouseout = () => {
    message.innerHTML = 'Mouse is not on me!';
}
//6
const size = document.querySelector('.size');
function changeSize() {
    const height = window.innerHeight;
    const width = innerWidth;
    size.innerHTML = `Width: ${width}, Height: ${height}`;
}
window.addEventListener('load', changeSize);
window.addEventListener('resize', changeSize);
//7
const country = document.getElementById('country');
const cities = document.getElementById('cities');
const countryAndCities = document.getElementById('country-cities');
const options = document.querySelector('.option');

country.addEventListener('change', function () {
    options.innerHTML = `<option value="ger_berlin">Berlin </option>
<option value="ger_munich">Munich</option>
<option value="usa_washington">Washington </option> 
<option value="usa_seattle">Seattle</option>
<option value="ukr_kyiv">Kyiv </option> 
<option value="ukr_lviv">Lviv</option>`;
    const selectOption = country.value;
    const nodeList = options.querySelectorAll(`[value^="${selectOption}_"]`);
    let newOptions = '';
    nodeList.forEach(option => {
        newOptions += `<option value="${option.value}">${option.textContent}</option>`;
    });
    cities.innerHTML = newOptions;
    const countryOption = country.querySelector(`[value="${selectOption}"]`);
    countryAndCities.textContent = countryOption.textContent + ': ' + cities.textContent;
})
