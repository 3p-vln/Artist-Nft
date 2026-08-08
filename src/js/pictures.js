import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {GridHover} from "./pricing/grid-hover";
import {FormDropdowns} from "./pricing/form-dropdowns";
import {Parallax} from "./components/parallax";
import {CustomValidate} from "./pricing/custom-validate";
import {CustomColor} from "./pricing/custom-color";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".dropdown");
	new GridHover('.pictures-grid__content');
	new FormDropdowns();
	new Parallax('.custom__bg.bg');
	new CustomColor();
	new CustomValidate();
})