"use strict";
var circle = document.querySelectorAll('.blog-inner-box-controller-circle');
var sideNavBarLinks = document.querySelectorAll('.side-nav-bar-inner-form-links');
var checkBox = document.querySelector('.sign-up-accept-form_button');
var sideNavBar = document.querySelector('.side-nav-bar');
var sideNavBarExitBtn = document.querySelector('.side-nav-bar-inner-exit');
var headerBtn = document.getElementById('headerBtn');
var home = document.getElementById('home');
var circleBG = 'blog-inner-box-controller-circle-click-background';
var checkBG = 'fa-check';
var hide = 'hide';
circle.forEach(function (items) {
    items.addEventListener("click", function (item) {
        var _a, _b, _c, _d;
        for (var i = 0; i < circle.length; i++)
            (_b = (_a = circle[i]) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.remove(circleBG);
        (_d = (_c = item === null || item === void 0 ? void 0 : item.target) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.add(circleBG);
    });
});
sideNavBarLinks.forEach(function (items) {
    items.addEventListener('click', function (item) {
        var _a;
        item.preventDefault();
        var blockID = $(item.target).data("scroll");
        var elloffset = (_a = $(blockID).offset()) === null || _a === void 0 ? void 0 : _a.top;
        $("html, body").animate({
            scrollTop: elloffset - 90
        }, 700);
    });
});
checkBox === null || checkBox === void 0 ? void 0 : checkBox.addEventListener('click', function () {
    var _a;
    if ((_a = checkBox === null || checkBox === void 0 ? void 0 : checkBox.classList) === null || _a === void 0 ? void 0 : _a.contains(checkBG))
        checkBox.classList.remove(checkBG);
    else
        checkBox.classList.add(checkBG);
});
headerBtn === null || headerBtn === void 0 ? void 0 : headerBtn.addEventListener('click', function () {
    sideNavBar === null || sideNavBar === void 0 ? void 0 : sideNavBar.classList.remove(hide);
});
sideNavBarExitBtn === null || sideNavBarExitBtn === void 0 ? void 0 : sideNavBarExitBtn.addEventListener('click', function () {
    if (window.pageYOffset < 625)
        sideNavBar === null || sideNavBar === void 0 ? void 0 : sideNavBar.classList.add(hide);
});
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 625)
        sideNavBar === null || sideNavBar === void 0 ? void 0 : sideNavBar.classList.remove(hide);
});
//# sourceMappingURL=sneakers.js.map