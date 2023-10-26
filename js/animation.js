window.addEventListener('scroll', function() {
    var problemsSection = document.getElementById('problemsSection');
    var problemsSectionPosition = problemsSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (problemsSectionPosition < screenPosition) {
        problemsSection.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    var getSection = document.getElementById('getSection');
    var getSectionPosition = getSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (getSectionPosition < screenPosition) {
        getSection.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    var videoSection = document.querySelector('.video');
    var videoSectionPosition = videoSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (videoSectionPosition < screenPosition) {
        videoSection.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    const advantagesSection = document.querySelector('.advantages');
    const advantagesPosition = advantagesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (advantagesPosition < screenPosition) {
        advantagesSection.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    const aboutItems = document.querySelectorAll('.about__item');
    aboutItems.forEach(item => {
        const position = item.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            item.classList.add('show');
        }
    });
});

window.addEventListener('scroll', function() {
    const systemsSection = document.querySelector('.systems');
    const systemsPosition = systemsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

});

window.addEventListener('scroll', function() {
    const priceSection = document.querySelector('.price');
    const pricePosition = priceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (pricePosition < screenPosition) {
        priceSection.classList.add('show');
    }
});






