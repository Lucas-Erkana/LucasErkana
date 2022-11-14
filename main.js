const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') { navigation.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});