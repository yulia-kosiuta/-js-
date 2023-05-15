//1
const head = $('h2.head').css('background-color', 'green');
head.find('.inner').css('font-size', '35px');
//2
const hrefValue = $('.link').attr('href');
if (hrefValue.startsWith('https://')) {
    $('.link').attr('target', '_blank');
}
//3
const text = $('h3').next();
text.each((i, el) => {
    $(el).insertBefore($(el).prev('h3'));
})
//4
$('.checkbox').on('change', function () {
    let count = $('.checkbox:checked').length;
    if (count >= 3) {
        $('.checkbox:not(:checked)').prop('disabled', true)
    } else {
        $('.checkbox:not(:checked)').prop('disabled', false)
    }
})