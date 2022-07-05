/* let list = $('.about__list');
let item = $('.about__link');

item.hover(
  function() {
    list.addClass("hover");
  }, function() {
    list.removeClass("hover");
  }
); */

const link = document.querySelector('.about__link');
const container = document.querySelector('.about__list');

link.addEventListener('mouseover', (e) => {
  e.preventDefault();
  container.style.top = 100 + '%';
  container.style.transition = 'top 1s';
})

link.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  container.style.top = -11000 + 'px';
  container.style.transition = 'top 1s';
})