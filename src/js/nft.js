import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {Pagination} from "./nft/pagination";
import {database} from "./data/simulate-db";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new Pagination()
})