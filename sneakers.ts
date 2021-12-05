const circle = document.querySelectorAll('.blog-inner-box-controller-circle') as NodeListOf<HTMLElement>;
const sideNavBarLinks = document.querySelectorAll('.side-nav-bar-inner-form-links') as NodeListOf<HTMLElement>;
const checkBox = document.querySelector('.sign-up-accept-form_button') as HTMLStyleElement;
const sideNavBar = document.querySelector('.side-nav-bar') as HTMLStyleElement;
const sideNavBarExitBtn = document.querySelector('.side-nav-bar-inner-exit') as HTMLStyleElement;
const headerBtn = document.getElementById('headerBtn') as HTMLStyleElement;
const home = document.getElementById('home') as HTMLStyleElement;
const moon = document.querySelector('.fa-moon') as HTMLElement;
const body = document.getElementsByTagName('BODY')[0] as HTMLStyleElement;
const pageOfImgSmall = document.querySelectorAll('#page_of_img')[0] as HTMLStyleElement;
const pageOfImgBig = document.querySelectorAll('#page_of_img')[1] as HTMLStyleElement;
const changeImgSmall = document.querySelectorAll('#change-img-small_size') as NodeListOf<HTMLElement>;
const changeImgBig = document.querySelectorAll('#change-img-big_size') as NodeListOf<HTMLElement>;
const blogImg = document.querySelector("#blog_img") as HTMLImageElement;

const circleBackground: string = 'blog-inner-box-controller-circle-click-background';
const checkBG: string = 'fa-check';
const hide: string = 'hide';
let circleClassId: number = -1;
let resize: boolean = false;

const customer = [
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
]

moon.addEventListener('click', (item: Event) => {
  if(body?.classList?.contains('dark_mode'))
  body?.classList?.remove('dark_mode');

  else body?.classList?.add('dark_mode');
});

circle.forEach((items: Node) => {
  items.addEventListener("click", (item: Event) => {
    const circle_class = item.target as HTMLStyleElement;
    const id = parseInt(circle_class?.dataset["id"] as string)
    
    if(id == circleClassId) { circle_class?.classList?.remove(circleBackground); circleClassId = -1; }
    
    else {
      circleClassId = parseInt(circle_class.dataset['id'] as string);
      for(let i = 0; i < circle.length; i++) circle[i]?.classList?.remove(circleBackground);
      circle_class?.classList?.add(circleBackground);
    }
  });
});

sideNavBarLinks.forEach((items: Node) => {
  items.addEventListener('click', (item: Event) => {
    const navBarlink = item.target as HTMLStyleElement;
    item.preventDefault();
    let blockID = $(navBarlink).data("scroll");
		let elloffset: any = $(blockID).offset()?.top;
    $("html, body").animate({
			scrollTop: elloffset - 90
		}, 700);
  });
});

changeImgBig.forEach((items: Node) => {
  items.addEventListener('click', (item: Event) => {
    imagePagination(pageOfImgBig, item);
  });
});

changeImgSmall.forEach((items: Node) => {
  items.addEventListener('click', (item: Event) => {
    imagePagination(pageOfImgSmall, item);
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


window.addEventListener('scroll', () => { if(window.pageYOffset > 625) sideNavBar?.classList.remove(hide) });

window.addEventListener('load', () => window.innerWidth < 780 ? resize = true : resize = false);

window.addEventListener('resize', () => {
  if(window.innerWidth < 780 && !resize) { pageOfImgSmall.innerHTML = pageOfImgBig.innerHTML; resize = true; } 
  else if(window.innerWidth > 780 && resize == true) { pageOfImgBig.innerHTML = pageOfImgSmall.innerHTML; resize = false; }
  
})


function imagePagination(imagePage: HTMLElement, item:Event) {
  const getClass = item.target as HTMLStyleElement;
    if(getClass?.classList?.contains('fa-chevron-left')) {
      const getPage = imagePage.innerText.charAt(1) as string;
      const pageNumber = parseInt(getPage) as number;
      const changePageNumber = pageNumber - 1 as number;
      if(changePageNumber <= 0) { 
        imagePage.innerHTML = `06 / 06`; 
        blogImg['src'] = customer[customer.length - 1].src;
      } 
      else { 
        imagePage.innerHTML = `0${changePageNumber} / 06`; 
        blogImg['src'] = customer[changePageNumber-1].src;
      }
    }

    else if(getClass?.classList?.contains('fa-chevron-right')) {
      const getPage = imagePage.innerText.charAt(1) as string;
      const pageNumber = parseInt(getPage) as number;
      const changePageNumber = pageNumber + 1 as number;
      if(changePageNumber > 6) { 
        imagePage.innerHTML = `01 / 06`; 
        blogImg['src'] = customer[0].src;
      } 
      else {
        imagePage.innerHTML = `0${changePageNumber} / 06`;
        blogImg['src'] = customer[changePageNumber-1].src;
      }
    }
}

