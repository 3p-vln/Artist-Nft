import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {Pricelist} from "./premium/pricelist";
import {PremiumRedirect} from "./premium/premium-redirect";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new Pricelist();
	new PremiumRedirect();
})