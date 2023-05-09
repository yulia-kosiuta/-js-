//4
const button = document.querySelector('.btn');
const list = document.querySelector('.list');

button.addEventListener('click', function () {
    const selectOption = list.value;
    if (selectOption) {
        const removeOption = list.querySelector(`[value='${selectOption}']`);
        removeOption.remove();
    }
})