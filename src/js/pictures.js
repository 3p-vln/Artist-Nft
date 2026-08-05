import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
})