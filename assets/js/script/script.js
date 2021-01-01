var palette = ["60b2cc", "eabc32", "c96565", "7f5b93", "53ae9d"],
    random = Math.floor(Math.random() * palette.length),
    $random = Math.floor(Math.random() * palette.length);
$(document).ready(function () {
    function t() {
        $(document).ready(function () {
            var t = $("<style/>"),
                e = "::-moz-selection {color:#fff;background:#" + palette[random] + "}::selection{color:#fff;background:#" + palette[random] + "}";
            $(t).html(e.replace(/palette/g, palette)), $("body").append(t)
        })
    }

    function e() {
        var t = $(".projects-grid .project").width(),
            e = $(".projects-grid .project img").width();
        $(".projects-grid .project").css({
            height: .75 * t + 4
        }), $(".projects-grid .project img").css({
            height: .75 * e
        })
    }

    function o() {
        var t;
        t = $("body").width(), 640 > $("body").width() ? $(".grid .grid__item").css({
            width: t - 18 - 18
        }) : 960 > $("body").width() ? $(".grid .grid__item").css({
            width: (t - 18 - 18) / 2
        }) : $(".grid .grid__item").css({
            width: (t - 18 - 18) / 4
        })
    }

    function i() {
        r.each(function () {
            var t = $(this).attr("id"),
                e = $('ul.navigation li.anchor-link a[href="#' + t + '"]');
            $(this).offset().top - $(window).height() / 2 < $(window).scrollTop() && $(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop() ? e.addClass("current") : e.removeClass("current")
        })
    }
    var r = $(".wonderful-section");
    $("ul.navigation li.anchor-link").on("click", "a", function (t) {
        var e;
        t.preventDefault(), e = $(this.hash), $("body,html").animate({
            scrollTop: e.offset().top
        }, 250)
    }), $(window).on("resize", function () {
        feather.replace(), t(), e(), o()
    }), feather.replace(), t(), e(), o(), $(window).on("scroll", function () {
        i()
    }), i()
});