const menu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.burger-menu__btn');

export function burgerMenu () {
	burgerBtn.addEventListener('click', () => {
		menu.classList.toggle('header__menu_active');
		burgerBtn.classList.toggle('burger-menu__btn_active');
	})
}
