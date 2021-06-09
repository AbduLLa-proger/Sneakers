"use strict";
const circle = document.querySelectorAll(".blog-inner-box-controller-circle");
const circleBG = "blog-inner-box-controller-circle-click-background";
circle.forEach((item) => {
    item.addEventListener("click", function(e) {
        for(let i = 0; i < circle.length; i++) circle[i]?.classList?.remove(circleBG);
        this.classList.add(circleBG);
    });
});
