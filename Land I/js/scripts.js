window.addEventListener('load', start);

const menuList = document.querySelector('#menuList');
const imgBtn = document.querySelector('#img-btn');
menuList.style.maxHeight = '0px';

function start() {
  imgBtn.addEventListener('click', togglemenu);

  function togglemenu() {
    if (menuList.style.maxHeight == '0px') {
      menuList.style.maxHeight = '130px';
    } else {
      menuList.style.maxHeight = '0px';
    }
  }
}
