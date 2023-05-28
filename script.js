const openMenu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.close-bar');
const menuLists = document.querySelector('.toolbar-2 ul');
const { body } = document;

openMenu.addEventListener('click', () => {
  body.classList.add('active');
  closeMenu.classList.add('active');
  menuLists.classList.add('active');
  openMenu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  body.classList.remove('active');
  closeMenu.classList.remove('active');
  menuLists.classList.remove('active');
  openMenu.classList.remove('active');
});
