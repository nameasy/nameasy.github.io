(function (window) {
    "use strict";

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var has, add, remove;
    if ("classList" in document.documentElement) {
        has = function (elem, c) {
            return elem.classList.contains(c);
        };
        add = function (elem, c) {
            elem.classList.add(c);
        };
        remove = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        has = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        add = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + " " + c;
            }
        };
        remove = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), " ");
        };
    }

    function toggle(elem, c) {
        var fn = has(elem, c) ? remove : add;
        fn(elem, c);
    }
    var classie = {
        has: has,
        add: add,
        remove: remove,
        toggle: toggle
    };
    if (typeof define === "function" && define.amd) {
        define(classie);
    } else if (typeof exports === "object") {
        module.exports = classie;
    } else {
        window.classie = classie;
    }
})(window);
var parallax = (function () {
    var div = document.querySelector(".parallax");
    if (div) {
        var init = function () {
            var img = div.querySelector(".img_bg"),
                bg = make("div", "bg"),
                lastPosition = -1,
                transform = prefix(["transform", "msTransform", "WebkitTransform"]);
            bg.style.backgroundImage = "url( " + img.src + " )";
            insertAfter(img, bg);
            img.style.display = "none";
            div.style.backgroundImage = img.src;

            function scrollHandler() {
                var realPosition = window.pageYOffset,
                    parallaxPosition = Math.round(realPosition * 0.5);
                bg.style[transform] = "translateY( " + parallaxPosition + "px )";
            }

            function prefix(properties) {
                for (var i = 0; i < properties.length; i++) {
                    if (properties[i] in document.documentElement.style) {
                        return properties[i];
                    }
                }
            }

            function make(elemType, newClass) {
                var newElem = document.createElement(elemType);
                classie.add(newElem, newClass);
                return newElem;
            }

            function insertAfter(refElem, newElem) {
                refElem.parentNode.insertBefore(newElem, refElem.nextSibling);
            }

            function loop() {
                if (lastPosition == window.pageYOffset) {
                    window.requestAnimationFrame(loop);
                    return false;
                } else {
                    lastPosition = window.pageYOffset;
                    scrollHandler();
                }
                window.requestAnimationFrame(loop);
            }
            loop();
        };
        init();
    }
})();