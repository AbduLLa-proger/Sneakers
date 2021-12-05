"use strict";
var circle = document.querySelectorAll('.blog-inner-box-controller-circle');
var sideNavBarLinks = document.querySelectorAll('.side-nav-bar-inner-form-links');
var checkBox = document.querySelector('.sign-up-accept-form_button');
var sideNavBar = document.querySelector('.side-nav-bar');
var sideNavBarExitBtn = document.querySelector('.side-nav-bar-inner-exit');
var headerBtn = document.getElementById('headerBtn');
var home = document.getElementById('home');
var moon = document.querySelector('.fa-moon');
var body = document.getElementsByTagName('BODY')[0];
var pageOfImgSmall = document.querySelectorAll('#page_of_img')[0];
var pageOfImgBig = document.querySelectorAll('#page_of_img')[1];
var changeImgSmall = document.querySelectorAll('#change-img-small_size');
var changeImgBig = document.querySelectorAll('#change-img-big_size');
var blogImg = document.querySelector("#blog_img");
var circleBackground = 'blog-inner-box-controller-circle-click-background';
var checkBG = 'fa-check';
var hide = 'hide';
var circleClassId = -1;
var resize = false;
var customer = [
    {
        src: './images/customer.png',
    },
    {
        src: './images/customer1.png',
    },
    {
        src: './images/customer2.png',
    },
    {
        src: './images/customer3.png',
    },
    {
        src: './images/customer4.png',
    },
    {
        src: './images/customer5.png',
    }
];
moon.addEventListener('click', function (item) {
    var _a, _b, _c;
    if ((_a = body === null || body === void 0 ? void 0 : body.classList) === null || _a === void 0 ? void 0 : _a.contains('dark_mode'))
        (_b = body === null || body === void 0 ? void 0 : body.classList) === null || _b === void 0 ? void 0 : _b.remove('dark_mode');
    else
        (_c = body === null || body === void 0 ? void 0 : body.classList) === null || _c === void 0 ? void 0 : _c.add('dark_mode');
});
circle.forEach(function (items) {
    items.addEventListener("click", function (item) {
        var _a, _b, _c, _d;
        var circle_class = item.target;
        var id = parseInt(circle_class === null || circle_class === void 0 ? void 0 : circle_class.dataset["id"]);
        if (id == circleClassId) {
            (_a = circle_class === null || circle_class === void 0 ? void 0 : circle_class.classList) === null || _a === void 0 ? void 0 : _a.remove(circleBackground);
            circleClassId = -1;
        }
        else {
            circleClassId = parseInt(circle_class.dataset['id']);
            for (var i = 0; i < circle.length; i++)
                (_c = (_b = circle[i]) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.remove(circleBackground);
            (_d = circle_class === null || circle_class === void 0 ? void 0 : circle_class.classList) === null || _d === void 0 ? void 0 : _d.add(circleBackground);
        }
    });
});
sideNavBarLinks.forEach(function (items) {
    items.addEventListener('click', function (item) {
        var _a;
        var navBarlink = item.target;
        item.preventDefault();
        var blockID = $(navBarlink).data("scroll");
        var elloffset = (_a = $(blockID).offset()) === null || _a === void 0 ? void 0 : _a.top;
        $("html, body").animate({
            scrollTop: elloffset - 90
        }, 700);
    });
});
changeImgBig.forEach(function (items) {
    items.addEventListener('click', function (item) {
        imagePagination(pageOfImgBig, item);
    });
});
changeImgSmall.forEach(function (items) {
    items.addEventListener('click', function (item) {
        imagePagination(pageOfImgSmall, item);
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
window.addEventListener('scroll', function () { if (window.pageYOffset > 625)
    sideNavBar === null || sideNavBar === void 0 ? void 0 : sideNavBar.classList.remove(hide); });
window.addEventListener('load', function () { return window.innerWidth < 780 ? resize = true : resize = false; });
window.addEventListener('resize', function () {
    if (window.innerWidth < 780 && !resize) {
        pageOfImgSmall.innerHTML = pageOfImgBig.innerHTML;
        resize = true;
    }
    else if (window.innerWidth > 780 && resize == true) {
        pageOfImgBig.innerHTML = pageOfImgSmall.innerHTML;
        resize = false;
    }
});
function imagePagination(imagePage, item) {
    var _a, _b;
    var getClass = item.target;
    if ((_a = getClass === null || getClass === void 0 ? void 0 : getClass.classList) === null || _a === void 0 ? void 0 : _a.contains('fa-chevron-left')) {
        var getPage = imagePage.innerText.charAt(1);
        var pageNumber = parseInt(getPage);
        var changePageNumber = pageNumber - 1;
        if (changePageNumber <= 0) {
            imagePage.innerHTML = "06 / 06";
            blogImg['src'] = customer[customer.length - 1].src;
        }
        else {
            imagePage.innerHTML = "0" + changePageNumber + " / 06";
            blogImg['src'] = customer[changePageNumber - 1].src;
        }
    }
    else if ((_b = getClass === null || getClass === void 0 ? void 0 : getClass.classList) === null || _b === void 0 ? void 0 : _b.contains('fa-chevron-right')) {
        var getPage = imagePage.innerText.charAt(1);
        var pageNumber = parseInt(getPage);
        var changePageNumber = pageNumber + 1;
        if (changePageNumber > 6) {
            imagePage.innerHTML = "01 / 06";
            blogImg['src'] = customer[0].src;
        }
        else {
            imagePage.innerHTML = "0" + changePageNumber + " / 06";
            blogImg['src'] = customer[changePageNumber - 1].src;
        }
    }
}
//# sourceMappingURL=sneakers.js.map