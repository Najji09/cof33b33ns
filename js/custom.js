document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');
  let vh = window.innerHeight;
  console.log(vh);
  let bannerImg = document.querySelector('img.banner');
  let bannerTxt = document.querySelector('div.bannertxt');
  let bgTxt = document.querySelector('p.bgTxt');
  console.log(bannerImg);
  console.log(bannerTxt);
  document.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue > vh && scrollValue < vh * 2) {
      bannerImg.style.animation = 'fadeInLeft 1s ';
      bannerTxt.style.animation = 'fadeInRight 1s ';
    } else {
      bannerImg.style.animation = 'fadeOut 1s ';
      bannerTxt.style.animation = 'fadeOut 1s ';
    }
  });
});
