(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.heading', {
        opacity: 0,
        y: -25,
        duration: 1,
        stagger: 0.3
    });
});
