$(document).ready(function () {
    $("body").css("background", "radial-gradient(circle at 50%, #" + palette[random] + " 37.5%, #" + palette[$random] + " 62.5%)");
    let e = $("main.marathon section.title"),
        t = new TimelineLite({
            paused: !0
        });
    t.to(e, 1, {
        autoAlpha: 0,
        ease: Linear.easeNone,
        y: "54px"
    }), $(window).scroll(function () {
        const a = $(document).scrollTop() / $(e).height();
        t.progress(a)
    });
    $("main.marathon section.content ul li").mousemove(function (e) {
        let xPos = $(this).position().left,
            yPos = $(this).position().top,
            mouseX = e.pageX,
            mouseY = e.pageY,
            left = e.pageX - xPos,
            xOffset = left - $(this).width() / 2,
            top = e.pageY - yPos,
            yOffset = top - $(this).height() / 2,
            xPerc = xOffset / $(this).width() * 250,
            yPerc = yOffset / $(this).height() * 250;
        TweenMax.to($(this), 1, {
            ease: Expo.easeOut,
            rotationX: 0.125 * yPerc,
            rotationY: -0.125 * xPerc
        });
    });
    $("main.marathon section.content ul li").on("mouseleave", function () {
        TweenMax.to($(this), 1, {
            ease: Expo.easeOut,
            rotationX: 0,
            rotationY: 0
        });
    });
});