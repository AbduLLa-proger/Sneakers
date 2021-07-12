const circle = document.querySelectorAll('.blog-inner-box-controller-circle');
const sideNavBarLinks = document.querySelectorAll('.side-nav-bar-inner-form-links');
const checkBox = document.querySelector('.sign-up-accept-form_button');
const sideNavBar = document.querySelector('.side-nav-bar');
const sideNavBarExitBtn = document.querySelector('.side-nav-bar-inner-exit');
const headerBtn = document.getElementById('headerBtn');
const home: any = document.getElementById('home');

const circleBG: string = 'blog-inner-box-controller-circle-click-background';
const checkBG: string = 'fa-check';
const hide: string = 'hide';

circle.forEach((items: any) => {
  items.addEventListener("click", (item: any) => {
    for(let i = 0; i < circle.length; i++) circle[i]?.classList?.remove(circleBG);
    item?.target?.classList?.add(circleBG);

  });
});

sideNavBarLinks.forEach((items: any) => {
  items.addEventListener('click', (item: any) => {
    item.preventDefault();
    let blockID = $(item.target).data("scroll");
		let elloffset: any = $(blockID).offset()?.top;
    $("html, body").animate({
			scrollTop: elloffset - 90
		}, 700);
  });
});

checkBox?.addEventListener('click', () => {
  if(checkBox?.classList?.contains(checkBG)) checkBox.classList.remove(checkBG);
  else checkBox.classList.add(checkBG);
});

headerBtn?.addEventListener('click', () => {
  sideNavBar?.classList.remove(hide);
});

sideNavBarExitBtn?.addEventListener('click', () => {
  if(window.pageYOffset < 625) sideNavBar?.classList.add(hide);
});

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 625) sideNavBar?.classList.remove(hide);
});

