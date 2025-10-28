// Toggle class active

const navMenu = document.querySelector('nav ul');

document.querySelector('#hamburger input').onclick = () => {
  navMenu.classList.toggle('active');
};
