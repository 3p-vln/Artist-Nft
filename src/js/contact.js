import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {Parallax} from "./components/parallax";
import {ContactValidate} from "./components/contact-validate";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");

	new Parallax('.contact__bg.bg');
	new ContactValidate();
})