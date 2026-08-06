import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {GridHover} from "./pricing/grid-hover";
import {FormDropdowns} from "./pricing/form-dropdowns";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".dropdown");
	new GridHover('.pictures-grid__content');
	new FormDropdowns();
})