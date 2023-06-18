function calculateVh() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', vh + 'px')
}

$(window).ready(function () {
    calculateVh()

    $commonSettings = {
        dots: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        cssEase: 'cubic-bezier(1, -0.01, 0, 0.99)',
    }

    $('.background__slider').slick({
        ...$commonSettings,
        touchThreshold: 8,
        asNavFor: '.label__slider, .fruits__slider',
    })

    $('.fruits__slider').slick({
        ...$commonSettings,
        vertical: true,
        touchThreshold: 8,
        asNavFor: '.background__slider, .label__slider',
    })

    $('.label__slider').slick({
        ...$commonSettings,
        asNavFor: '.background__slider, .fruits__slider',
    })
})

window.addEventListener('resize', calculateVh)

window.addEventListener('orientationchange', calculateVh)

