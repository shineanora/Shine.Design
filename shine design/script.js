document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');
});

document.querySelector('nav').addEventListener('click', function() {
    document.querySelector('nav').remove('open');
});

document.querySelector('.carousel').slick;

$('.carousel').slick({
    cssEase: 'linear',
    prevArrow: '<img src="images/Arrow_left.svg">',
    nextArrow: '<img src="images/Arrow_right.svg">',
    autoplay: 1000,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 800,
        settings: {
            arrows: false,
        }
    }]
});