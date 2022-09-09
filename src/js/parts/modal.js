function modal () {
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');


more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});


close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

let message = {
    loading: "Загрузка...",
    success: 'Спасибо скоро мы свами свяжемся',
    failure: 'Что-то пошло не так...'
};
}

module.exports = modal;