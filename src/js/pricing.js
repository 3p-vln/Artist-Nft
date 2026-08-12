import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {GridHover} from "./pricing/grid-hover";
import {LoadCards} from "./pricing/load-cards";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new LoadCards(".pictures-grid__content", 1, 7);
	new GridHover('.pictures-grid__content');
})