document.addEventListener('DOMContentLoaded', function () {
    const animBG = new AnimBg('.anim-bg');

    document.addEventListener('mousemove', (event) => animBG.listenCursorMove(event))



})